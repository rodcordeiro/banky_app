import { TextInputProps } from 'react-native';

export type SelectOption = {
  label: string | number;
  value: string | number;
};
export type SelectProps = {
  name: string | number | symbol;
  options?: SelectOption[];
  defaultValue?: SelectOption;
  labelProp?: string;
  valueProp?: string;
  onChangeText?: (newValue: string | number) => void;
} & TextInputProps;
