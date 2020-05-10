import "react-native-gesture-handler";
import React, { Props, ClassAttributes } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/HomeScreen";
import PlannerHomeScreen from "./Screens/PlannerHomeScreen";

//Modal menu
function ModalScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.navigate("Home")} title="Home" />
      <Button onPress={() => navigation.navigate("Details")} title="Details" />
      <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  );
}

//All non menu screens
function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={PlannerHomeScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="MyModal"
          component={ModalScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
