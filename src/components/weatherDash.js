import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Date from "./date.js"
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
      <div id = "weather-main-card" className = "card has-text-white">
        <div className = "card-header-title is-centered is-size-2 has-text-white">
          <Date />
        </div>
       

        <div className = "card-content">
          <div className = "content">
          <div className = "location has-text-centered">
          <p className="is-size-2">{data.openWeather.city.name}</p>
          </div>
          <div className ="weatherIcon has-text-centered">
          <span className="icon is-large is-size-4">
                <i
                  className={`owi owi-4x owi-${
                    data.openWeather.list[0].weather[0].icon
                  }`}
                />
          </span>
          </div>
          <div className = "temp title is-size-1 has-text-white has-text-centered">
            <p>{Math.round(data.openWeather.list[0].main.temp)}&#176;
            </p>
          </div>
          <div className = " title high-low has-text-centered is-size-4 has-text-white" >
             <p>
               {Math.round(data.openWeather.list[0].main.temp_min)}&#176; 
               &nbsp; &nbsp; 
               {Math.round(data.openWeather.list[0].main.temp_max)}&#176; 
            </p>
          </div>
          <div className = "title weatherDescription has-text-white is-capitalized has-text-centered is-size-5">
            <p>{data.openWeather.list[0].weather[0].description}</p>
          </div>
          <div className = "title weatherDescription has-text-white is-capitalized has-text-centered is-size-5">
          </div>
          </div>
        </div>
      </div>
    )}
  />
)

export default WeatherDash;