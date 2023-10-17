import React from "react";
import { FlatList } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

import { iFormProps } from "./types/form.types";

import { mapInputs } from "./utils/maps.utils";
import { Button } from "../../layout/button";
import { styles } from "./styles";

function Form<T extends FieldValues>({
  handleSubmit,
  inputs,
  zodSchema,
  submitButtonText,
  isLoading,
}: //   customAction1,
//   customAction2,
iFormProps<T>) {
  const methods = useForm<T>({
    resolver: zodSchema ? zodResolver(zodSchema) : undefined,
  });

  const { handleSubmit: handleHookFormSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <FlatList
        data={inputs}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item, index }) => mapInputs(item, index)}
        showsVerticalScrollIndicator
        scrollEnabled
        style={styles.container}
      />
      <Button
        onPress={handleHookFormSubmit(handleSubmit)}
        isLoading={isLoading}
        content={submitButtonText || "Enviar"}
      />
    </FormProvider>
  );
}

export { Form };
