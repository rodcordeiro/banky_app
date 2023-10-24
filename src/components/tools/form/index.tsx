import React from 'react';
import { FlatList, View } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { iFormProps } from './types/form.types';

import { mapInputs } from './utils/maps.utils';
import { Button } from '../../layout/button';
import { styles } from './styles';

function Form<T extends FieldValues>({
  handleSubmit,
  inputs,
  zodSchema,
  submitButtonText,
  isLoading,
  actions,
}: iFormProps<T>) {
  const methods = useForm<T>({
    resolver: zodSchema ? zodResolver(zodSchema) : undefined,
  });

  const { handleSubmit: handleHookFormSubmit } = methods;

  return (
    <View style={[styles.container]}>
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
