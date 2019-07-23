import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Date from "./date";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonFirst, ButtonLast } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Player from './youtube.js';
import WeatherDash from "./weatherDash";

import './dashboard.css';
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";



const DashboardLayout = () => (
  
  <StaticQuery
    query={graphql`
      query YouTubeQuery {
        allYoutubeVideo{
          edges {
            node {
              id
              title
              description
              videoId
              channelTitle
              thumbnail {
                url
                width
                height
              }
              localThumbnail {
                id
              }
            }
          }
        }
      }
    
    `}
    render={data => (
      <div className="hero is-large">
    <div id="dashboard-card" className="card">
      <div className="columns">
        {/*Left Menu */}
        <div className="column is-narrow is-narrow-mobile is-hidden-mobile">
          <aside id="left-menu" className="menu">
            <ul className="menu-list">
              <Link to="/news">
                <li>
                  <span className="icon is-small">
                    <FontAwesomeIcon
                      icon={'newspaper'}
                      size={'lg'}
                      color={'white'}
                    />
                  </span>
                </li>
              </Link>
              <Link to="/podcasts">
                <li>
                  <span className="icon is-small">
                    <FontAwesomeIcon
                      icon={'podcast'}
                      size={'lg'}
                      color={'white'}
                    />
                  </span>
                </li>
              </Link>
              <Link to="/youtube">
                <li>
                  <span className="icon is-small">
                    <FontAwesomeIcon
                      icon={'video'}
                      size={'lg'}
                      color={'white'}
                    />
                  </span>
                </li>
              </Link>
              <Link to="/weather">
                <li>
                  <span className="icon is-small">
                    <FontAwesomeIcon
                      icon={'cloud-sun-rain'}
                      size={'lg'}
                      color={'white'}
                    />
                  </span>
                </li>
              </Link>
              <Link to="/calendar">
                <li>
                  <span className="icon is-small">
                    <FontAwesomeIcon
                      icon={'calendar-alt'}
                      size={'lg'}
                      color={'white'}
                    />
                  </span>
                </li>
              </Link>
            </ul>
          </aside>
        </div>

        <div id="information-side" className="column is-9">
          {/*WakaTime Top Column */}
          <div className="columns">
            <div className="column">
              <div className="card" id="wakaTimeCard">
                WakaTime
              </div>
            </div>
          </div>

          {/*YouTube & Podcast Column */}
          <div className="columns">
            <div className="column">
              <div className="columns">
                <div className="column">
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={150}
              >
                <Slider>
                {data.allYoutubeVideo.edges.map(
                  (edge) => (
                  <Slide index={0}>
                      <Player 
                            
                            videoId={edge.node.videoId}
                            />
                            
                            
                            </Slide>
                            )
                            )}
                  
                </Slider>
                <ButtonBack>Last Video</ButtonBack>
                <ButtonNext>Next Video</ButtonNext>
              </CarouselProvider>
                
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="card" id="api2Card">
                    API2
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Column */}
            <div id="calendar-column" className="column">
              <div id="calendar-card">
                <div className="card" id="calendarCard">
                  <FullCalendar 
                      defaultView ="dayGridMonth"
                      header={{
                        left:"prev",
                        center:"title",
                        right:"next"
                      }}
                      plugins={[dayGridPlugin]}
                      contentHeight={350}
                      showNonCurrentDates={true}
                      />
                      </div>
                </div>
              </div>
            </div>
        </div>

        {/*Far Right Column */}
        <div id="farRight" className="column">
          <div className="columns">
            <div className="column">
              <div className="card" id="dateCard">
               <Date/>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column" />
          </div>
          <div className="columns">
            <div className="column">
              <div className="card" id="weatherCard">
                <WeatherDash/>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div id="data-card" className="card">
                Data Here
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*News Ticker Column */}
      <div className="columns">
        <div className="column is-12">
          <div id="news-ticker-card" className="card">
            <div className="card" id="tickerCard">
              Ticker
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    )}
  />
)

export default DashboardLayout
