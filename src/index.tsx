import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistedStore, store } from '@/redux/store.redux';
import { Navigator } from '@/navigation';

export default function Banky() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Navigator />
        <StatusBar style="dark" animated />
      </PersistGate>
    </Provider>
  );
}
