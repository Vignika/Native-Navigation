import { NavigationContainer } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./home";
import Details from "./screens/details";


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
           </Stack.Navigator>
           </NavigationContainer>

  
  );
}