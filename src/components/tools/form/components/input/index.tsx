import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { useFormContext, Controller } from 'react-hook-form';

import { getErrorMessage } from '@/components/tools/form/utils/get-errors.util';
import { InputProps } from './types/input.types';
import { styles } from './styles';

const Input = ({
  name,
  onChangeText,
  type,
  defaultValue,
  ...rest
}: InputProps) => {
  const {
    clearErrors,
    setValue,
    setError,
    formState: { errors },
  } = useFormContext();

  const stringfyedName = React.useMemo(() => name.toString(), [name]);

  const fieldError = React.useMemo(
    () => getErrorMessage(errors, stringfyedName),
    [errors, stringfyedName],
  );

  const handleChangeText = React.useCallback(
    (newText: string, onChange: (...event: any[]) => void) => {
      clearErrors();

      const isNumberType = type === 'number';
      const newValue = isNumberType ? +newText : newText;

      if (isNumberType && Number.isNaN(newValue)) {
        setError(stringfyedName, {
          message: 'Insira um número válido',
        });
      }

      if (onChangeText) onChangeText(newValue);
      onChange(newValue);
    },
    [onChangeText, clearErrors, setValue, stringfyedName],
  );

  return (
    <Controller
      name={stringfyedName}
      defaultValue={defaultValue}
      render={({ field }) => (
        <View style={styles.container}>
          <TextInput
            onChangeText={(newText) => {
              handleChangeText(newText, field.onChange);
            }}
            secureTextEntry={type === 'password'}
            placeholderTextColor={'gray'}
            {...field}
            {...rest}
          />
          {!!fieldError && (
            <View>
              <Text style={styles.error_message}>
                {fieldError.message || ''}
              </Text>
            </View>
          )}
        </View>
      )}
    />
  );
};

export { Input, InputProps };
