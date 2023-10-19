import React from 'react';
import { View } from 'react-native';

import { Form } from '../../components/tools/form';

import { loginFormSchema } from './types/login.types';
import { styles } from './styles';
import { LoginHook } from './hooks/login.hooks';

const LoginScreen: React.FC<ScreenProps<'Login'>> = ({ navigation }) => {
  const { loading, handleSubmit } = LoginHook();
  return (
    <View style={styles.container}>
      <Form
        zodSchema={loginFormSchema}
        isLoading={loading}
        inputs={[
          {
            name: 'username',
            type: 'text',
            placeholder: 'Username',
          },
          {
            name: 'password',
            type: 'password',
            placeholder: 'Password',
          },
        ]}
        submitButtonText="Acessar"
        handleSubmit={handleSubmit}
      />
    </View>
  );
};
export default React.memo(LoginScreen);
