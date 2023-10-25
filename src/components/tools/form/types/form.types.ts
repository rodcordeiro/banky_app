import { z } from 'zod';
import { FieldValues } from 'react-hook-form';

import { ButtonProps } from '@/components/layout/button';

import { InputProps } from '../components/input';
import { SelectOption, SelectProps } from '../components/select';
import { StyleProp, ViewStyle } from 'react-native';

export type Input<T> =
  | ({
      name: keyof T;
      type: InputProps['type'];
    } & Omit<InputProps, 'name' | 'type'>)
  | ({
      name: keyof T;
      type: 'select';
      options: SelectOption[];
    } & Omit<SelectProps, 'name' | 'type'>);

export interface iFormProps<T extends FieldValues> {
  inputs: Input<T>[];
  handleSubmit: (data: T) => void | Promise<void>;
  zodSchema?: z.Schema<T>;
  submitButtonText?: string;
  actions?: ButtonProps[];
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
}
