import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { version } from '@/../package.json';
// import { Toast } from '../../components/layout/toast';
import { Form } from '@/components/tools/form';

import { loginFormSchema } from './types/login.types';
import { styles } from './styles';
import { useLoginHook } from './hooks/login.hooks';

const LoginScreen: React.FC<ScreenProps<'Login', false>> = ({ navigation }) => {
  const { loading, handleSubmit, errorProps } = useLoginHook(navigation);
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
      <Text selectable>{!!errorProps && JSON.stringify(errorProps)}</Text>

      <Text
        style={{
          fontSize: 12,
          color: 'black',
          fontWeight: '200',
          position: 'absolute',
          bottom: 10,
        }}>
        v{version}
      </Text>
    </View>
  );
};
export default React.memo(LoginScreen);
