import React from 'react';
import { api } from '@/core/api';
import { BillsTypes } from '@/features/bills/types/bills.types';

export function useBillsHomeHook() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [bills, setBills] = React.useState<BillsTypes.Bill[]>();

  React.useLayoutEffect(() => {
    setLoading(true);
    api.get<BillsTypes.Bill[]>('/v1/bills').then((response) => {
      setBills(response.data);
      setLoading(false);
    });
  }, []);
  return { bills, loading };
}
