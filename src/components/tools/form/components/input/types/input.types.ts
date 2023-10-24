import { TextInputProps } from 'react-native';

export type InputProps = {
  name: string | number | symbol;
  type?: 'text' | 'number' | 'password' | 'email';
  defaultValue?: string | number;
  onChangeText?: (newValue: string | number) => void;
} & TextInputProps;
