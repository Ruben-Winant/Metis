import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function DateListHeader(props: any) {
  return (
    <View style={styles.header}>
      <View style={styles.side}>
        <TouchableWithoutFeedback
          style={{ paddingLeft: 10, paddingRight: 10 }}
          onPress={props.onPressLeft}
        >
          <Icon style={{ fontSize: 40 }} name="angle-left" />
        </TouchableWithoutFeedback>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft: 10 }}>
          {months[props.month]}
        </Text>
      </View>
      <View style={styles.side}>
        <TouchableWithoutFeedback style={{ marginRight: 10 }}>
          <Icon style={{ fontSize: 30 }} name="calendar" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={{ paddingLeft: 10, paddingRight: 10 }}
          onPress={props.onPressRight}
        >
          <Icon style={{ fontSize: 40 }} name="angle-right" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default DateListHeader;

const styles = StyleSheet.create({
  header: {
    width: "88%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  side: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
});
