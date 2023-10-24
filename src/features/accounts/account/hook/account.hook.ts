import React from 'react';
import { AccountsTypes } from '../../types/accounts.types';
import { api } from '../../../../core/api';

type Props = {
  id: string;
};
export function useAccountViewHook({ id }: Props) {
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

  return {
    loading,
    account,
  };
}
