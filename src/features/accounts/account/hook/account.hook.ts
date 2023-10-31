import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AccountsTypes } from '@/features/accounts/types/accounts.types';
import { api } from '@/core/api';

type Props = {
  id: string;
};
export function useAccountViewHook({ id }: Props) {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [account, setAccount] = React.useState<AccountsTypes.AccountDetails>();

  React.useLayoutEffect(() => {
    setLoading(true);
    api
      .get<AccountsTypes.AccountDetails>(`/v1/accounts/${id}`)
      .then((response) => {
        setAccount(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = async () => {
    setLoading(true);
    await api
      .delete(`/v1/accounts/${id}`)
      .then(() => {
        navigate('AccountsHome');
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return {
    loading,
    account,
    handleDelete,
  };
}
