import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ListView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native-gesture-handler";
import HorizontalDayCard from "./HorizontalDayCard";

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

  render() {
    let dayCards = [];

    for (let index = 1; index <= this.props.daysInMonth; index++) {
      //get day of the week
      let dayInWeek = new Date(
        this.props.givenYear,
        this.props.givenMonth,
        index,
        0,
        0,
        0,
        0
      ).getDay();
      let card = <HorizontalDayCard nrOfMonth={index} dayOfWeek={dayInWeek} />;
      dayCards.push(card);
    }
    return (
      <View>
        <ScrollView>{dayCards}</ScrollView>
      </View>
    );
  }
}

export default DaysInMonthHorizontalList;
