import { TextInputProps } from 'react-native';

export type SelectProps<T> = {
  name: string | number | symbol;
  options?: T[];
  defaultValue?: T;
  labelProp?: string;
  valueProp?: string;
  onChangeText?: (newValue: string | number) => void;
} & TextInputProps;
