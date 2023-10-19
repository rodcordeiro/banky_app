import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Navigator } from './navigation';

export default function Banky() {
  return (
    <React.Fragment>
      <Navigator />
      <StatusBar style="dark" animated />
    </React.Fragment>
  );
}
