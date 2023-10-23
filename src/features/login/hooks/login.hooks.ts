import React from 'react';

import { ToastProps } from '../../../components/layout/toast';
import { api } from '../../../core/api';
import usePersistedState from '../../../utils/usePersistedState';

import { LoginFormType } from '../types/login.types';
import { LoginRequest } from '../api/login.requests';
import { useNavigation } from '@react-navigation/native';
export function LoginHook({ navigate }: ScreenProps<'Login'>['navigation']) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [toast, setToast] = React.useState<ToastProps>();
  const [, setAuthenticated] = usePersistedState<boolean>(
    'authenticated',
    false,
  );
  const [, setRefreshToken] = usePersistedState<string>('refreshToken', '');
  const [, setExpiration] = usePersistedState<string>('expiration', '');

  const handleSubmit = React.useCallback(async (data: LoginFormType) => {
    setLoading(true);
    await LoginRequest(data)
      .then((response) => {
        api.defaults.headers.Authorization =
          'Bearer ' + response.data.accessToken;
        setAuthenticated(true);
        setRefreshToken(response.data.refreshToken);
        setExpiration(new Date(response.data.expires).toISOString());
        setToast({
          content: 'Logado com sucesso!',
          type: 'success',
          visible: true,
        });
        navigate('Authenticated');
      })
      .catch((err) => {
        console.log(err);
        setToast({
          content: 'Falha ao logar',
          type: 'error',
          visible: true,
        });
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, handleSubmit, toast };
}
