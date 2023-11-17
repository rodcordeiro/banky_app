import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { BillsTypes } from '@/features/bills/types/bills.types';

type Props = {
  onPress: (bill: BillsTypes.Bill) => void;
} & BillsTypes.Bill;

const Bill = (bill: Props) => {
  const { frequency, name, onPress } = bill;

  return (
    <Pressable onPress={() => onPress(bill)} style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export { Bill };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    minHeight: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '200',
  },
});
