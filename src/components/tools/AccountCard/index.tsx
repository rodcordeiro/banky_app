import { View, Text } from 'react-native';
import { currency } from '@/src/utils/currency';

export type AccountCardProps = {
  account: Partial<Banky.Account>;
};

export function Accountcard({ account }: AccountCardProps) {
  return (
    <View className="flex columns-1 my-2 py-2 px-4 h-20 w-fit bg-gray-800 rounded">
      <Text className="text-white text-sm">{account.name}</Text>
      <Text className="text-white text-xl">
        {currency(account.ammount || 0)}
      </Text>
    </View>
  );
}
