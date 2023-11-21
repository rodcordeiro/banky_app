import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useRedux } from '@/hooks';

import LoginScreen from '@/features/login';

import { AuthenticatedNavigation } from './authenticated.routes';

const Stack = createNativeStackNavigator<PublicRoutesParamList>();

export const Navigator = () => {
  const authenticated = useRedux().useAppSelector(
    ({ auth }) =>
      !!auth.access_token &&
      !!auth.expiration &&
      auth.expiration.toString() > Date.now().toString(),
  );

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
