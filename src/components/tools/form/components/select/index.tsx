import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useFormContext, Controller } from 'react-hook-form';

import { getErrorMessage } from '@/components/tools/form/utils/get-errors.util';
import { SelectProps, SelectOption } from './types/input.types';
import { styles } from './styles';

const Select = ({
  name,
  options,
  defaultValue,
  onChangeOption,
  ...rest
}: SelectProps) => {
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

  const handleOptionChange = React.useCallback(
    (value: any, onChange: (...event: any[]) => void) => {
      clearErrors();

      const newValue = options?.find((option) => option.value === value);

      if (onChangeOption) onChangeOption(newValue!);
      onChange(newValue);
    },
    [clearErrors, setValue, stringfyedName, options],
  );

  return (
    <Controller
      name={stringfyedName}
      defaultValue={defaultValue}
      render={({ field }) => (
        <View style={styles.container}>
          <Picker
            key={stringfyedName}
            selectedValue={field.value?.value}
            onValueChange={(itemValue, _) =>
              handleOptionChange(itemValue, field.onChange)
            }>
            {options?.map((option, index) => {
              return (
                <Picker.Item
                  key={index}
                  label={option.label.toString()}
                  value={option.value}
                />
              );
            })}
          </Picker>
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

export { Select, SelectProps, SelectOption };
