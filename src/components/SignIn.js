import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";

const SignIn = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSignIn}>
        <b>Sign In</b>
      </Text>

      <Input
        style={styles.inputText}
        containerStyle={styles.inputContainer}
        placeholder="Email"
      />

      <Input
        style={styles.inputText}
        containerStyle={styles.inputContainer}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Button
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        title="Sign In "
        onPress={() => props.navigation.navigate("BottomNav")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

  textSignIn: {
    color: "#fff",
    fontSize: 36,
    textAlign: "center",
    paddingBottom: 20,
  },

  inputText: {
    height: 40,
    color: "#fff",
    paddingStart: 10,
  },
  inputContainer: {
    paddingStart: 20,
    paddingEnd: 20,
  },

  btnStyle: {
    backgroundColor: "#AF2E1C",
  },
  btnContainer: {
    width: "100%",
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 20,
  },
});

export default SignIn;
