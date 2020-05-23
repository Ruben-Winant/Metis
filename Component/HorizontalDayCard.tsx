import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import DateCardSquare from "./DateCardSquare";
import DateEventCard from "./DateEventCard";
import { CalendarEvent } from "../Types/CalendarEvent";

function HorizontalDayCard(props: any) {
  let events: any[] = [];

  if (props.events != null) {
    props.events.forEach((event: CalendarEvent) => {
      events.push(<DateEventCard event={event} />);
    });
  } else {
    events = [
      <View style={styles.eventContainerEmpty}>
        <Text
          style={{ marginLeft: 12, color: "lightgray", alignSelf: "flex-end" }}
        >
          Add event
        </Text>
      </View>,
    ];
  }
  return (
    <View style={styles.daycard}>
      <DateCardSquare date={props.nrOfMonth} dayOfWeek={props.dayOfWeek} />
      {events}
    </View>
  );
}

export default HorizontalDayCard;

const styles = StyleSheet.create({
  daycard: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  eventContainerEmpty: {
    display: "flex",
    width: "80%",
    maxWidth: "86%",
    backgroundColor: "white",
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 6,
  },
});
