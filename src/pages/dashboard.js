import React, { Component } from 'react'
import DashboardLayout from '../components/dashboard.js'
import './dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard-bg">
        <DashboardLayout />
      </div>
    )
  }
}

export default Dashboard
