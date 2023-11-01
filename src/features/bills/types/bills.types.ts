import { ExpensesTypes } from '@/features/expenses/types/expenses.types';

export namespace BillsTypes {
  export type Bill = {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    frequency: string;
  };
  export type DetailedView = {
    account: {
      id: string;
      createdAt: string;
      updatedAt: string;
      name: string;
      type: string;
    };
    expenses: ExpensesTypes.Expense[];
    averageValue: string;
  } & Bill;
}
