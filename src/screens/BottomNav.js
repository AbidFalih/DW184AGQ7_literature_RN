import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Profile from "../components/Profile";
import AddLiterature from "../components/AddLiterature";
import ListLiterature from "../components/ListLiterature";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "md-home";
          } else if (route.name === "My Collections") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Add") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "md-person";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: "#AF2E1C",
        inactiveBackgroundColor: "#000000",
        activeTintColor: "#ffffff",
        inactiveTintColor: "#ffffff",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="My Collections" component={ListLiterature} />
      <Tab.Screen name="Add" component={AddLiterature} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNav;
