import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import { store } from '../redux/store.redux';
import { logOut } from '../redux/actions.redux';

import HomeScreen from '../features/home';

import { Button } from '../components/layout/button';
import { AccountsRoutes } from './accounts.routes';

const Drawer = createDrawerNavigator<RootStackParamList>();

export const AuthenticatedNavigation = () => {
  const dispatch = store.dispatch;

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
        <View style={{ flex: 1 }}>
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <Button
              content="Logoff"
              style={{ position: 'absolute', bottom: 10, width: '80%' }}
              onPress={() => dispatch(logOut())}
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
