import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { api } from '../core/api';

import LoginScreen from '../features/login';

import { AuthenticatedNavigation } from './authenticated.routes';
import { useRedux } from '../hooks';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const auth = useRedux().useAppSelector((state) => state.auth);
  const authenticated =
    auth.access_token &&
    auth.expiration &&
    auth.expiration.toString() > Date.now().toString();
  if (authenticated) {
    api.defaults.headers.Authorization = 'Bearer ' + auth.access_token;
  }
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
