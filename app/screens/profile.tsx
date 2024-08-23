import React from 'react'
import { Button, Text, View } from 'react-native';

function profile({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Profile screen</Text>
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      );
}

export default profile