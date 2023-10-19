
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    toast: {
      position: 'absolute',
      zIndex: 9999,
      borderRadius: 5,
      backgroundColor: 'green',
      minHeight: 50,
    //   bottom: 20,
      paddingVertical: 15,
      paddingHorizontal: 20,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10,
    },
    text: {
      color: 'white',
      fontSize: 16,
      lineHeight: 18,
    },
    icon: {
      color: 'white',
      fontSize: 18,
      lineHeight: 18,
      padding: 5,
    },
  });
  