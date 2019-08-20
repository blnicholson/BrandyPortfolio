import React from 'react'
import './pagination.css'
import { StaticQuery, graphql } from 'gatsby'
import PodcastItem from "../components/podcastItem";

const Test = () => (
  <StaticQuery
  query={graphql`
  query MyPodcasts {
    allMyPodcastListJson {
      edges {
        node {
          id
          alt
          image {
            publicURL
            name
          }
        }
      }
    }
    
  }
  `}
  render={data => (
    <div  className=" has-text-white">
    <div className="columns is-gapless is-multiline">
    {data.allMyPodcastListJson.edges.map(podcast => (
      <PodcastItem
      playPodcast = {this.props.playPodcast}
      id={podcast.node.id}
      key={podcast.node.id}
      name={podcast.node.name}
      image={podcast.node.image.publicURL}
    />
        ))}
        </div>
    </div>
  )}
  />
)

  
export default Test;