import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { BillsTypes } from '@/features/bills/types/bills.types';
import { useBillsHomeHook } from './hooks/bills.hooks';

import { Bill } from './components/Bill';
import { CreateButton } from './components/create';

const BillsHomeScreen: React.FC<ScreenProps<'BillsHome', true>> = ({
  navigation,
}) => {
  const { loading, bills } = useBillsHomeHook();
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList<BillsTypes.Bill>
          data={bills}
          renderItem={({ item }) => (
            <Bill
              {...item}
              onPress={({ id }) => navigation.push('BillView', { id })}
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

export default React.memo(BillsHomeScreen);
