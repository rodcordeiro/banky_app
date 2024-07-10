import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useQuery } from '@realm/react';

import { Input } from '../components/tools/Input';
import { Button } from '../components/layout/Button';
import { api } from '../lib/api';
import { User } from '../database/schemas/user.schema';

export default function HomePage() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [visiblePassword, setVisiblePassword] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const users = useQuery(User);

  React.useEffect(() => {
    if (users) console.log(users);
  }, []);

  const handleLogin = React.useCallback(async () => {
    setLoading(true);
    await api
      .post('/api/v1/auth/login', { username, password })
      .then(response => console.log(response.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
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
      </Input>
      <Button onPress={handleLogin} loading={loading}>
        <Button.ButtonText>Login</Button.ButtonText>
      </Button>
    </View>
  );
}
