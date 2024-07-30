import { View, Text } from 'react-native';
import { currency } from '@/src/utils/currency';

export type AccountCardProps = {
  account: Partial<Banky.Account>;
};

export function Accountcard({ account }: AccountCardProps) {
  return (
    <View>
      <Text className="text-white">{account.name}</Text>
      <Text className="text-white">{currency(account.ammount || 0)}</Text>
    </View>
  );
}
