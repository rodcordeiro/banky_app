import { StatusBar } from 'expo-status-bar';
import { Navigator } from './navigation';
import { ToastHook } from './hooks/toast';

export default function Banky() {
  return (
    <ToastHook>
      <Navigator />
      <StatusBar style="dark" animated />
    </ToastHook>
  );
}
