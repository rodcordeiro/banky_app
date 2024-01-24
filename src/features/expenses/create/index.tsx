import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { Form } from '@/components/tools/form';

import { useCreateExpenseHook } from './hook/create.hook';
import {
  ExpenseCreateFormType,
  ExpenseCreateFormSchema,
} from './types/create.type';

const ExpensesCreateScreen: React.FC<
  ScreenProps<'ExpensesCreate', true>
> = ({}) => {
  const { loading, accounts, type_options, bills, handleSubmit } =
    useCreateExpenseHook();
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <View style={styles.card}>
          <Form<ExpenseCreateFormType>
            handleSubmit={handleSubmit}
            zodSchema={ExpenseCreateFormSchema}
            inputs={[
              {
                name: 'name',
                type: 'text',
                placeholder: 'Descreva a despesa',
              },
              {
                name: 'value',
                type: 'number',
                placeholder: 'Qual o valor do gasto? Insira com ponto',
                keyboardType: 'number-pad',
              },
              {
                name: 'account',
                type: 'select',
                placeholder: 'Selecione a conta de origem',
                options: accounts,
              },
              {
                name: 'type',
                type: 'select',
                placeholder: 'Selecione tipo do gasto',
                options: type_options,
              },
              {
                name: 'bill',
                type: 'select',
                placeholder: 'Vincular uma despesa fixa',
                options: bills,
              },
            ]}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    width: '90%',
    height: '90%',
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 10,
  },
  accountsContainer: {
    width: '80%',
    marginTop: 20,
  },
  accounts: {
    gap: 10,
  },
  line: {
    height: 2,
    width: '100%',
    marginLeft: 10,
    backgroundColor: '#18181818',
  },
});

export default React.memo(ExpensesCreateScreen);
