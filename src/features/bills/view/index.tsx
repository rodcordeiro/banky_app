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

const BillViewScreen: React.FC<ScreenProps<'BillView'>> = ({
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
          {bill?.expenses && (
            <LineChart
              data={{
                labels: bill.expenses.map((expense) =>
                  new Date(expense.createdAt).toLocaleDateString(),
                ),
                datasets: [
                  {
                    data: bill.expenses.map((expense) => +expense.value),
                  },
                ],
              }}
              width={Dimensions.get('window').width * 0.75} // from react-native
              height={200}
              yAxisLabel="R$"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#f0f0f0',
                backgroundGradientFrom: '#8A2BE2',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                  padding: 10,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#a552f3',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default React.memo(BillViewScreen);
