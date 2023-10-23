import React from 'react';
import { View, Text } from 'react-native';

const AccountViewScreen: React.FC<ScreenProps<'AccountView'>> = ({ route }) => {
  const { params } = route;
  return (
    <View>
      <Text>Account</Text>
      <Text>{params.id}</Text>
    </View>
  );
};

export default React.memo(AccountViewScreen);
