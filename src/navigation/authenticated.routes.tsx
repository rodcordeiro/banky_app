import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import usePersistedState from '../utils/usePersistedState';

import HomeScreen from '../features/home';
import AccountsScreen from '../features/accounts/home';
import { Button } from '../components/layout/button';
import { AccountsRoutes } from './accounts.routes';

const Drawer = createDrawerNavigator<AuthenticatedRootStackParamList>();

export const AuthenticatedNavigation = () => {
  const [_, setAuthenticated] = usePersistedState<boolean>(
    'authenticated',
    false,
  );
  const resetAuth = () => {
    setAuthenticated(false);
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStatusBarAnimation: 'slide',
        drawerActiveBackgroundColor: '#09f1',
        headerBackgroundContainerStyle: {
          backgroundColor: 'transparent',
        },

        drawerType: 'slide',
        swipeEnabled: true,
        swipeEdgeWidth: 50,
      }}
      drawerContent={(props) => (
        <View style={{ flex: 1, height: '100%' }}>
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <Button
              content="Logoff"
              style={{ position: 'absolute', bottom: 10, width: '80%' }}
              onPress={() => resetAuth()}
            />
          </DrawerContentScrollView>
        </View>
      )}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: '',

          drawerIcon: ({ size, color }) => (
            <Feather name="home" color={color} size={size * 0.8} />
          ),
        }}
      />
      <Drawer.Screen
        name="Accounts"
        component={AccountsRoutes}
        options={{
          headerTitle: '',

          drawerIcon: ({ size, color }) => (
            <Feather name="credit-card" color={color} size={size * 0.8} />
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
};
