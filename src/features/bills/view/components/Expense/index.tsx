import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ExpensesTypes } from '@/features/expenses/types/expenses.types';

type Props = {
  onPress: (expense: ExpensesTypes.Expense) => void;
} & ExpensesTypes.Expense;

const { width } = Dimensions.get('window');

export const ExpenseItem = (props: Props) => {
  return (
    <View>
      <View style={[styles.container, styles.row]}>
        <Text style={styles.date}>
          {new Date(props.createdAt).toLocaleDateString()}
        </Text>
        <View style={styles.row}>
          <Text style={styles.currency}>R$ </Text>
          <Text style={styles.value}>{props.value}</Text>
          <Feather
            name="external-link"
            style={styles.icon}
            onPress={() => props.onPress(props)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  container: {
    width: width * 0.9,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  date: {
    fontSize: 16,
    left: 40,
    color: 'gray',
  },
  value: {
    color: '#8A2BE2',
    fontSize: 20,
    right: 20,
  },
  currency: {
    right: 20,
    color: '#8A2BE2',
  },
  icon: {
    right: 10,
    paddingHorizontal: 10,
  },
});
