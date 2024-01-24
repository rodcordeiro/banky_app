import React from 'react';
import { AxiosError } from 'axios';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { api } from '@/core/api';
import { prepareOptions } from '@/utils/transformSelect';
import { SelectOption } from '@/components/tools/form/components/select';
import { AccountsTypes } from '@/features/accounts/types/accounts.types';
import { BillsTypes } from '@/features/bills/types/bills.types';
import { useToast } from '@/hooks';

import { ExpenseCreateFormType } from '../types/create.type';

export function useCreateExpenseHook() {
  const { showToast } = useToast();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [accounts, setAccounts] = React.useState<SelectOption[]>([]);
  const [bills, setBills] = React.useState<SelectOption[]>([]);
  const type_options = [
    {
      label: 'Dinheiro',
      value: AccountsTypes.AccountType.CASH,
    },
    {
      label: 'Debito',
      value: AccountsTypes.AccountType.DEBIT,
    },
    {
      label: 'Crédito',
      value: AccountsTypes.AccountType.CREDIT,
    },
    {
      label: 'Crédito e Débito',
      value: AccountsTypes.AccountType.CREDIT_AND_DEBIT,
    },
  ];

  const handleSubmit = React.useCallback(
    async (data: ExpenseCreateFormType) => {
      const payload = {
        name: data.name,
        paymentType: data.type.value,
        value: data.value,
        account: data.account.value,
        bill: data.bill ? data.bill.value : undefined,
      };
      await api
        .post('/v1/expenses', payload)
        .then(({ data: teste }) => {
          console.log(teste);
          showToast({
            content: `Expense ${payload.name} created!`,
            type: 'success',
          });
          navigate('ExpensesHome');
        })
        .catch((err: AxiosError) => {
          console.log(err.response?.data);
          showToast({
            content: err.message,
            type: 'error',
          });
        })
        .finally(() => setLoading(false));
    },
    [],
  );

  React.useLayoutEffect(() => {
    setLoading(true);
    api.get<AccountsTypes.Account[]>('/v1/accounts').then((response) => {
      setAccounts(
        prepareOptions(response.data, { label: 'name', value: 'id' }),
      );
      setLoading(false);
    });
    api.get<BillsTypes.Bill[]>('/v1/bills').then((response) => {
      setBills(prepareOptions(response.data, { label: 'name', value: 'id' }));
      setLoading(false);
    });
  }, []);
  return { loading, accounts, type_options, bills, handleSubmit };
}
