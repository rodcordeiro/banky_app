import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View, Dimensions } from 'react-native';

import { Button } from '@/components/layout/button';
import { logOut, resetUser } from '@/redux/actions.redux';
import { store } from '@/redux/store.redux';

export const DrawerMenu: React.FC<DrawerContentComponentProps> = (props) => {
  const { height } = Dimensions.get('window');
  const dispatch = store.dispatch;

  return (
    <View style={{ flex: 1, height }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          content="Logout"
          onPress={() => {
            dispatch(logOut());
            dispatch(resetUser());
          }}
        />
      </View>
    </View>
  );
};
