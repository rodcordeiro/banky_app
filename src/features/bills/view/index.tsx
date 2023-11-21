import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

import { useBillViewHook } from './hook/bill.hook';
import { styles } from './styles';
import { ExpenseItem } from './components/Expense';
import { Chart } from './components/Chart';

const BillViewScreen: React.FC<ScreenProps<'BillView', true>> = ({
  route,
  navigation,
}) => {
  const { params } = route;
  const { bill, loading } = useBillViewHook({
    id: params.id,
  });

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
              <Text style={styles.accountTitleText}>{bill?.name}</Text>
            </View>
            <View style={styles.frequencyTitle}>
              <Text style={styles.accountTitleLabel}>Frequência:</Text>
              <Text style={styles.accountTitleText}>{bill?.frequency}</Text>
            </View>
          </View>
          <View style={styles.accountHeader}>
            <View style={styles.accountTitle}>
              <Text style={styles.accountTitleLabel}>Valor médio:</Text>
              <Text style={styles.accountTitleText}>
                R$ {bill?.averageValue}
              </Text>
            </View>
          </View>

          <Text>Últimos pagamentos:</Text>
          <FlatList
            data={bill?.expenses || []}
            renderItem={({ item }) => (
              <ExpenseItem
                {...item}
                onPress={(expense) => console.log({ expense })}
              />
            )}
            style={styles.list}
          />
          {bill?.expenses && <Chart expenses={bill.expenses} />}
        </View>
      )}
    </View>
  );
};

export default React.memo(BillViewScreen);
