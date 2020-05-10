import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HorizontalDayEventCard from "./HorizontalDayEventCard";
import DateCardSquare from "./DateCardSquare";

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

  return (
    <View style={styles.daycard}>
      <DateCardSquare date={props.nrOfMonth} dayOfWeek={props.dayOfWeek} />
      {/* add events of given day */}
    </View>
  );
}

export default HorizontalDayCard;

const styles = StyleSheet.create({
  daycard: {
    display: "flex",
    alignContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
  },
});
