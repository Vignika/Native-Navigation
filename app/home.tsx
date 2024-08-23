import { Text, View, Platform, StyleSheet,Button } from "react-native";

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
export default function Home({navigation}) {
    return (
        <View style={styles.container}>
          <Text >Home screen</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details',
                {
                  itemId: 86,
                  otherParam: 'anything you want here',
                }
              )}
          />
        </View>
  );  

}

