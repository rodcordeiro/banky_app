import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Form } from '@/components/tools/form';

import { AccountsTypes } from '@/features/accounts/types/accounts.types';

import { useAccountViewHook } from './hook/account.hook';
import { styles } from './styles';
import { AccountEditFormSchema } from './types/account.types';

const AccountViewScreen: React.FC<ScreenProps<'AccountView', true>> = ({
  route,
  navigation,
}) => {
  const { params } = route;
  const { account, loading, handleDelete } = useAccountViewHook({
    id: params.id,
  });
  const { enablesCash, enablesCredit, enablesDebit } = React.useMemo(() => {
    const enablesCash = account?.type === AccountsTypes.AccountType.CASH;
    const enablesDebit =
      account?.type === AccountsTypes.AccountType.DEBIT ||
      account?.type === AccountsTypes.AccountType.CREDIT_AND_DEBIT;
    const enablesCredit =
      account?.type === AccountsTypes.AccountType.CREDIT ||
      account?.type === AccountsTypes.AccountType.CREDIT_AND_DEBIT;

    return {
      enablesCash,
      enablesCredit,
      enablesDebit,
    };
  }, [account]);

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
          <View style={styles.accountHeader}>
            <View style={styles.accountTitle}>
              <Text style={styles.accountTitleLabel}>Conta:</Text>
              <Text style={styles.accountTitleText}>{account?.name}</Text>
            </View>
            <View style={styles.iconsContainer}>
              <Feather
                name="credit-card"
                size={20}
                color={enablesDebit ? '#8A2BE2' : 'lightgray'}
              />
              <Feather
                name="dollar-sign"
                size={20}
                color={enablesCredit ? '#8A2BE2' : 'lightgray'}
              />
              <Feather
                name="dollar-sign"
                size={20}
                color={enablesCash ? '#8A2BE2' : 'lightgray'}
              />
            </View>
          </View>
          <Form
            handleSubmit={(data) => console.log({ data })}
            zodSchema={AccountEditFormSchema}
            submitButtonText="Editar"
            inputs={[
              {
                name: 'type',
                type: 'select',
                defaultValue: {
                  label: account?.type,
                  value: account?.type,
                } as any,
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
            actions={[
              {
                content: 'Excluir',
                customBackground: '#c00',
                onPress: handleDelete,
              },
            ]}
          />
        </View>
      )}
    </View>
  );
};

export default React.memo(AccountViewScreen);
