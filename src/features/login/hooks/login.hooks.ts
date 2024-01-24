import React from 'react';
import { Native as Sentry } from 'sentry-expo';
import { AxiosError } from 'axios';

import { api } from '@/core/api';
import { store } from '@/redux/store.redux';
import { login, loginError, loginStart } from '@/redux/actions.redux';

import { LoginFormType } from '@/features/login/types/login.types';
import { LoginRequest } from '@/features/login/api/login.requests';
import { useToast } from '@/hooks';

export function useLoginHook({ navigate }: ScreenProps<'Login'>['navigation']) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorProps, setErrorProps] = React.useState<any>();
  const { showToast } = useToast();
  const dispatch = store.dispatch;

  const handleSubmit = React.useCallback(async (data: LoginFormType) => {
    setLoading(true);
    dispatch(loginStart());
    Sentry.addBreadcrumb({
      category: 'User authentication payload',
      message: JSON.stringify(data),
    });
    await LoginRequest(data)
      .then(async (response) => {
        api.defaults.headers.Authorization =
          'Bearer ' + response.data.accessToken;

        showToast({
          content: 'Login bem sucedido!',
          type: 'success',
        });
        dispatch(login(response.data));
      })
      .catch((err: AxiosError) => {
        dispatch(loginError());
        showToast({
          content: `Falha ao acessar. ERR_MSG: ${err.message}`,
          type: 'error',
        });
        setErrorProps({
          payload: data,
          status: err.response?.status,
          'response-data': err.response?.data,
          config: err.response?.config,
          headers: err.response?.headers,
        });
        Sentry.captureException(err);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, handleSubmit, errorProps };
}
