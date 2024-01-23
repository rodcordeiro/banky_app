import { api } from '@/core/api';
import { AccountsTypes } from '@/features/accounts/types/accounts.types';
import React from 'react';

export function useCreateExpenseHook() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [accounts, setAccounts] = React.useState<AccountsTypes.Account[]>();

  React.useLayoutEffect(() => {
    setLoading(true);
    api.get<AccountsTypes.Account[]>('/v1/accounts').then((response) => {
      setAccounts(response.data);
      setLoading(false);
    });
   
  }, []);
}
