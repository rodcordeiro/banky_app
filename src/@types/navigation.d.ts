import type { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  type RootStackParamList = {
    Login: undefined;
    Authenticated: undefined;

    Home: undefined;
    Accounts: undefined;
    AccountsHome: undefined;
    AccountView: {
      id: string;
    };
  };

  type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    T
  >;
}
