import React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }: any) {
  var daysInCurrentMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    0
  ).getDate();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

export default HomeScreen;
