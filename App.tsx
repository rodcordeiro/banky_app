import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import * as Updates from 'expo-updates';
import AppLoading from 'expo-app-loading';
import Banky from './src';

export default function App() {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  async function updateApp() {
    if (process.env.NODE_ENV === 'development') {
      return;
    }
    const { isAvailable } = await Updates.checkForUpdateAsync();
    if (isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  }

  if (!loaded) {
    return (
      <AppLoading
        startAsync={updateApp}
        onFinish={() => setLoaded(true)}
        onError={(err: any) => console.log(err)}
      />
    );
  }
  return <Banky />;
}
