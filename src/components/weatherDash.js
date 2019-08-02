import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
// import Moment from 'moment'
import '../scss/open-weather-icons.scss';
import './weatherDash.css';

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

const WeatherDash = () => (
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
          <p className="is-uppercase is-centered is-size-5 has-text-white description">
          {data.openWeather.list[0].weather[0].description}
        </p>
        <div className="card-content">
          <div className="content">
         
            <span className="icon is-large">
              <i
                className={`owi owi-4x owi-${
                  data.openWeather.list[0].weather[0].icon
                }`}
              />
            </span>

            <div className="is-size-1">
              {Math.round(data.openWeather.list[0].main.temp)}&#176;
            </div>

            <p>
              {Math.round(data.openWeather.list[0].main.temp_min)}&#176; Low
              &nbsp; | &nbsp;
              {Math.round(data.openWeather.list[0].main.temp_max)}&#176; High
            </p>

            <p>
              <span className="light-grey is-pulled-left">Humidity</span> &nbsp;
              <span className="is-pulled-right">{data.openWeather.list[0].main.humidity} %</span> <br/>
              <span className="light-grey is-pulled-left">Wind Direction</span> &nbsp;
              <span className="is-pulled-right">{getCardinalDirection(data.openWeather.list[0].wind.deg)}</span> <br />
              <span className="light-grey is-pulled-left">Wind Speed</span>&nbsp;
              <span className="is-pulled-right">{Math.round(data.openWeather.list[0].wind.speed)} mph</span>
            </p>

          </div>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <img
              src="../images/logo/openweather-white-logo-RGB.png"
              alt="logo"
              style={{ width: '50px' }}
            />
          </p>
        </footer>
      </div>
    )}
  />
)

export default WeatherDash;