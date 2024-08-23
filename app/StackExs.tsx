import { Link, useRouter } from "expo-router";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import Details from "./screens/details";
import CreatePostScreen from "./screens/createPost";
import profile from "./screens/profile";
import Logotitle from "./screens/logotitle";

const router = useRouter();

const Stack = createNativeStackNavigator();

export default function StackExs() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Dashboard",
            headerStyle: {
              backgroundColor: "#6a51ae",
            },
            headerTintColor: "#abcdef",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerLeft: () => (
              <Pressable
                onPress={() => {
                  alert("menu pressed");
                }}
              >
                <Text>Menu</Text>
              </Pressable>
            ),
          }}
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

        <Stack.Screen
          name="Profile"
          component={profile}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}