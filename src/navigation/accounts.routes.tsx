import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountsScreen from '../features/accounts/home';
import AccountsViewScreen from '../features/accounts/account';

const Stack = createNativeStackNavigator<AuthenticatedRootStackParamList>();

export const AccountsRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="AccountsHome" component={AccountsScreen} />
    <Stack.Screen name="AccountView" component={AccountsViewScreen} />
  </Stack.Navigator>
);
