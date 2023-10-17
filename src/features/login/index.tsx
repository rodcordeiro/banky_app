import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

import { Form } from "../../components/tools/form";

import { loginFormSchema } from "./types/login.types";

const LoginScreen: React.FC<ScreenProps<"Login">> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Form
        zodSchema={loginFormSchema}
        inputs={[
          {
            name: "username",
            type: "text",
            placeholder: "Username",
          },
          {
            name: "password",
            type: "password",
            placeholder: "Password",
          },
        ]}
        handleSubmit={(data) => console.log(data)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default React.memo(LoginScreen);
