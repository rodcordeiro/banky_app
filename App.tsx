import 'react-native-gesture-handler';
import React from 'react';
import * as Updates from 'expo-updates';
import * as SplashScreen from 'expo-splash-screen';
import * as Sentry from 'sentry-expo';
import Banky from './src';

SplashScreen.preventAutoHideAsync();

function App() {
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    async function updateApp() {
      try {
        if (process.env.NODE_ENV === 'development') {
          setLoaded(true);
          return;
        }
        const { isAvailable } = await Updates.checkForUpdateAsync();
        if (isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      } catch (err) {
        Sentry.Native.captureException(err);
      } finally {
        setLoaded(true);
        SplashScreen.hideAsync();
      }
    }
    updateApp();
  }, []);

  if (!loaded) return null;

  return <Banky />;
}

export default Sentry.Native.wrap(App);
