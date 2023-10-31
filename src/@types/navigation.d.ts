import type { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Authenticated: undefined;

    Home: undefined;

    Accounts: undefined;
    AccountsHome: undefined;
    AccountsCreate: undefined;
    AccountView: {
      id: string;
    };

    Bills: undefined;
    BillsHome: undefined;
    BillsCreate: undefined;
    BillView: {
      id: string;
    };

    Expenses: undefined;
    ExpensesHome: undefined;
    ExpensesCreate: undefined;
    ExpenseView: {
      id: string;
    };
  };

  type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    T
  >;
}
