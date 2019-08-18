import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Moment from 'moment'
import PieChart from 'react-minimal-pie-chart'
import randomColor from 'randomcolor'
import './wakatime.css'

/*WakaTime API: https://wakatime.com/developers */
/*Random Color: https://www.npmjs.com/package/randomcolor */
/*Pie Chart: https://github.com/toomuchdesign/react-minimal-pie-chart#readme */

const WakaTimeWebPart = () => (
  <StaticQuery
    query={graphql`
      query WakaTimeQuery {
        thirdPartyWakatime {
          data {
            best_day {
              date
              text
            }
            categories {
              text
            }
            editors {
              name
            }
            languages {
              name
              percent
            }
          }
        }
      }
    `}
    render={data => (
      <div id="wakatime-card" className="card">
        <header className="card-header has-text-white is-shadowless">
          <div className="card-header-title is-centered">
            <img
              src="../images/logo/Logo + Text Horizontal_white.png"
              alt="WakaTime Logo"
              style={{ width: '100px' }}
              hspace={'5px'}
            />{' '}
            <span className="has-text-white">Analytics</span>
          </div>
        </header>
        <div className="columns">
          <div className="column">
          <p className='light-grey'>Coding Last 7 Days</p>
            <p className="has-text-white">
              {data.thirdPartyWakatime.data.categories[0].text}
            </p>
          </div>
          <div className="column">
          <p className='light-grey'>
            Best Day was {Moment(data.thirdPartyWakatime.data.best_day.date).format(
              'dddd, MMMM Do YYYY'
            )}
          </p>
            <p className="has-text-white">
              {data.thirdPartyWakatime.data.best_day.text}
            </p>
          </div>
          <div className="column">
          <p className='light-grey'>Editor of Choice</p>
            <p className="has-text-white">
              {data.thirdPartyWakatime.data.editors[0].name}
            </p>
          </div>
        </div>
        <div className="columns is-multiline">
          {data.thirdPartyWakatime.data.languages.map(language => (
            <div className="column">
              <PieChart
                data={[
                  {
                    value:`${language.percent}`,
                    color: randomColor({ luminosity: 'light' }, { count: 27 }),
                  },
                ]}
                style={{ height: '100px' }}
                lineWidth={20}
                totalValue={100}               
                label={({data, dataIndex}) => 
             data[0].percentage.toFixed(2) + '%'
              }
                labelPosition={0}
                labelStyle={{ fontSize: '1em', fontFamily: 'san-serif' }}
                background="#122342"
              />
              <p className="has-text-white language-name">{language.name}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  />
)

export default WakaTimeWebPart
