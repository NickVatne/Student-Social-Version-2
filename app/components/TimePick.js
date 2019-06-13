import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import DatePicker from "react-native-datepicker"

export default class DatePick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
    }
  }

  render() {
    return (
      <View>

        <DatePicker
          style={{ width: 200 }}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          showIcon={false}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"

          onDateChange={(time) => {
            this.props.onDateChange && this.props.onDateChange(time)
            this.setState({ time })
          }}
        />

      </View>
    )
  }
}
