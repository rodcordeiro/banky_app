import { FieldValues } from 'react-hook-form';

import { InputProps } from '../components/input';
import { Input } from '../components/input';
import { Input as InputType } from '../types/form.types';
import { Select } from '../components/select';

export function mapInputs<T extends FieldValues>(
  input: InputType<T>,
  index: number,
) {
  switch (input.type) {
    case 'number':
    case 'text':
    case 'email':
    case 'password':
      return <Input {...input} key={index} />;
    case 'select':
      return <Select {...input} key={index} />;
    default:
      return null;
  }
}
