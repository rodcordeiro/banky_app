import React from 'react';
import { Native as Sentry } from 'sentry-expo';
import { AxiosError } from 'axios';

import { ToastProps } from '@/components/layout/toast';
import { api } from '@/core/api';
import { store } from '@/redux/store.redux';
import {
  login,
  loginError,
  loginStart,
  defineUser,
} from '@/redux/actions.redux';

import { LoginFormType } from '@/features/login/types/login.types';
import {
  LoginRequest,
  GetUserRequest,
} from '@/features/login/api/login.requests';

export function useLoginHook({ navigate }: ScreenProps<'Login'>['navigation']) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [toast, setToast] = React.useState<ToastProps>();
  const [errorProps, setErrorProps] = React.useState<any>();
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

        dispatch(login(response.data));

        navigate('Authenticated');
      })
      .catch((err: AxiosError) => {
        dispatch(loginError());

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

  return { loading, handleSubmit, toast, errorProps };
}
