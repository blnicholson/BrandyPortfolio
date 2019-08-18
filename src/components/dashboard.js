import React, {Component} from 'react';
import Date from "./date";
import Calendar from "./fullCalendarDash";
import LeftNav from "./leftNavDash"
import Podcasts from "./podcasts"
import PodcastCard from "./podcastCard"
import WakaWebPart from "./wakaTime"
import WeatherDash from "./weatherDash";
import Youtube from "./youtubeLayout";
import 'pure-react-carousel/dist/react-carousel.es.css';
import './dashboard.css';
import BigWeb from "./myPods/bigWeb";


class DashboardLayout extends Component {
   state = {
    isDashboardShowing: true,
    isBigWeb: false,
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
     switch (id) {
       case "0":
         {this.setState({isDashboardShowing:false, isBigWebShowing:true})}
        case "1":
          {this.setState({isDashboardShowing:false, isPodcast1Showing:true})}
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
          <div id="dashboard-card" className="card">
          <div className="columns">
            <div className="column is-narrow">
              <LeftNav/>
            </div>
            
            <div id="information-side" className="column is-9">
            <div className="columns">
                <div className="column">
                  <div className="columns">
                  <div id="calendar-column" className="column">
                  <div id="calendar-card">
                    <Calendar/>
                  </div>
                </div>
                <div className="column">
                  <div className="columns">
                  <div className="column">
                  {this.state.isDashboardShowing &&
                      <PodcastCard
                      playPodcast={this.playPodcast}
                     />
                  }
                  {this.state.isPodcast0Showing &&
                    <BigWeb
                      closePlayer={this.closePlayer}
                    />
                  }
                  </div>
                  </div>
                </div>
                    <div className="column">
                      <Youtube/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <WakaWebPart/>
                </div>
              </div>
              <div id="commits-main-card" className="columns card is-gapless">
                <div className="column">
                  <div className="has-text-white">
                    Waka Commits
                  </div>
                </div>
              </div>
            </div>

            <div id="farRight" className="column">
              <div className="columns">
                <div className="column">
                  <div className="card" id="weatherCard">
                    <WeatherDash/>
                  </div>  
                </div>
              </div>
            </div>
          </div>

          
        </div>
        <div className="card newsCard">
        <div className="columns">
            <div className="column">
              News
            </div>
        </div>
        </div>
      </div> 
        )
    }
}
export default DashboardLayout;
