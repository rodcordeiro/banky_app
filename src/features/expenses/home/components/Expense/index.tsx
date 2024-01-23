import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ExpensesTypes } from '@/features/expenses/types/expenses.types';

type Props = ExpensesTypes.Expense;
const Expense = ({ name, value, createdAt }: Props) => {
  const formatedDate = new Date(createdAt);
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name.slice(0, 20)}</Text>
      <Text style={styles.value}>R$ {value}</Text>
      <Text style={styles.date}>
        {formatedDate.getDay()}/{formatedDate.getMonth()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    flex: 5,
    // fontWeight: 'bold',
  },
  value: {
    flex: 3,
  },
  date: {
    fontSize: 14,
    flex: 1,
  },
});

export default Expense;
