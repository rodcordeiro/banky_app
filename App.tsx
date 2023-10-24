import 'react-native-gesture-handler';
import React from 'react';
import * as Updates from 'expo-updates';
import * as SplashScreen from 'expo-splash-screen';
import Banky from './src';

export default function App() {
  React.useLayoutEffect(() => {
    async function updateApp() {
      if (process.env.NODE_ENV === 'development') {
        return;
      }
      SplashScreen.preventAutoHideAsync();
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
      SplashScreen.hideAsync();
    }
    updateApp();
  }, []);

  return <Banky />;
}
