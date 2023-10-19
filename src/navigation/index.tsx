import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../features/home';
import LoginScreen from '../features/login';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<AuthenticatedRootStackParamList>();
const AuthenticatedNavigation = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{
      drawerStatusBarAnimation: 'slide',
    }}>
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: '',
        headerBackgroundContainerStyle: {
          backgroundColor: 'transparent',
        },
      }}
    />
  </Drawer.Navigator>
);

export const Navigator = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};
