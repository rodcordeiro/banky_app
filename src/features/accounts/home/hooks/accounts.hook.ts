import React from 'react';
import { api } from '../../../../core/api';
import { AccountsTypes } from '../../types/accounts.types';

export function useAccountsHook() {
  const [accounts, setAccounts] = React.useState<AccountsTypes.Account[]>();

  React.useLayoutEffect(() => {
    api.get<AccountsTypes.Account[]>('/v1/accounts').then((response) => {
      setAccounts(response.data);
    });
  }, []);
  return { accounts };
}
