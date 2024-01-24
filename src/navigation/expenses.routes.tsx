import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExpensesHomeScreen from '@/features/expenses/home';
import ExpensesCreateScreen from '@/features/expenses/create';

const Stack = createNativeStackNavigator<AuthenticatedRoutesParamList>();

export const ExpensesRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="ExpensesHome" component={ExpensesHomeScreen} />
    <Stack.Screen name="ExpensesCreate" component={ExpensesCreateScreen} />
  </Stack.Navigator>
);
