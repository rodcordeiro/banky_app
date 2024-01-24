import { BillsTypes } from '@/features/bills/types/bills.types';
import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export const Chart = ({
  expenses,
}: {
  expenses: BillsTypes.DetailedView['expenses'];
}) => {
  return (
    <LineChart
      data={{
        labels: expenses.map((expense) =>
          new Date(expense.createdAt).toLocaleDateString(),
        ),
        datasets: [
          {
            data: expenses.map((expense) => +expense.value),
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
  );
};
