import React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import { Button, Image } from "react-native-elements";
import { DATA } from "../assets/Data";
import LiteratureCard from "./LiteratureCard";

const Profile = (props) => {
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
      <Text style={styles.title}>
        <b>Profile</b>
      </Text>
      <View style={styles.profContainer}>
        <Image
          source={{
            uri:
              "https://img.srgcdn.com/e//Y2RCRXlCQmFQeFVWTDFUYWZPQTUuanBn.jpg",
          }}
          style={styles.profImg}
        />
        <View style={styles.txtProfContainer}>
          <Text style={styles.txtProfile}>Email</Text>
          <Text style={styles.txtProfile}>Gender</Text>
          <Text style={styles.txtProfile}>Mobile Phone</Text>
          <Text style={styles.txtProfile}>Address</Text>
          <Button
            buttonStyle={styles.profBtnStyle}
            titleStyle={styles.profBtnTitle}
            containerStyle={styles.profBtnContainer}
            title="Logout"
            onPress={() => props.navigation.navigate("Landing")}
          />
        </View>
      </View>
      <Text style={styles.txtLiterature}>
        <b>My Literature</b>
      </Text>
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
  title: {
    color: "#fff",
    fontSize: 36,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },

  profContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingStart: 20,
    paddingEnd: 20,
    paddingBottom: 10,
  },
  profImg: { width: 125, height: 125 },

  txtProfContainer: {
    flex: 1,
    marginStart: 20,
  },
  txtProfile: {
    fontSize: 14,
    color: "#fff",
  },

  profBtnStyle: {
    backgroundColor: "#fff",
    padding: 5,
  },
  profBtnContainer: {
    marginTop: 10,
    marginEnd: 20,
    padding: 0,
    width: "100%",
  },
  profBtnTitle: {
    color: "#000",
    fontSize: 14,
    padding: 0,
    margin: 0,
  },

  txtLiterature: {
    color: "#fff",
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "left",
    width: "100%",
    paddingStart: 20,
    paddingEnd: 20,
  },
});

export default Profile;
