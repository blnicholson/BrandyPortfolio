import React, { Component } from 'react'
import './date.css'

/*https://medium.com/@dpark/time-date-in-react-using-setinterval-54ece428e0cf */

class TimeContainer extends Component {
  constructor() {
    super()
    let d = new Date()
    this.state = {
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      time: d.toLocaleTimeString(),
    }
    this.countingSecond = this.countingSecond.bind(this)
  }
  countingSecond() {
    let d = new Date()
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      time: d.toLocaleTimeString(),
    })
  }
  componentWillMount() {
    setInterval(this.countingSecond, 1000)
  }
  render() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'November',
      'December',
    ]
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    return (
      <div className = "time" id = "timeCard">
            <p id="dateStyle" className='subtitle has-text-white has-text-centered is-size-4 is-size-5-mobile is-size-5-tablet'>{days[this.state.day]},{" "}
            {months[this.state.month]} {this.state.date}</p>
            <p id="time-style" className='title has-text-white is-size-4 has-text-centered is-size-5-tablet'> {this.state.time}</p>
        </div>
      
    )
  }
}
export default TimeContainer