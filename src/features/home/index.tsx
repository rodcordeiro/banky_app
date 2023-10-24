import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeMessage}>Bem vindo de volta,</Text>
        <Text style={styles.username}>USUARIO</Text>
      </View>
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
    top: 25,
    left: 40,
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
