import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { DATA } from "../assets/Data";

const ListLiterature = () => {
  const renderItem = ({ item, index }) => {
    return (
      <ListItem key={index} bottomDivider>
        <Avatar source={{ uri: item.avatar_url }} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
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
});

export default ListLiterature;
