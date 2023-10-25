import React from 'react';
import { Feather } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

type Props = {
  check: keyof RootStackParamList;
  destiny: keyof RootStackParamList;
};

export const CreateIcon: React.FC<Props> = ({ check, destiny }) => {
  //   const { navigate } = useNavigation();

  return (
    <Feather
      name="plus-circle"
      onPress={() => console.log({ destiny })}
      size={20}
      style={{
        padding: 5,
        right: 15,
      }}
    />
  );
  //   return <Feather name="plus-circle" onPress={() => navigate<any>(destiny)} />;
};
