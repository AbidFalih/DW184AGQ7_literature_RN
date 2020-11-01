import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home2 from "../components/Home2";
import Landing from "./Landing";
import Profile from "../components/Profile";
import Logout from "../components/Logout";
import ListLiterature from "../components/ListLiterature";

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home2} />
      <Tab.Screen name="ListLiterature" component={ListLiterature} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
};

export default Home;
