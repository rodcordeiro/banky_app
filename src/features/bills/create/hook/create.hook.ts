import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { api } from '@/core/api';
import { AccountsTypes } from '@/features/accounts/types/accounts.types';
import { prepareOptions } from '@/utils/transformSelect';
import { SelectOption } from '@/components/tools/form/components/select';

import { BillsTypes } from '@/features/bills/types/bills.types';
import { BillCreateFormType } from '../types/create.types';
import { useToast } from '@/hooks';
import { AxiosError } from 'axios';

export function useCreateBillHook() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [accounts, setAccounts] = React.useState<SelectOption[]>();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const { showToast } = useToast();

  const frequencyOptions = [
    {
      label: 'Mensal',
      value: BillsTypes.BillFrequency.MONTHLY,
    },
    {
      label: 'Anual',
      value: BillsTypes.BillFrequency.YEARLY,
    },
  ];
  const handleSubmit = React.useCallback(
    async (payload: BillCreateFormType) => {
      setLoading(true);
      await api
        .post<BillsTypes.CreatedBill>('/v1/bills', {
          name: payload.name,
          frequency: payload.frequency.value,
          account: payload.account.value,
        })
        .then(({ data: { id } }) => {
          showToast({
            content: `Bill ${payload.name} created!`,
            type: 'success',
          });
          navigate('BillView', {
            id,
          });
        })
        .catch((err: AxiosError) =>
          showToast({
            content: err.message,
            type: 'error',
          }),
        )
        .finally(() => setLoading(false));
    },
    [],
  );

  React.useLayoutEffect(() => {
    setLoading(true);
    api
      .get<AccountsTypes.Account[]>('/v1/accounts')
      .then(({ data }) => prepareOptions(data, { label: 'name', value: 'id' }))
      .then((response) => {
        setAccounts(response);
      })
      .finally(() => setLoading(false));
  }, []);
  return { loading, accounts, frequencyOptions, handleSubmit };
}
