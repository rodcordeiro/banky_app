import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BillsHomeScreen from '@/features/bills/home';
import BillViewScreen from '@/features/bills/view';
const Stack = createNativeStackNavigator<RootStackParamList>();

export const BillsRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="BillsHome" component={BillsHomeScreen} />
    <Stack.Screen name="BillView" component={BillViewScreen} />
  </Stack.Navigator>
);
