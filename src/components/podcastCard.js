import React from 'react'
import Podcasts from '../components/podcasts'
import './podcastCard.css'

const PodcastCard = (props) => (
  <div id="podcast-cards" className="card has-text-white">
    <Podcasts
     playPodcast={props.playPodcast}
    />
  </div>
)

export default PodcastCard
