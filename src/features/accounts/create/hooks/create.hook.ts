import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { api } from '@/core/api';
import { AccountsTypes } from '@/features/accounts/types/accounts.types';

import { AccountCreateFormType } from '../types/create.type';

export const useAccountsCreate = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const [loading, setLoading] = React.useState<boolean>(false);
  const handleSubmit = async (params: AccountCreateFormType) => {
    setLoading(true);
    await api
      .post<AccountsTypes.AccountDetails>(`/v1/accounts`, {
        name: params.name,
        type: params.type.value,
      })
      .then((response) => {
        navigate('AccountView', {
          id: response.data.id,
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  };
  return {
    loading,
    handleSubmit,
  };
};
