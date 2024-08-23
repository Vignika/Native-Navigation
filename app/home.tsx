import { Text, View, Platform, StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//     bigBlue: {
//       color: Platform.OS === "ios" ? "blue" : "red",
//       fontWeight: "bold",
//       fontSize: 30,
//     },
//   });
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      ...Platform.select({
        ios: {
          backgroundColor: 'red',
        },
        android: {
          backgroundColor: 'green',
        },
        default: {
          // other platforms, web for example
          backgroundColor: 'white',
        },
    }),
},
});
export default function Home() {
  return (
    <View style={styles.container}>
      <Text >Home screen</Text>
    </View>
  );
}

