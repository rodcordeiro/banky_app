import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { AccountsTypes } from '../types/accounts.types';
import { useAccountsHook } from './hooks/accounts.hook';

import { Account } from './components/account';

const AccountsScreen = () => {
  const { accounts } = useAccountsHook();
  return (
    <View style={styles.container}>
      <FlatList<AccountsTypes.Account>
        data={accounts}
        renderItem={({ item }) => <Account {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default React.memo(AccountsScreen);
