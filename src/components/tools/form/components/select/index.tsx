import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useFormContext, Controller } from 'react-hook-form';

import { getErrorMessage } from '../../utils/get-errors.util';
import { SelectProps } from './types/input.types';
import { styles } from './styles';

const Select = ({
  name,
  options,
  defaultValue,
  labelProp,
  valueProp,
  ...rest
}: SelectProps<any>) => {
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
  console.log({ options, labelProp, valueProp });
  const handleOptionChange = React.useCallback(
    (newText: any, onChange: (...event: any[]) => void) => {
      clearErrors();

      const newValue = newText;
      console.log({ newValue });

      onChange(newValue);
    },
    [clearErrors, setValue, stringfyedName],
  );

  return (
    <Controller
      name={stringfyedName}
      defaultValue={defaultValue}
      render={({ field }) => (
        <View style={styles.container}>
          <Picker
            key={stringfyedName}
            selectedValue={valueProp ? field.value[valueProp] : field.value}
            onValueChange={(itemValue, itemIndex) =>
              handleOptionChange(itemValue, field.onChange)
            }>
            {options?.map((option, index) => {
              return (
                <Picker.Item
                  key={index}
                  //   label={labelProp ? option[labelProp] : option}
                  label="JavaScript"
                  value="js"
                />
              );
            })}
            <Picker.Item label="JavaScript" value="js" />
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

export { Select, SelectProps };
