import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

const Home2 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/home-logo.png")} />
      <br />
      <View style={styles.row}>
        <TextInput
          style={styles.customInput}
          placeholder="Search a Literature"
        />
        <br />
        <Button title="Search" />
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

  customInput: {
    height: 40,
    paddingStart: "20px",
    marginRight: "10px",
    borderColor: "gray",
    borderWidth: 1,
    color: "#fff",
  },
  textLiterature: {
    color: "#fff",
  },
  img: {
    width: "300px",
    height: "50px",
  },
  row: {
    flexDirection: "row",
  },
});
export default Home2;
