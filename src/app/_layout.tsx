import { View } from 'react-native';
import { RealmProvider } from '@realm/react';
import { Slot } from 'expo-router';

import { User } from '../database/schemas/user.schema';

export default function Layout() {
  return (
    <RealmProvider schema={[User]}>
      <View className="flex-1 bg-gray-900">
        <Slot />
      </View>
    </RealmProvider>
  );
}
