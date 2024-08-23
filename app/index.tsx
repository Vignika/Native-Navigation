import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "./mytabs/homescreen";
import SettingsScreen from "./mytabs/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}