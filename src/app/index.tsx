import React from 'react';
import { View, Text } from 'react-native';
import { Input } from '../components/tools/Input';
import { Button } from '../components/layout/Button';
export default function HomePage() {
  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
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
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </Input>
      <Button onPress={() => console.log({ username, password })}>
        <Button.ButtonText>Login</Button.ButtonText>
      </Button>
    </View>
  );
}
