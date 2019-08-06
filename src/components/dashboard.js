import React, {Component} from 'react';
import Date from "./date";
import Calendar from "./fullCalendarDash";
import LeftNav from "./leftNavDash"
import Podcasts from "./podcasts"
// import PodcastCard from "./podcastCard"
import WeatherDash from "./weatherDash";
import Youtube from "./youtubeLayout";
import 'pure-react-carousel/dist/react-carousel.es.css';
import './dashboard.css';
import Podcast0 from "./myPods/bigweb2";


class DashboardLayout extends Component {
   state = {
    isDashboardShowing: true,
    isPodcast0Showing: false,
    isPodcast1Showing: false,
    isPodcast2Showing: false,
    isPodcast3Showing: false,
    isPodcast4Showing: false,
    isPodcast5Showing: false,
    isPodcast6Showing: false,
    isPodcast7Showing: false,
    isPodcast8Showing: false,
    isPodcast9Showing: false,
    isPodcast10Showing: false,
    isPodcast11Showing: false,
    isPodcast12Showing: false,
    isPodcast13Showing: false,
    isPodcast14Showing: false,
    isPodcast15Showing: false,
   }

   playPodcast =(id) =>{
        if(id === "0"){
          {this.setState({isDashboardShowing:false, isPodcast0Showing:true})}
        }
        else if (id === "1"){
          {this.setState({isDashboardShowing:false, isPodcast1Showing:true})}
        }
        else if (id === "2"){
          {this.setState({isDashboardShowing:false, isPodcast2Showing:true})}
        }
        else if (id === "3"){
          {this.setState({isDashboardShowing:false, isPodcast3Showing:true})}
        }
        else if (id === "4"){
          {this.setState({isDashboardShowing:false, isPodcast4Showing:true})}
        }
        else if (id === "5"){
          {this.setState({isDashboardShowing:false, isPodcast5Showing:true})}
        }
        else if (id === "6"){
          {this.setState({isDashboardShowing:false, isPodcast6Showing:true})}
        }
        else if (id === "7"){
          {this.setState({isDashboardShowing:false, isPodcast7Showing:true})}
        }
        else if (id === "8"){
          {this.setState({isDashboardShowing:false, isPodcast8Showing:true})}
        }
        else if (id === "9"){
          {this.setState({isDashboardShowing:false, isPodcast9Showing:true})}
        }
        else if (id === "10"){
          {this.setState({isDashboardShowing:false, isPodcast10Showing:true})}
        }
        else if (id === "11"){
          {this.setState({isDashboardShowing:false, isPodcast11Showing:true})}
        }
        else if (id === "12"){
          {this.setState({isDashboardShowing:false, isPodcast12Showing:true})}
        }
        else if (id === "13"){
          {this.setState({isDashboardShowing:false, isPodcast13Showing:true})}
        }
        else if (id === "14"){
          {this.setState({isDashboardShowing:false, isPodcast14Showing:true})}
        }
        else if (id === "15"){
          {this.setState({isDashboardShowing:false, isPodcast15Showing:true})}
        }
      }

      closePlayer=(id) => {
        {this.setState({
          isDashboardShowing:true,
          isPodcast0Showing:false
        })}
      }

    render() {
        return (
          <div className="hero is-large is-flex-mobile is-flex-tablet" id="dashHero">
          <div className = "card" id="dashboard-card">
          <div className="columns">
            {/*Left Menu */}
            <div className="column is-narrow is-narrow-mobile is-hidden-mobile">
              <LeftNav/>
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
                    
                    <Youtube/>
                    </div>
                  </div>
                  <div className = "column">
                  <div className="columns">
                    <div className="column">
                    {this.state.isDashboardShowing &&
                        <Podcasts
                        playPodcast={this.playPodcast}
                       />
                    }
                    {this.state.isPodcast0Showing &&
                      <Podcast0
                        closePlayer={this.closePlayer}
                      />
                    }
                    
                    </div>
                  </div>
                </div>
                
    </div>
                {/* Calendar Column */}
                <div id="calendar-column" className="column">
                  <div id="calendar-card">
                      <Calendar/>
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
                
                </div>
              </div>
            </div>
          </div>
        
      </div>
      </div> 
        )
    }
}
export default DashboardLayout;



