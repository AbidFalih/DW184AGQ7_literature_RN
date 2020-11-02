import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { DATA } from "../assets/Data";
import LiteratureCard from "./LiteratureCard";

const ListLiterature = () => {
  // const renderItem = ({ item, index }) => {
  //   return (
  //     <ListItem key={index} bottomDivider>
  //       <Avatar source={{ uri: item.avatar_url }} />
  //       <ListItem.Content>
  //         <ListItem.Title>{item.name}</ListItem.Title>
  //         <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
  //       </ListItem.Content>
  //     </ListItem>
  //   );
  // };

  const renderItem = ({ item }) => {
    return (
      <LiteratureCard
        key={item.id}
        image={item.thumb}
        title={item.title}
        style={{
          backgroundColor: "#161616",
          width: Dimensions.get("window").width / 2 - 20,
        }}
        color="#ffffff"
        author={item.author}
        year={item.publication_date.split("-")[0]}
        // onPress={() => props.navigation.navigate("Detail", {id: item.id})}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
      /> */}

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
});

export default ListLiterature;
