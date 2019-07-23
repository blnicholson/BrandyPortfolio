import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import Moment from 'moment'
// import './weather-day-widget.css'

/*OpenWeatherMap API: https://openweathermap.org/api */
/*Weather API: https://rapidapi.com/community/api/open-weather-map */

function getCardinalDirection(angle) {
  const directions = [
    '↑ N',
    '↗ NE',
    '→ E',
    '↘ SE',
    '↓ S',
    '↙ SW',
    '← W',
    '↖ NW',
  ]
  return directions[Math.round(angle / 45) % 8]
}

const WeatherDashWidget = () => (
  <StaticQuery
    query={graphql`
      query WeatherDayQuery {
        openWeather {
          city {
            name
          }
          list {
            weather {
              description
              main
              id
              icon
            }
            main {
              temp
              pressure
              humidity
              temp_min
              temp_max
              sea_level
              grnd_level
            }
            wind {
              deg
              speed
            }
            dt_txt
          }
        }
      }
    `}
    render={data => (
      <div id="weather-main-card" className="card has-text-white ">
        <header className="card-header is-shadowless">
          <p className="card-header-title is-uppercase is-centered is-size-4 has-text-white">
            {data.openWeather.city.name}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <span className="icon is-large">
              <i
                className={`wi-owm-${
                  data.openWeather.list[0].weather[0].icon
                }`}
              />
            </span>
            <div className="is-size-1">
              {Math.round(data.openWeather.list[0].main.temp)}&#176;
            </div>
            <div className="is-uppercase">
              {data.openWeather.list[0].weather[0].description}
            </div>
            <div>
              {getCardinalDirection(data.openWeather.list[0].wind.deg)} at{' '}
              {Math.round(data.openWeather.list[0].wind.speed)} mph
            </div>
            </div>
          </div>
            <footer className='card-footer'>
            <p className='card-footer-item'>
            <img src="../images/logo/openweather-white-logo-RGB.png" alt='logo' style={{width: '100px'}}/>
            </p>
            
          </footer>
      </div>
    )}
  />
)

export default WeatherDashWidget;
