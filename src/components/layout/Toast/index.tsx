import React from 'react';
import { Animated, Text, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ToastColor, ToastIcon, ToastProps } from './types';
import { styles } from './styles';

const { width, height } = Dimensions.get('window');

const Toast: React.FC<ToastProps> = ({ visible = false, content, type }) => {
  const toastPosition = height * 2;
  const popAnim = React.useRef(new Animated.Value(toastPosition)).current;
  const hideToast = () =>
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: toastPosition,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 5000);
  React.useEffect(() => {
    if (visible) {
      Animated.timing(popAnim, {
        toValue: height * 0.45,
        duration: 300,
        useNativeDriver: true,
      }).start(hideToast);
    }
  }, [visible]);

  return (
    visible && (
      <Animated.View
        style={[
          styles.toast,
          {
            backgroundColor: ToastColor[type],
            left: width * 0.05,
            width: width * 0.9,
            transform: [
              {
                translateY: popAnim,
              },
            ],
          },
        ]}>
        <Feather
          name={ToastIcon[type]}
          style={styles.icon}
          adjustsFontSizeToFit
        />
        <Text style={styles.text}>{content}</Text>
      </Animated.View>
    )
  );
};

export { Toast, ToastProps };
