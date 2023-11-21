import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { View, Dimensions } from 'react-native';

import { store } from '@/redux/store.redux';
import { logOut, resetUser } from '@/redux/actions.redux';

import HomeScreen from '@/features/home';

import { Button } from '@/components/layout/button';
import { AccountsRoutes } from './accounts.routes';
import { BillsRoutes } from './bills.routes';
import { DrawerMenu } from '@/components/layout/Drawer';

const Drawer = createDrawerNavigator<AuthenticatedRoutesParamList>();

export const AuthenticatedNavigation = () => {
  const dispatch = store.dispatch;
  const { height } = Dimensions.get('window');
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
      drawerContent={(props) => <DrawerMenu {...props} />}>
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
      <Drawer.Screen
        name="Bills"
        component={BillsRoutes}
        options={{
          headerTitle: '',
          drawerIcon: ({ size, color }) => (
            <Feather name="file-text" color={color} size={size * 0.8} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
