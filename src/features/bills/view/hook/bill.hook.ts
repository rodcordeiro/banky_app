import React from 'react';

import { api } from '@/core/api';
import { BillsTypes } from '@/features/bills/types/bills.types';

type Props = {
  id: string;
};

export function useBillViewHook({ id }: Props) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [bill, setBill] = React.useState<BillsTypes.DetailedView>();

  React.useLayoutEffect(() => {
    setLoading(true);
    api
      .get<BillsTypes.DetailedView>(`/v1/bills/${id}`)
      .then((response) => {
        setBill(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return {
    loading,
    bill,
  };
}
