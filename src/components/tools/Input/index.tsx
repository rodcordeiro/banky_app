import { ReactNode } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import COLORS from 'tailwindcss/colors';

function Input({ children }: { children: ReactNode }) {
  return (
    <View className="bg-gray-800 w-full px-4 py-2 m-2 rounded">{children}</View>
  );
}
function InputContainer(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      className="w-full"
      placeholderTextColor={COLORS.teal[800]}
    />
  );
}

Input.InputContainer = InputContainer;

export { Input };
