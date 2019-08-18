import React from 'react';
import {  StaticQuery, graphql } from 'gatsby';
import Player from './youtube.js';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonFirst, ButtonLast } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './youtubeLayout.css';




const YoutubeLayout = () => (
  
  
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
        

          <div className = "card" id="youtubeCard">
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
                
              
            

        
      
    
    )}
  />
)

export default YoutubeLayout;
