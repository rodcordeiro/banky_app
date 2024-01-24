import React from 'react';
import { Text, StyleSheet, Pressable, View, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { ExpensesTypes } from '@/features/expenses/types/expenses.types';

type Props = ExpensesTypes.Expense;
const SwipeIcon = ({
  dragAnimatedValue,
  isEdit,
  progressAnimatedValue,
}: {
  progressAnimatedValue: Animated.AnimatedInterpolation<string | number>;
  dragAnimatedValue: Animated.AnimatedInterpolation<string | number>;
  isEdit: boolean;
}) => {
  // const scale = dragAnimatedValue.interpolate({
  //   inputRange: isEdit ? [20, 100] : [-100, 0],
  //   outputRange: [0, 1],
  //   extrapolate: 'clamp',
  // });
  return (
    <Pressable
      onPress={() => console.log(isEdit ? 'Editar' : 'Excluir')}
      style={{
        width: 50,
        backgroundColor: isEdit ? '#8A2BE2' : 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: isEdit ? 5 : 0,
        borderBottomLeftRadius: isEdit ? 5 : 0,
        borderTopRightRadius: isEdit ? 0 : 5,
        borderBottomRightRadius: isEdit ? 0 : 5,
      }}>
      <Feather name={isEdit ? 'edit' : 'trash'} size={24} color={'white'} />
    </Pressable>
  );
};

const Expense = ({ name, value, createdAt }: Props) => {
  const formatedDate = new Date(createdAt);
  return (
    <Swipeable
      dragOffsetFromRightEdge={50}
      dragOffsetFromLeftEdge={100}
      renderLeftActions={(progress, dragX) => (
        <SwipeIcon
          progressAnimatedValue={progress}
          dragAnimatedValue={dragX}
          isEdit
        />
      )}
      renderRightActions={(progress, dragX) => (
        <SwipeIcon
          progressAnimatedValue={progress}
          dragAnimatedValue={dragX}
          isEdit={false}
        />
      )}>
      <Pressable style={styles.card} onPress={() => console.log({ name })}>
        <Text style={styles.title}>{name.slice(0, 20)}</Text>
        <Text style={styles.value}>R$ {value}</Text>
        <Text style={styles.date}>
          {formatedDate.getDay()}/{formatedDate.getMonth()}
        </Text>
      </Pressable>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    flex: 5,
    // fontWeight: 'bold',
  },
  value: {
    flex: 3,
  },
  date: {
    fontSize: 14,
    flex: 1,
  },
});

export default Expense;
