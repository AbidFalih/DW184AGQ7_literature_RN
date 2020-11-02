import React from "react";
import { View, Dimensions, Text } from "react-native";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;
const LiteratureCard = (props) => {
  return (
    <TouchableOpacity
      // onPress={props.onPress}
      activeOpacity={1}
    >
      <Card
        containerStyle={{
          ...props.style,
          padding: 0,
          borderWidth: 0,
          marginVertical: 10,
          marginHorizontal: 10,
          marginBottom: 20,
        }}
      >
        <Card.Image
          source={{ uri: props.image }}
          style={{
            height: width / 2,
            width: "100%",
            borderRadius: 15,
          }}
        />
        <Text
          style={{
            marginBottom: 10,
            color: props.color,
            fontSize: 20,
            fontFamily: "Times-Bold",
            marginTop: 5,
          }}
        >
          {props.title}
        </Text>

        <View
          style={{
            color: "#929292",
            marginTop: -10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#929292",
              fontSize: 18,
              fontFamily: "Metropolis-Regular",
            }}
          >
            {props.author}
          </Text>

          <Text
            style={{
              color: "#929292",
              fontSize: 18,
              fontFamily: "Metropolis-Regular",
            }}
          >
            {props.year}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default LiteratureCard;
