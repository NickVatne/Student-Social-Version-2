import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import DatePicker from "react-native-datepicker"

export default class DatePick extends Component {
  constructor(props) {
    super(props)
    // set value in state for initial date
    this.state = { time: "20:00" }
  }

  render() {
    return (
      <View>

        <DatePicker
          style={{ width: 200 }}
          date={this.state.time} // initial date from state
          // The enum of date, datetime and time
          mode="time"
          format="HH:mm"
          showIcon={false}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"

          onDateChange={(time) => { this.props.onDateChange && this.props.onDateChange(time);this.setState({ time }); }}
        />

      </View>
    )
  }
}
