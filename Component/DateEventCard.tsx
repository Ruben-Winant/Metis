import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { CalendarEvent, priorityTypes } from "../Types/CalendarEvent";

interface IDateEventCardProps {
  event: CalendarEvent;
}

function DateEventCard(props: IDateEventCardProps) {
  let attachmentButton = null;
  if (props.event.attachment != null) {
    attachmentButton = (
      <TouchableWithoutFeedback>
        <Icon
          style={{
            fontSize: 18,
            marginLeft: 6,
            marginRight: 6,
          }}
          name="paperclip"
        />
      </TouchableWithoutFeedback>
    );
  }

  let bellButton = null;
  if (props.event.notify) {
    bellButton = (
      <TouchableWithoutFeedback>
        <Icon
          style={{
            fontSize: 18,
            marginLeft: 10,
            marginRight: 10,
          }}
          name="bell"
        />
      </TouchableWithoutFeedback>
    );
  } else {
    bellButton = (
      <TouchableWithoutFeedback>
        <Icon
          style={{
            fontSize: 18,
            marginLeft: 10,
            marginRight: 10,
          }}
          name="bell-slash"
        />
      </TouchableWithoutFeedback>
    );
  }

  return (
    <View style={styles.eventContainerFull}>
      <Text style={styles.titleRow}>
        <Icon
          style={{
            fontSize: 18,
            color: props.event.priority,
          }}
          name="circle"
        />
        {props.event.title}
      </Text>
      <Text style={styles.descriptionRow}>{props.event.description}</Text>
      <View style={styles.buttonRow}>
        {attachmentButton}
        {bellButton}
        <TouchableWithoutFeedback>
          <Icon
            style={{
              fontSize: 18,
              marginLeft: 10,
              marginRight: 6,
            }}
            name="edit"
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default DateEventCard;

const styles = StyleSheet.create({
  eventContainerFull: {
    display: "flex",
    maxWidth: "80%",
    backgroundColor: "white",
    paddingLeft: 6,
    paddingRight: 4,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  titleRow: {
    display: "flex",
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "800",
  },
  descriptionRow: {
    marginLeft: 20,
    width: "88%",
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "center",
  },
});
