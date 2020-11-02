import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home2 from "../components/Home2";
import Landing from "./Landing";
import Profile from "../components/Profile";
import Logout from "../components/Logout";
import ListLiterature from "../components/ListLiterature";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "md-home";
          } else if (route.name === "My Collections") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "md-person";
          } else if (route.name === "Logout") {
            iconName = focused ? "ios-log-out" : "md-log-out";
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
      <Tab.Screen name="Home" component={Home2} />
      <Tab.Screen name="My Collections" component={ListLiterature} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
};

export default Home;
