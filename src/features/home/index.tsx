import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useHomeHook } from './hooks/home.hooks';
import { ActionSheet } from './components/ActionSheet';

const HomeScreen: React.FC<ScreenProps<'Home', true>> = () => {
  const { user } = useHomeHook();

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeMessage}>Bem vindo de volta,</Text>
        <Text style={styles.username}>{user.name || 'USUARIO'}</Text>
      </View>
      <ActionSheet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  welcomeContainer: {
    paddingTop: 25,
    paddingLeft: 40,

  },
  welcomeMessage: {
    fontSize: 18,
    fontWeight: '200',
    fontStyle: 'italic',
  },
  username: {
    fontSize: 24,
    left: 5,
  },
});

export default React.memo(HomeScreen);
