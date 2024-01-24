import React from 'react';
import { Pressable, FlatList, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  useNavigation,
  NavigationProp,
  CommonActions,
} from '@react-navigation/native';

type ActionSheetItem = {
  icon: keyof (typeof Feather)['glyphMap'];
  secondIcon?: keyof (typeof Feather)['glyphMap'];
  page: keyof RootStackParamList;
  navigator: keyof RootStackParamList;
};

export const ActionSheet = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const actions = React.useMemo(
    () =>
      [
        {
          icon: 'dollar-sign',
          secondIcon: 'plus',
          page: 'ExpensesCreate',
          navigator: 'Expenses',
        },
        {
          icon: 'dollar-sign',
          secondIcon: 'file-text',
          page: 'ExpensesHome',
          navigator: 'Expenses',
        },
        {
          icon: 'file-text',
          page: 'BillsHome',
          navigator: 'Bills',
        },
      ] as ActionSheetItem[],
    [],
  );
  return (
    <FlatList
      data={actions}
      renderItem={({ item }) => (
        <Pressable
          // @ts-ignore
          onPress={() => navigate(item.navigator, { screen: item.page })}
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            borderColor: '#8A2BE2',
            borderWidth: 3,
            margin: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Feather
            name={item.icon}
            color={'#8A2BE2'}
            size={25}
            style={{ transform: [{ rotate: '15deg' }] }}
          />
          {item.secondIcon && (
            <Feather
              name={item.secondIcon}
              color="white"
              //   size={18}
              style={{
                backgroundColor: '#8A2BE2',
                width: 30,
                height: 30,
                borderRadius: 20,
                borderColor: 'white',
                borderWidth: 4,
                lineHeight: 20,
                verticalAlign: 'middle',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                // padding: 5,
                position: 'absolute',
                right: -5,
                top: -5,
              }}
            />
          )}
        </Pressable>
      )}
      horizontal
      pagingEnabled
      automaticallyAdjustContentInsets
      style={{
        padding: 20,
      }}
    />
  );
};
