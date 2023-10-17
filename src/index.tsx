import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Navigator } from "./navigation";
export default function Banky() {
  return (
    <>
      <Navigator />
      <StatusBar style="dark" animated />
    </>
  );
}
