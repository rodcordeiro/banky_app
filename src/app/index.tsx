import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useQuery, useRealm } from '@realm/react';
import { UpdateMode } from 'realm';
import { toast } from '@backpackapp-io/react-native-toast';
import { router } from 'expo-router';

import { Input } from '../components/tools/Input';
import { Button } from '../components/layout/Button';
import { Reauthenticate, api } from '../lib/api';
import { User } from '../database/schemas/user.schema';

export default function HomePage() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [visiblePassword, setVisiblePassword] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const users = useQuery(User);
  const realm = useRealm();

  React.useEffect(() => {
    if (users) {
      const user = users[0];

      try {
        Reauthenticate(
          {
            login: user.username,
            refreshToken: user.refresh_token,
          },
          async data => {
            realm.write(() => {
              user.expires = new Date(data.expires).toISOString();
              user.refresh_token = data.refreshToken;
            });
          },
        );
        router.replace('/home');
      } catch (e) {
        realm.deleteAll();
      }
    }
  }, []);

  const handleLogin = React.useCallback(async () => {
    setLoading(true);
    const notification = toast.loading('Autenticando...');
    console.log(notification);
    await api
      .post<Authenticated.Authentication>('/api/v1/auth/login', {
        username,
        password,
      })
      .then(async ({ data }) => {
        api.defaults.headers.authorization = `Bearer ${data.accessToken}`;

        await api
          .get<Authenticated.AuthenticatedUser[]>('/api/v1/users/me')
          .then(({ data: user }) => {
            toast.success('Logado', { id: notification });
            realm.write(() =>
              realm.create(
                User.schema.name,
                {
                  username,
                  name: user[0].name,
                  refresh_token: data.refreshToken,
                  expires: new Date(data.expires),
                },
                UpdateMode.All,
              ),
            );
          });
      })
      .catch(err => toast.error(err, { id: notification }))
      .finally(() => {
        setLoading(false);
        setTimeout(() => toast.dismiss(notification), 5000);
      });
  }, [username, password]);

  return (
    <View className="flex-1 flex  justify-center items-center px-10 ">
      <Input>
        <Input.InputContainer
          placeholder="Login"
          onChangeText={setUsername}
          value={username}
        />
      </Input>
      <Input>
        <>
          <Input.InputContainer
            placeholder="Senha"
            secureTextEntry={!visiblePassword}
            onChangeText={setPassword}
            keyboardAppearance="dark"
            keyboardType="visible-password"
            value={password}
          />
          <Pressable onPress={() => setVisiblePassword(!visiblePassword)}>
            <Feather name={visiblePassword ? 'eye' : 'eye-off'} />
          </Pressable>
        </>
      </Input>
      <Button onPress={handleLogin} loading={loading}>
        <Button.ButtonText>Login</Button.ButtonText>
      </Button> 
    </View>
  );
}
