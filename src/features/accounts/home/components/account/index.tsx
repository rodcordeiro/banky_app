import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { AccountsTypes } from '@/features/accounts/types/accounts.types';

type Props = {
  onPress: (account: AccountsTypes.Account) => void;
} & AccountsTypes.Account;

const Account = (account: Props) => {
  const { type, name, onPress } = account;
  const enablesCash = type === AccountsTypes.AccountType.CASH;
  const enablesDebit =
    type === AccountsTypes.AccountType.DEBIT ||
    type === AccountsTypes.AccountType.CREDIT_AND_DEBIT;
  const enablesCredit =
    type === AccountsTypes.AccountType.CREDIT ||
    type === AccountsTypes.AccountType.CREDIT_AND_DEBIT;

  return (
    <Pressable onPress={() => onPress(account)} style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.iconsContainer}>
        <Feather
          name="credit-card"
          size={20}
          color={enablesDebit ? '#8A2BE2' : 'lightgray'}
        />
        <Feather
          name="dollar-sign"
          size={20}
          color={enablesCredit ? '#8A2BE2' : 'lightgray'}
        />
        <Feather
          name="dollar-sign"
          size={20}
          color={enablesCash ? '#8A2BE2' : 'lightgray'}
        />
      </View>
    </Pressable>
  );
};

export { Account };

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
