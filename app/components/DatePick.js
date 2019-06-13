import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import DatePicker from "react-native-datepicker"

export default class DatePick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }

  render() {
    return (
      <View>

        <DatePicker
          style={{ width: 200 }}
          date={this.state.date}
          showIcon={false}
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"

          onDateChange={(date) => {
            this.props.onDateChange && this.props.onDateChange(date)
            this.setState({ date })
          }}
        />

      </View>
    )
  }
}
