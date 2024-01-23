import type { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  type PublicRoutesParamList = {
    Login: undefined;
    Register: undefined;
    Authenticated: undefined;
  };
  type AuthenticatedRoutesParamList = {
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

  type RootStackParamList = PublicRoutesParamList &
    AuthenticatedRoutesParamList;

  type ScreenProps<
    T extends keyof RootStackParamList,
    Authenticated = boolean,
  > = Authenticated extends false
    ? NativeStackScreenProps<PublicRoutesList, T>
    : NativeStackScreenProps<AuthenticatedRoutesList, T>;
}
