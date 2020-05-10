import React from "react";
import { View, Text } from "react-native";

function HorizontalDayEventCard(props: any) {
  var eventCardColor = null;
  switch (props.urgency) {
    case "Small":
      eventCardColor = "lightgreen";
      break;
    case "Medium":
      eventCardColor = "lightorange";
      break;
    case "Big":
      eventCardColor = "lightred";
      break;
    default:
      eventCardColor = "lightgreen";
      break;
  }

  return (
    <View style={{ backgroundColor: eventCardColor, borderRadius: 25 }}>
      <Text style={{ color: "white" }}>{props.eventDescription}</Text>
    </View>
  );
}

export default HorizontalDayEventCard;
