import { Pressable, View, Text } from "react-native";
import { ButtonProps } from "./types/button.types";

export const Button: React.FC<ButtonProps> = ({
  content,
  icon,
  onPress,
  isLoading = false,
  ...rest
}) => {
  const Icon = () => icon;
  return (
    <Pressable onPress={onPress} {...rest}>
      {!!Icon && <Icon />}
      {!!content && <Text>{content}</Text>}
    </Pressable>
  );
};
