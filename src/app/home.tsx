import { useQuery } from '@realm/react';
import { Text, View } from 'react-native';
import { User } from '../database/schemas/user.schema';

export default function Home() {
  const users = useQuery(User);

  return (
    <View className="flex-1 flex items-center px-10 ">
      <View className="mt-14">
        <Text>Oi</Text>
      </View>
    </View>
  );
}
