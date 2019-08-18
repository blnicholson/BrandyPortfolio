import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./leftNavDash.css"

const DashboardMainMenu = () => (
  <aside
    id="navigation-side"
    className="menu"
  >
    <ul className="menu-list">
    <Link to='/news'>
      <li>
      <span className="icon is-large icons">
          <FontAwesomeIcon icon={'newspaper'} size={'lg'} color={'#50CFDE'}/>
        </span>
        </li>
        </Link>
        <Link to='/podcasts'>
      <li>
        <span className="icon is-large icons">
          <FontAwesomeIcon icon={'podcast'} size={'lg'} color={'#50CFDE'}/>
        </span>
      </li>
      </Link>
      <Link to='/youtube'>
      <li>
        <span className="icon is-large icons">
          <FontAwesomeIcon icon={'video'} size={'lg'} color={'#50CFDE'}/>
        </span>
      </li>
      </Link>
      <Link to='/weather'>
      <li>
        <span className="icon is-large icons">
          <FontAwesomeIcon icon={'cloud-sun-rain'} size={'lg'} color={'#50CFDE'}/>
        </span>
      </li>
      </Link>
      <Link to='/calendar'>
      <li>
        <span className="icon is-large icons">
          <FontAwesomeIcon icon={'calendar-alt'} size={'lg'} color={'#50CFDE'}/>
        </span>
      </li>
      </Link>
      <Link to='/wakatime'>
      <li>
        <span className="icon is-large icons">
          <FontAwesomeIcon icon={'code'} size={'lg'} color={'#50CFDE'}/>
        </span>
      </li>
      </Link>
      <Link to='/clock'>
      <li>
        <span className="icon is-large icons">
          <FontAwesomeIcon icon={'clock'} size={'lg'} color={'#50CFDE'}/>
        </span>
      </li>
      </Link>
    </ul>
  </aside>
)

export default DashboardMainMenu