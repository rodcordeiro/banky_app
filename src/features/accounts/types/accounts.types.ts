export namespace AccountsTypes {
  export enum AccountType {
    CREDIT = 'credit',
    DEBIT = 'debit',
    CASH = 'cash',
    CREDIT_AND_DEBIT = 'credit_and_debit',
  }

  export type Account = {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    type: AccountType;
  };
  export type AccountDetails = Account;
}
