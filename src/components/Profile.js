import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textCustom}>Profile</Text>
      <br />
      <br />
      <br />
      <br />
      <Text style={styles.textCustom}>My Literature</Text>
      <br />
      <br />
      <br />
      <br />
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
  textCustom: {
    color: "#fff",
    fontSize: "32px",
  },
});

export default Profile;
