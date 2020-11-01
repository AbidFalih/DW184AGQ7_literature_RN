import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const width = Dimensions.get("window").width - 40;
const Landing = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/landing-bg.png")} />

      <Text style={styles.textHeading}>
        <b>
          source <i>of</i> intelligence
        </b>
      </Text>

      <Text style={styles.textParagraf}>
        Sign-up and receive unlimited access to all
        <br />
        of your literature-share your literature
      </Text>

      <Button
        buttonStyle={styles.btnSignUp}
        containerStyle={styles.containerStyle}
        title="Sign up"
        onPress={() => props.navigation.navigate("SignIn")}
      />
      <Button
        buttonStyle={styles.btnSignIn}
        titleStyle={styles.titleStyle}
        containerStyle={styles.containerStyle2}
        title="Sign In"
        onPress={() => props.navigation.navigate("SignIn")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    color: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  img: {
    width: width,
    height: width,
    position: "absolute",
    top: 0,
    marginTop: 20,
    zIndex: 0,
  },

  textHeading: {
    color: "#fff",
    fontSize: 42,
    textAlign: "center",
    lineHeight: "100%",
    marginTop: 10,
    zIndex: 1,
  },

  textParagraf: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    margin: 20,
    zIndex: 1,
  },

  btnSignUp: {
    backgroundColor: "#AF2E1C",
  },
  btnSignIn: {
    backgroundColor: "#F9F9F9",
  },
  containerStyle: {
    width: "100%",
    paddingStart: 20,
    paddingEnd: 20,
  },
  containerStyle2: {
    width: "100%",
    paddingStart: 20,
    paddingEnd: 20,
    marginTop: 20,
    marginBottom: 50,
  },
  titleStyle: {
    color: "#000000",
  },
});

export default Landing;
