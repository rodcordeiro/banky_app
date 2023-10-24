import { TextInputProps } from 'react-native';

export type SelectOption = {
  label: string | number;
  value: string | number;
};
export type SelectProps = {
  name: string | number | symbol;
  options?: SelectOption[];
  defaultValue?: SelectOption;
  onChangeOption?: (newValue: SelectOption) => void;
} & TextInputProps;
