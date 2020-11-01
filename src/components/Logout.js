import React from "react";
import { Button, View, StyleSheet } from "react-native";

const Logout = (props) => {
  return (
    <View style={styles.container}>
      <Button
        title="Logout"
        onPress={() => props.navigation.navigate("Landing")}
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
});

export default Logout;
