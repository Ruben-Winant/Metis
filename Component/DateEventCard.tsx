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
            marginLeft: 6,
            marginRight: 6,
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
            marginLeft: 6,
            marginRight: 6,
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
            marginLeft: 10,
            marginRight: 10,
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
              marginLeft: 6,
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
    width: "70%",
    backgroundColor: "white",
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  titleRow: {
    fontSize: 18,
    fontWeight: "600",
  },
  descriptionRow: {
    marginLeft: 34,
    maxWidth: "90%",
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "center",
  },
});
