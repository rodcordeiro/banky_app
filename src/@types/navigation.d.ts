import type { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  type RootStackParamList = {
    Login: undefined;
    Authenticated: undefined;
  };

  type AuthenticatedRootStackParamList = {
    Home: undefined;
    Accounts: undefined;
    AccountsHome: undefined;
  };

  type ScreenProps<
    T extends keyof (RootStackParamList & AuthenticatedRootStackParamList),
  > = NativeStackScreenProps<
    RootStackParamList & AuthenticatedRootStackParamList,
    T
  >;
}
