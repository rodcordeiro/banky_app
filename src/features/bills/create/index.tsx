import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Form } from '@/components/tools/form';

import { useCreateBillHook } from './hook/create.hook';
import { BillCreateFormSchema, BillCreateFormType } from './types/create.types';
import { styles } from './styles';

const BillCreateScreen: React.FC<ScreenProps<'BillsCreate', true>> = ({
  navigation,
}) => {
  const { loading, accounts, frequencyOptions, handleSubmit } =
    useCreateBillHook();

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.accountContainer}>
          <View style={styles.header}>
            <Feather
              name="arrow-left"
              onPress={() => navigation.goBack()}
              size={24}
            />
          </View>
          <Form<BillCreateFormType>
            handleSubmit={handleSubmit}
            inputs={[
              {
                name: 'name',
                type: 'text',
                placeholder: 'Bill name',
              },
              {
                name: 'frequency',
                type: 'select',
                options: frequencyOptions,
              },
              {
                name: 'account',
                type: 'select',
                options: accounts || [],
              },
            ]}
            zodSchema={BillCreateFormSchema}
          />
        </View>
      )}
    </View>
  );
};

export default React.memo(BillCreateScreen);
