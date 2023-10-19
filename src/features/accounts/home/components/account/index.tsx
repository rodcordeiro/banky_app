import { Text, View, StyleSheet } from 'react-native';

import { AccountsTypes } from '../../../types/accounts.types';

const Account = ({ name }: AccountsTypes.Account) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

export { Account };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
