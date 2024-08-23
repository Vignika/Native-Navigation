import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const router = useRouter();

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button
        title="Go to Details"
        onPress={() => router.push('/home')}
      />
    </View>
  );
}