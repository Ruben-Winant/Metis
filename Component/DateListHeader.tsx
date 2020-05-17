import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Dropdown } from "react-native-material-dropdown";

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
  let data = [
    { value: "January" },
    { value: "February" },
    { value: "March" },
    { value: "April" },
    { value: "May" },
    { value: "June" },
    { value: "July" },
    { value: "August" },
    { value: "September" },
    { value: "October" },
    { value: "November" },
    { value: "December" },
  ];

  const [selectedMonth, setMonth] = useState(props.month);
  return (
    <View style={styles.header}>
      <View style={styles.side}>
        <Dropdown
          animationDuration={0}
          containerStyle={{ width: "54%" }}
          itemCount={12}
          dropdownMargins={{ min: 0, max: 12 }}
          dropdownPosition={0}
          dropdownOffset={{ left: 0, top: 14 }}
          useNativeDriver={true}
          data={data}
          value={months[selectedMonth]}
        />
      </View>
      <View style={styles.side}>
        <TouchableWithoutFeedback>
          <Icon style={{ fontSize: 30 }} name="calendar" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default DateListHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginTop: 80,
    marginBottom: 10,
  },
  side: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
});
