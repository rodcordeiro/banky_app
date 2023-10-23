import React from 'react';
import { View, Text } from 'react-native';

import { version } from '../../../package.json';
import { Toast } from '../../components/layout/toast';
import { Form } from '../../components/tools/form';

import { loginFormSchema } from './types/login.types';
import { styles } from './styles';
import { useLoginHook } from './hooks/login.hooks';

const LoginScreen: React.FC<ScreenProps<'Login'>> = ({ navigation }) => {
  const { loading, handleSubmit, toast } = useLoginHook(navigation);
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
            selectTextOnFocus: true,
          },
        ]}
        submitButtonText="Acessar"
        handleSubmit={handleSubmit}
      />
      <Toast
        content={toast?.content || 'Login toast'}
        type={toast?.type || 'info'}
        visible={!!toast}
      />
      <Text
        style={{
          fontSize: 12,
          color: 'lightgray',
          fontWeight: '200',
        }}>
        v{version}
      </Text>
    </View>
  );
};
export default React.memo(LoginScreen);
