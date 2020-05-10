import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import DateListHeader from "../Component/DateListHeader";
import DaysInMonthHorizontalList from "../Component/DaysInMonthHorizontalList";

interface IPlannerHomeScreenState {
  selectedMonth: number;
}
interface IPlannerHomeScreenProps {}

class PlannerHomeScreen extends Component<
  IPlannerHomeScreenProps,
  IPlannerHomeScreenState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedMonth: new Date().getMonth(),
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <DateListHeader month={this.state.selectedMonth} />
        <DaysInMonthHorizontalList
          daysInMonth={31}
          givenMonth={new Date().getMonth()}
          givenYear={2020}
        />
      </View>
    );
  }
}

export default PlannerHomeScreen;
