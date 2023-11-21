import React from 'react';
import { View, Text, Dimensions, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { ToastProps } from './types/toast.type';
import { getIconName, getIconStyle } from './utils/icon.util';

export const Toast: React.FC<ToastProps> = (props) => {
  const { content, id, onCancel, type = 'error' } = props;
  const { width } = Dimensions.get('window');

  return (
    <View
      id={id}
      style={[
        styles.container,
        getIconStyle(type),
        {
          width: width * 0.8,
          left: width * 0.1,
        },
      ]}>
      <Feather
        name={getIconName(type)}
        style={[styles.icon, getIconStyle(type)]}
        adjustsFontSizeToFit
      />
      <Text style={[styles.text, getIconStyle(type)]}>{content}</Text>
      {onCancel && (
        <Pressable onPress={() => onCancel(props)} style={styles.closeIcon}>
          <Feather
            name="x"
            style={[styles.icon, getIconStyle(type)]}
            adjustsFontSizeToFit
          />
        </Pressable>
      )}
    </View>
  );
};

export { ToastProps };
