import { View, Text } from 'react-native';
import { currency } from '@/src/utils/currency';

export type AccountCardProps = {
  account: Partial<Banky.Account>;
};

export function Accountcard({ account }: AccountCardProps) {
  return (
    <View className="flex columns-1 px-4 py-2 bg-gray-800 rounded-sm">
      <Text className="text-gray-400">{account.name}</Text>
      <Text className="text-gray-300">{currency(account.ammount || 0)}</Text>
    </View>
  );
}
