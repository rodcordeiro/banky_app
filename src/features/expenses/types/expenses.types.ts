export namespace ExpensesTypes {
  export type Expense = {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    paymentType: string;
    value: number;
  };
}
