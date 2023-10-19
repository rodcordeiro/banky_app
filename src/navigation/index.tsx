import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import usePersistedState from '../utils/usePersistedState';

import HomeScreen from '../features/home';
import AccountsScreen from '../features/accounts/home';
import LoginScreen from '../features/login';
import { Button } from '../components/layout/button';
import { AuthenticatedNavigation } from './authenticated.routes';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<AuthenticatedRootStackParamList>();

export const Navigator = () => {
  const [authenticated, setAuthenticated] = usePersistedState<boolean>(
    'authenticated',
    false,
  );

  console.log({ authenticated });
  return (
    <NavigationContainer>
      {!authenticated ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Authenticated"
            component={AuthenticatedNavigation}
          />
        </Stack.Navigator>
      ) : (
        <AuthenticatedNavigation />
      )}
    </NavigationContainer>
  );
};
