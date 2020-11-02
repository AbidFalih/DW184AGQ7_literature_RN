import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Button, Input } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const width = Dimensions.get("window").width - 40;
const Home2 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/home-logo.png")} />

      <View style={styles.row}>
        <Input
          inputStyle={styles.inputStyle}
          containerStyle={styles.inputContainer}
          placeholder="Search a Literature"
        />

        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title={<FontAwesome name="search" size={22} color="black" />}
        />
      </View>
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

  img: {
    width: width,
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
  },

  inputStyle: {
    color: "#fff",
  },
  inputContainer: {
    height: 40,
    flex: 1,
    paddingStart: 10,
    borderWidth: 1,
    borderColor: "grey",
  },

  row: {
    flexDirection: "row",
  },

  btnStyle: {
    backgroundColor: "#AF2E1C",
  },
  btnContainer: {
    paddingEnd: 20,
    paddingStart: 10,
  },
});
export default Home2;
