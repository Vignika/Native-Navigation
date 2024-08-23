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
     <Stack.Navigator initialRouteName="Welcome Home">
     <Stack.Screen name="Welcome Home" component={Home} />
     <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
      </NavigationContainer>
  
  );
}