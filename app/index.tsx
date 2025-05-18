import React from "react";
import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            padding: 16,
          }}
        >
          <Text>Sisu</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
