import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import DatePicker from "react-native-datepicker"

export default class DatePick extends Component {
  constructor(props) {
    super(props)
    // set value in state for initial date
    this.state = { date: "15-05-2018" }
  }

  render() {
    return (
      <View>

        <DatePicker
          style={{ width: 200 }}
          date={this.state.date} // initial date from state
          // The enum of date, datetime and time
          showIcon={false}
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"

          onDateChange={date => { this.setState({ date }) }}
        />

      </View>
    )
  }
}
