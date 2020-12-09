import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./src/screens/Landing";
import SignIn from "./src/components/SignIn";
import BottomNav from "./src/screens/BottomNav";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Sign In" }}
        />
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{ title: "BottomNav" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
