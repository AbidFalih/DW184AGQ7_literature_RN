import React from "react";
import { StyleSheet, View, Dimensions, Image, FlatList } from "react-native";
import { Button, Input } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { DATA } from "../assets/Data";
import LiteratureCard from "./LiteratureCard";

const width = Dimensions.get("window").width - 40;
const Home = () => {
  const renderItem = ({ item }) => (
    <LiteratureCard
      key={item.id}
      image={item.thumb}
      title={item.title}
      style={{
        backgroundColor: "#161616",
        width: Dimensions.get("window").width / 2 - 20,
      }}
      color="#fff"
      author={item.author}
      year={item.publication_date.split("-")[0]}
    />
  );

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

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
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

  img: {
    width: width,
    height: 50,
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: 10,
  },

  row: {
    flexDirection: "row",
    width: "100%",
  },

  inputStyle: {
    color: "#fff",
  },
  inputContainer: {
    height: 40,
    marginStart: 20,
    padding: 0,
    flex: 1,
    borderWidth: 1,
    borderColor: "grey",
  },

  btnStyle: {
    backgroundColor: "#AF2E1C",
  },
  btnContainer: {
    paddingEnd: 20,
    paddingStart: 10,
    marginBottom: 10,
  },
});
export default Home;
