import { Pressable, ActivityIndicator, Text } from 'react-native';
import { ButtonProps } from './types/button.types';
import { styles } from './styles';
import React from 'react';

const Button: React.FC<ButtonProps> = ({
  content,
  icon,
  onPress,
  isLoading = false,
  disabled = false,
  customBackground,
  ...rest
}) => {
  const { Icon, hasIcon } = React.useMemo(
    () => ({
      hasIcon: !!icon,
      Icon: () => icon,
    }),
    [icon],
  );
  return (
    <Pressable
      onPress={onPress}
      {...rest}
      style={[
        styles.container,
        {
          backgroundColor: disabled
            ? '#9d7eba'
            : customBackground || styles.container.backgroundColor,
        },
      ]}>
      {!!icon && (
        <>
          {isLoading ? (
            <ActivityIndicator color={styles.loader.color} />
          ) : (
            <Icon />
          )}
        </>
      )}
      {isLoading && !hasIcon && (
        <ActivityIndicator color={styles.loader.color} size={'small'} />
      )}
      {!!content && (!isLoading || (!isLoading && hasIcon)) && (
        <Text style={styles.text}>{content}</Text>
      )}
    </Pressable>
  );
};
export { ButtonProps, Button };
