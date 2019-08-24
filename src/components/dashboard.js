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
import BigWeb from "./myPods/bigWeb"
import ChangeLog from "./myPods/changelog"
import ClickCast from "./myPods/clickCast"
import CodeNewbie from "./myPods/codeNewbie"
import CodePen from "./myPods/codePen"
import DeveloperTea from "./myPods/developerTea"
import FrontEnd from "./myPods/frontEnd"
import FullStack from "./myPods/fullStack"
import HanselMinutes from "./myPods/hanselMinutes"
import JavascriptJabber from "./myPods/javascriptJabber"
import Mistakes from "./myPods/mistakes"
import NonBreakingSpace from "./myPods/nonBreakingSpace"
import ResponsiveWeb from "./myPods/responsiveWeb"
import ShopTalk from "./myPods/shopTalk"
import StartHere from "./myPods/startHere"
import StyleGuide from "./myPods/styleGuide"

class DashboardLayout extends Component {
   state = {
    isDashboardShowing: true,
    isBigWebShowing: false,
    isChangeLogShowing: false,
    isClickCastShowing: false,
    isCodeNewbieShowing: false,
    isCodePenShowing: false,
    isDeveloperTeaShowing: false,
    isFrontEndShowing: false,
    isFullStackShowing: false,
    isHanselMinutesShowing: false,
    isJavascriptJabberShowing: false,
    isMistakesShowing: false,
    isNonBreakingSpaceShowing: false,
    isResponsiveWebShowing: false,
    isShopTalkShowing: false,
    isStartHereShowing: false,
    isStyleGuideShowing: false,
   }

   playPodcast =(id) =>{
     switch (id) {
       case "0":
         {this.setState({isDashboardShowing:false, isBigWebShowing:true})}
         break;
      case "1":
        {this.setState({isDashboardShowing:false, isChangeLogShowing:true})}
        break;
        case "2":
            {this.setState({isDashboardShowing:false, isClickCastShowing:true})}
            break;
        case "3":
            {this.setState({isDashboardShowing:false, isCodeNewbieShowing:true})}
            break;
        case "4":
            {this.setState({isDashboardShowing:false, isCodePenShowing:true})}
            break;
        case "5":
            {this.setState({isDashboardShowing:false, isDeveloperTeaShowing:true})}
            break;
        case "6":
          {this.setState({isDashboardShowing:false, isFrontEndShowing:true})}
          break;
        case "7":
          {this.setState({isDashboardShowing:false, isFullStackShowing:true})}
          break;
        case "8":
          {this.setState({isDashboardShowing:true, isHanselMinutesShowing:true})}
           break;
        case "9":
          {this.setState({isDashboardShowing:false, isJavascriptJabberShowing:true})}
          break;
        case "10":
          {this.setState({isDashboardShowing:false, isMistakesShowing:true})}
          break;
        case "11":
          {this.setState({isDashboardShowing:false, isNonBreakingSpaceShowing:true})}
          break;
        case "12":
          {this.setState({isDashboardShowing:false, isResponsiveWebShowing:true})}
          break;
        case "13":
          {this.setState({isDashboardShowing:false, isShopTalkShowing:true})}
          break;
        case "14":
        {this.setState({isDashboardShowing:false, isStartHereShowing:true})}
        break;
        case "15":
          {this.setState({isDashboardShowing:false, isStyleGuideShowing:true})}
          break;
     }
        
      }
      closePlayer=(id) => {
        {this.setState({
          isDashboardShowing:true,
          isBigWebShowing:false,
          isChangeLogShowing:false,
          isClickCastShowing:false,
          isCodeNewbieShowing:false,
          isCodePenShowing:false,
          isDeveloperTeaShowing:false,
          isFrontEndShowing:false,
          isFullStackShowing:false,
          isHanselMinutesShowing:false,
          isJavascriptJabberShowing:false,
          isMistakesShowing:false,
          isNonBreakingSpaceShowing:false,
          isResponsiveWebShowing:false,
          isShopTalkShowing:false,
          isStartHereShowing:false,
          isStyleGuideShowing:false

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
                  {this.state.isBigWebShowing &&
                    <BigWeb
                      closePlayer={this.closePlayer}
                    />
                  }
                  {this.state.isChangeLogShowing &&
                    <ChangeLog
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isClickCastShowing &&
                    <ClickCast
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isCodeNewbieShowing &&
                    <CodeNewbie
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isCodePenShowing &&
                    <CodePen
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isDeveloperTeaShowing &&
                    <DeveloperTea
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isFrontEndShowing &&
                    <FrontEnd
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isFullStackShowing &&
                    <FullStack
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isHanselMinutesShowing &&
                    <HanselMinutes
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isJavascriptJabberShowing &&
                    <JavascriptJabber
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isMistakesShowing &&
                    <Mistakes
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isNonBreakingSpaceShowing &&
                    <NonBreakingSpace
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isResponsiveWebShowing &&
                    <ResponsiveWeb
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isShopTalkShowing &&
                    <ShopTalk
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isStartHereShowing &&
                    <StartHere
                      closePlayer={this.closePlayer}
                      />
                  }
                  {this.state.isStyleGuideShowing &&
                    <StyleGuide
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
