import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { AccountsTypes } from '@/features/accounts/types/accounts.types';
import { useAccountsHook } from './hooks/accounts.hook';

import { Account } from './components/account';
import { CreateButton } from './components/create';

const AccountsScreen: React.FC<ScreenProps<'AccountsHome'>> = ({
  navigation,
}) => {
  const { loading, accounts } = useAccountsHook();
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList<AccountsTypes.Account>
          data={accounts}
          renderItem={({ item }) => (
            <Account
              {...item}
              onPress={({ id }) => navigation.push('AccountView', { id })}
            />
          )}
          contentContainerStyle={styles.accounts}
          style={styles.accountsContainer}
        />
      )}
      <CreateButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountsContainer: {
    width: '80%',
    marginTop: 20,
  },
  accounts: {
    gap: 20,
  },
});

export default React.memo(AccountsScreen);
