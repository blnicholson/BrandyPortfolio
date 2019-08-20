import React from 'react'
import './pagination.css'
import Pods from "../test.json"
import { StaticQuery, graphql } from 'gatsby'
import PodcastItem from "../components/podcastItem";

const Test = () => (
  <StaticQuery
  query={graphql`
  query MyPodcasts {
    allMyPodcastListJson {
      edges {
        node {
          image {
            publicURL
            uid
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
            image={podcast.node.image.publicURL}
            
        />
        ))}
        </div>
    </div>
  )}
  />
)

  
export default Test;