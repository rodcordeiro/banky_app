import React from 'react';
import { View } from 'react-native';

import { Form } from '@/components/tools/form';
import { AccountsTypes } from '@/features/accounts/types/accounts.types';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { AccountCreateFormSchema } from './types/create.type';
import { useAccountsCreate } from './hooks/create.hook';

const AccountsCreateScreen: React.FC<ScreenProps<'AccountsCreate', true>> = ({
  navigation,
}) => {
  const { handleSubmit, loading } = useAccountsCreate();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          onPress={() => navigation.goBack()}
          size={24}
        />
      </View>
      <Form
        zodSchema={AccountCreateFormSchema}
        isLoading={loading}
        handleSubmit={handleSubmit}
        inputs={[
          {
            name: 'name',
            type: 'text',
            placeholder: 'Descrição da conta',
          },
          {
            name: 'type',
            type: 'select',
            options: [
              {
                label: 'Dinheiro',
                value: AccountsTypes.AccountType.CASH,
              },
              {
                label: 'Debito',
                value: AccountsTypes.AccountType.DEBIT,
              },
              {
                label: 'Crédito',
                value: AccountsTypes.AccountType.CREDIT,
              },
              {
                label: 'Crédito e Débito',
                value: AccountsTypes.AccountType.CREDIT_AND_DEBIT,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default React.memo(AccountsCreateScreen);
