import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');
export type ToastProps = {
  visible: boolean;
  content: string;
  type: 'success' | 'error' | 'warning';
};
enum ToastIcon {
  success = 'check-circle',
  error = 'meh',
  warning = 'alert-triangle',
}
enum ToastColor {
  success = '#3b3',
  error = '#a12',
  warning = '#d60',
}
export const Toast: React.FC<ToastProps> = ({
  visible = false,
  content,
  type,
}) => {
  return (
    <View style={[styles.toast, { backgroundColor: ToastColor[type] }]}>
      <Feather
        name={ToastIcon[type]}
        style={styles.icon}
        adjustsFontSizeToFit
      />
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    zIndex: 9999,
    borderRadius: 5,
    backgroundColor: 'green',
    width: width * 0.9,
    minHeight: 50,
    bottom: 20,
    left: width * 0.05,
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
