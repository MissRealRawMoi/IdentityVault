import React from "react";
import { View, Text, Button } from "react-native";

export default function FingerprintScreen({ navigation }) {
  return (
    <View>
      <Text>Scan your fingerprint</Text>
      <Button title="Continue" onPress={() => navigation.navigate("Identity")} />
    </View>
  );
}
