import { Link, useRouter } from "expo-router";
import { Button, Text, View, StyleSheet, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./home";
import Details from "./screens/details";
import CreatePostScreen from "./screens/createPost";

const router = useRouter();

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{ itemId: 42 }}
        />
         <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{ title: "write mail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}