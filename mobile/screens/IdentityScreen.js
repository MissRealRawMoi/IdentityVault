import React from "react";
import { View, TextInput, Button } from "react-native";

export default function IdentityScreen({ navigation }) {
  return (
    <View>
      <TextInput placeholder="Enter your legal name" />
      <Button title="Verify" onPress={() => navigation.navigate("Recovery")} />
    </View>
  );
}
