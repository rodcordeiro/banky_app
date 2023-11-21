import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BillsHomeScreen from '@/features/bills/home';
import BillViewScreen from '@/features/bills/view';
import BillCreateScreen from '@/features/bills/create';

const Stack = createNativeStackNavigator<AuthenticatedRoutesParamList>();

export const BillsRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="BillsHome" component={BillsHomeScreen} />
    <Stack.Screen name="BillView" component={BillViewScreen} />
    <Stack.Screen name="BillsCreate" component={BillCreateScreen} />
  </Stack.Navigator>
);
