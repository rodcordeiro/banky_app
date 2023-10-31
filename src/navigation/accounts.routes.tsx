import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountsScreen from '@/features/accounts/home';
import AccountsViewScreen from '@/features/accounts/account';
import AccountsCreateScreen from '@/features/accounts/create';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AccountsRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="AccountsHome" component={AccountsScreen} />
    <Stack.Screen name="AccountView" component={AccountsViewScreen} />
    <Stack.Screen name="AccountsCreate" component={AccountsCreateScreen} />
  </Stack.Navigator>
);
