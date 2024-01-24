import { View, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
export const CreateButton = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.button}>
      <Feather
        name="plus"
        color={'white'}
        size={30}
        onPress={() => navigate('ExpensesCreate')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: height * 0.05,
    right: width * 0.05,
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: '#8A2BE2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
