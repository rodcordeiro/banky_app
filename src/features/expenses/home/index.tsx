import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import { ExpensesTypes } from '../types/expenses.types';

import { useExpenseHomeHook } from './hooks/expense.hook';
import Expense from './components/Expense';
import { CreateButton } from './components/create';

const ExpensesHomeScreen: React.FC<
  ScreenProps<'ExpensesHome', true>
> = ({}) => {
  const { loading, expenses, loadExpenses } = useExpenseHomeHook();
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <View style={styles.card}>
          <FlatList<ExpensesTypes.Expense>
            data={expenses}
            renderItem={({ item }) => (
              <Expense
                {...item}
                //   onPress={({ id }) => navigation.push('BillView', { id })}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.line} />}
            contentContainerStyle={styles.accounts}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={loadExpenses} />
            }
            style={styles.accountsContainer}
          />
          <CreateButton />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    width: '90%',
    height: '90%',
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 10,
  },
  accountsContainer: {
    width: '80%',
    marginTop: 20,
  },
  accounts: {
    // gap: 10,
  },
  line: {
    height: 2,
    width: '100%',
    marginLeft: 10,
    backgroundColor: '#8A2BE218',
  },
});

export default React.memo(ExpensesHomeScreen);
