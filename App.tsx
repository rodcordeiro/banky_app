import 'react-native-gesture-handler';
import React from 'react';
import * as Updates from 'expo-updates';
import * as SplashScreen from 'expo-splash-screen';
import * as Sentry from 'sentry-expo';
import Banky from './src';
import { promiseWithTimeout } from '@/utils/promise.util';

function App() {
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
    }
    promiseWithTimeout(updateApp(), 15000).finally(() =>
      SplashScreen.hideAsync(),
    );
  }, []);

  return <Banky />;
}

export default Sentry.Native.wrap(App);
