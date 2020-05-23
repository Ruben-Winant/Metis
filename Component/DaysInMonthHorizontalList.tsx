import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ListView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native-gesture-handler";
import HorizontalDayCard from "./HorizontalDayCard";
import { CalendarEvent, priorityTypes } from "../Types/CalendarEvent";

interface IDaysInMonthHorizontalListProps {
  givenYear: number;
  daysInMonth: number;
  givenMonth: number;
}
interface IDaysInMonthHorizontalListState {}

class DaysInMonthHorizontalList extends Component<
  IDaysInMonthHorizontalListProps,
  IDaysInMonthHorizontalListState
> {
  constructor(props: IDaysInMonthHorizontalListProps) {
    super(props);
  }

  private cTest = new CalendarEvent(
    "clean room",
    new Date(2020, 4, 4, 0, 0, 0, 0),
    "clean desk then clean closet and floor. Don't forget the ceiling.",
    null,
    priorityTypes.low,
    false
  );

  private cTest2 = new CalendarEvent(
    "clean room again",
    new Date(2020, 4, 7, 0, 0, 0, 0),
    "clean desk then clean closet and floor. Don't forget the ceiling.",
    null,
    priorityTypes.normal,
    false
  );

  private cTest3 = new CalendarEvent(
    "clean room AGAIN??",
    new Date(2020, 4, 13, 0, 0, 0, 0),
    "clean desk then clean closet and floor. Don't forget the ceiling.",
    null,
    priorityTypes.high,
    false
  );

  private cTest4 = new CalendarEvent(
    "Sleeeeeeeep",
    new Date(2020, 4, 13, 0, 0, 0, 0),
    "Tired of cleaning",
    null,
    priorityTypes.high,
    false
  );

  render() {
    var dayCards: any = [];

    for (let index = 1; index <= this.props.daysInMonth; index++) {
      var card = null;
      let checkDate = new Date(
        this.props.givenYear,
        this.props.givenMonth,
        index,
        0,
        0,
        0,
        0
      );
      let dayInWeek = checkDate.getDay();
      card = (
        <HorizontalDayCard
          key={"inv" + index}
          nrOfMonth={index}
          dayOfWeek={dayInWeek}
        />
      );
      dayCards.push(card);
    }

    return (
      <View style={styles.list}>
        <ScrollView showsVerticalScrollIndicator={false}>{dayCards}</ScrollView>
      </View>
    );
  }
}

export default DaysInMonthHorizontalList;

const styles = StyleSheet.create({
  list: {
    marginBottom: 80,
  },
});
