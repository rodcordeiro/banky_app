import React from 'react';


import { LoginFormType } from '../types/login.types';
import { LoginRequest } from '../api/login.requests';
import { api } from '../../../core/api';

export function LoginHook() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleSubmit = React.useCallback(async (data: LoginFormType) => {
    setLoading(true);
    await LoginRequest(data)
      .then((response) => {
        if (response.data.authenticated) {
          // return Toast.show('Falha ao efetuar login', {
          //   backgroundColor: 'red',
          //   textColor: 'white',
          //   duration: Toast.durations.LONG,
          // });
        }
        api.defaults.headers.Authorization =
          'Bearer ' + response.data.accessToken;
        // Toast.show('Login bem sucedido', {
        //   backgroundColor: 'green',
        //   textColor: 'white',
        //   duration: Toast.durations.LONG,
        // });
      })
      .catch((err) => {
        // Toast.show(err.message, {
        //   backgroundColor: 'red',
        //   textColor: 'white',
        //   duration: Toast.durations.LONG,
        // });
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, handleSubmit };
}
