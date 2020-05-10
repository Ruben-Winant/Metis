import React from "react";
import { View, Text, Button } from "react-native";

function DetailsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the Details Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        onPress={() => navigation.navigate("MyModal")}
        title="Open Modal"
      />
    </View>
  );
}

export default DetailsScreen;
