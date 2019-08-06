import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './podcastItem.css'

const PodcastItem = props => (
  <div className="column is-one-quarter">
    <div className="logo-card">
    <img className="podcast-image" src={props.image} alt={props.alt}/>
      <div className="podcast-overlay">
        <div class="podcast-play">
        <FontAwesomeIcon icon={'play-circle'} size={'2x'} color={'white'} onClick={() => props.playPodcast(props.id)} value={props.id} />
        </div>
      </div>
    </div>
  </div>
)
export default PodcastItem