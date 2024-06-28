import { View } from 'react-native';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <View className="flex-1 bg-gray-900">
      <Slot />
    </View>
  );
}
