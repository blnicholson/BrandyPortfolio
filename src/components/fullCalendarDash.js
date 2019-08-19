import React, { Component } from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "./fullCalendarDash.css"

import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale=("en-GB")
const localizer = momentLocalizer(moment);

class BigCalendar extends Component {
  state = {
    events: [
      {
        start: "",
        end: "",
        title: ""
      }
    ]
  };

  render() {
    return (
      <div>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          views={{month:true}}
          events={this.state.events}
          style={{ height: "25vh" }}
        />
      </div>
    );
  }
}

export default BigCalendar;
