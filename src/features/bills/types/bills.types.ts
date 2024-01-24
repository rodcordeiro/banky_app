import { ExpensesTypes } from '@/features/expenses/types/expenses.types';

export namespace BillsTypes {
  export type Bill = {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    frequency: BillFrequency;
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

  export enum BillFrequency {
    MONTHLY = 'monthly',
    YEARLY = 'yearly',
  }
  export type CreatedBill = {
    owner: {
      createdAt: string;
      id: string;
      name: string;
      updatedAt: string;
      username: string;
    };
  } & Omit<DetailedView, 'expenses'>;
}
