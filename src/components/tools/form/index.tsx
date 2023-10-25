import React from 'react';
import { FlatList, View } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { Button } from '@/components/layout/button';

import { mapInputs } from './utils/maps.utils';
import { iFormProps } from './types/form.types';
import { styles } from './styles';

function Form<T extends FieldValues>({
  handleSubmit,
  inputs,
  zodSchema,
  submitButtonText,
  isLoading,
  actions,
  style,
}: iFormProps<T>) {
  const methods = useForm<T>({
    resolver: zodSchema ? zodResolver(zodSchema) : undefined,
  });

  const { handleSubmit: handleHookFormSubmit } = methods;

  return (
    <View style={[styles.container, style]}>
      <FormProvider {...methods}>
        {inputs.map((input, index) => mapInputs(input, index))}

        <Button
          onPress={handleHookFormSubmit(handleSubmit)}
          isLoading={isLoading}
          content={submitButtonText || 'Enviar'}
        />
        {!!actions && actions.map((action) => <Button {...action} />)}
      </FormProvider>
    </View>
  );
}

export { Form };
