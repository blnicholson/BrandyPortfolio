import React, { Component } from 'react'
import PodcastItem from '../components/podcastItem'
import PodcastList from "../../public/pods/myPodcastList.json"
import './podcasts.css'
import { StaticQuery } from 'gatsby';

/* https://codepen.io/PiotrBerebecki/pen/pEYPbY */

class Podcasts extends Component {
  constructor() {
    super();
    this.state = {
      channels: PodcastList,
      currentPage: 1,
      channelsPerPage: 8
    };

    this.handleClick = this.handleClick.bind(this);
    console.log(PodcastList)
    console.log(PodcastList[0].id)
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }


  render(data) {

      const { channels, currentPage, channelsPerPage } = this.state;

      // Logic for displaying current todos
      const indexOfLastChannel = currentPage * channelsPerPage;
      const indexOfFirstChannel = indexOfLastChannel - channelsPerPage;
      const currentChannels = channels.slice(indexOfFirstChannel, indexOfLastChannel);

      const renderChannels = currentChannels.map((channel, index) => {
        return <PodcastItem
        playPodcast = {this.props.playPodcast}
        id={channel.id}
        key={channel.id}
        name={channel.name}
        image={channel.image}
      />
      });

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(channels.length / channelsPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });


      return (
        
        <div id = "podcast-card" className = "has-text-white">
        <section>
          <div className="columns is-gapless is-multiline">
          {renderChannels}
          </div>
        </section>
        <ul id="page-numbers">
        {renderPageNumbers}
      </ul>
      </div>
      );

  }
}
export default Podcasts

  