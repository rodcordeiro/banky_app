import React from 'react';
import { api } from '@/core/api';
import { AccountsTypes } from '@/features/accounts/types/accounts.types';

export function useAccountsHook() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [accounts, setAccounts] = React.useState<AccountsTypes.Account[]>();

  React.useLayoutEffect(() => {
    setLoading(true);
    api.get<AccountsTypes.Account[]>('/v1/accounts').then((response) => {
      setAccounts(response.data);
      setLoading(false);
    });
  }, []);
  return { accounts, loading };
}
