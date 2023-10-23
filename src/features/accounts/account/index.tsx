import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Button } from '../../../components/layout/button';
import { Form } from '../../../components/tools/form';

import { useAccountViewHook } from './hook/account.hook';
import { styles } from './styles';
import { AccountsTypes } from '../types/accounts.types';
import { AccountEditFormSchema } from './types/account.types';

const AccountViewScreen: React.FC<ScreenProps<'AccountView'>> = ({
  route,
  navigation,
}) => {
  const { params } = route;
  const { account, loading } = useAccountViewHook({ id: params.id });
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
              <Text style={styles.accountTitleLabel}>Account:</Text>
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
          {/* <Form
            handleSubmit={(data) => console.log({ data })}
            zodSchema={AccountEditFormSchema}
            submitButtonText="Editar"
            inputs={[
              {
                name: 'type',
                type: 'select',
                // labelProp: 'label',
                // valueProp: 'value',
                options: [
                  {
                    label: 'Cash',
                    value: AccountsTypes.AccountType.CASH,
                  },
                  {
                    label: 'Debit',
                    value: AccountsTypes.AccountType.DEBIT,
                  },
                ],
              },
            ]}
          /> */}
        </View>
      )}
    </View>
  );
};

export default React.memo(AccountViewScreen);
