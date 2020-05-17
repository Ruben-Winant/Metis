import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HorizontalDayEventCard from "./HorizontalDayEventCard";
import DateCardSquare from "./DateCardSquare";
import DateEventCard from "./DateEventCard";

function HorizontalDayCard(props: any) {
  var events: any = [];

  // props.events.forEach((element: any) => {
  //   events.push(
  //     <HorizontalDayEventCard
  //       urgency={element.urgency}
  //       eventDescription={element.eventDescription}
  //     />
  //   );
  // });

  let eventRow = null;
  if (props.event != null) {
    eventRow = <DateEventCard event={props.event} />;
  } else {
    eventRow = (
      <View style={styles.eventContainerEmpty}>
        <Text
          style={{ marginLeft: 12, color: "lightgray", alignSelf: "flex-end" }}
        >
          Add event
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.daycard}>
      <DateCardSquare date={props.nrOfMonth} dayOfWeek={props.dayOfWeek} />
      {eventRow}
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
