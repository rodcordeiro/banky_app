import { RealmProvider } from '@realm/react';
import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Toasts } from '@backpackapp-io/react-native-toast';

import { User } from '../database/schemas/user.schema';

export default function Layout() {
  return (
    <RealmProvider schema={[User]}>
      <SafeAreaProvider>
        <GestureHandlerRootView className="flex-1 bg-gray-900">
          <Slot />
          <Toasts />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </RealmProvider>
  );
}
