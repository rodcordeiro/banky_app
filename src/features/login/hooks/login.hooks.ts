import React from 'react';

import { ToastProps } from '../../../components/layout/toast';
import { api } from '../../../core/api';
import usePersistedState from '../../../utils/usePersistedState';
import { store } from '../../../redux/store.redux';
import { login, loginError, loginStart } from '../../../redux/actions.redux';

import { LoginFormType } from '../types/login.types';
import { LoginRequest } from '../api/login.requests';
export function useLoginHook({ navigate }: ScreenProps<'Login'>['navigation']) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [toast, setToast] = React.useState<ToastProps>();
  const dispatch = store.dispatch;
  const handleSubmit = React.useCallback(async (data: LoginFormType) => {
    setLoading(true);
    dispatch(loginStart());

    await LoginRequest(data)
      .then((response) => {
        api.defaults.headers.Authorization =
          'Bearer ' + response.data.accessToken;
        dispatch(login(response.data));
        setToast({
          content: 'Logado com sucesso!',
          type: 'success',
          visible: true,
        });
        navigate('Authenticated');
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginError());
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
