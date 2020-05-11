import React from "react";
import { View, Text, StyleSheet } from "react-native";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function DateCardSquare(props: any) {
  return (
    <View style={styles.dateCard}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: -6 }}>
        {props.date}
      </Text>
      <Text>{days[props.dayOfWeek]}</Text>
    </View>
  );
}

export default DateCardSquare;

const styles = StyleSheet.create({
  dateCard: {
    width: 60,
    display: "flex",
    flexDirection: "column",
    alignContent: "space-around",
    alignItems: "center",
    alignSelf: "flex-start",
  },
});
