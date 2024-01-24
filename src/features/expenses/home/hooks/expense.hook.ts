import React from 'react';
import { ExpensesTypes } from '../../types/expenses.types';
import { api } from '@/core/api';
export function useExpenseHomeHook() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [expenses, setExpenses] = React.useState<ExpensesTypes.Expense[]>();

  const loadExpenses = () => {
    setLoading(true);
    api.get<ExpensesTypes.Expense[]>('/v1/expenses').then((response) => {
      console.log(response.data);
      setExpenses(response.data);
      setLoading(false);
    });
  };
  React.useLayoutEffect(() => {
    loadExpenses();
  }, []);
  return { loading, expenses, loadExpenses };
}
