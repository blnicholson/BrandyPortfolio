import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PodcastPlayer from '../audioCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    ButtonFirst,
    ButtonLast,
    ButtonPlay,
  } from 'pure-react-carousel'
  import 'pure-react-carousel/dist/react-carousel.es.css'
  import "./pcAudio.css"

/*Listen Notes API for Podcasts: https://www.listennotes.com/api/ */
/* pure-react-carousel: https://www.npmjs.com/package/pure-react-carousel */
/*AudioCard Player:  https://erikras.github.io/audiocard/?path=/story/examples--plain */

const FrontEnd = (props) => (
  <StaticQuery
    query={graphql`
      query FrontEndApiQuery {
        allFrontEnd {
          nodes {
            title
            episodes {
              title
              audio
              thumbnail
            }
          }
        }
      }
    `}
    render={data => (
      <div id="podcastPlayerCard" className="card has-text-white equal-height">
        <header className="card-header">
          <p className="card-header-title has-text-white">
            {data.allFrontEnd.nodes[0].title}
          </p>
          <span className="card-header-icon" aria-label="more options">
            <span className="icon">
              <FontAwesomeIcon
                icon={'times-circle'}
                color={'white'}
                onClick={() => props.closePlayer(props.id)}
                value={props.id}
              />
            </span>
          </span>
        </header>
        <div className="card-content is-paddingless has-text-centered" id="podcast">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={35}
            totalSlides={10}
          >
            <Slider>
              {data.allFrontEnd.nodes[0].episodes.map(episode => (
                <Slide index={1}>
                  <PodcastPlayer
                    title={episode.title}
                    art={episode.thumbnail}
                    source={episode.audio}
                  />
                </Slide>
              ))}
            </Slider>
            <ButtonFirst
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              <FontAwesomeIcon
                icon={'fast-backward'}
                size={'lg'}
                color={'white'}
              />
            </ButtonFirst>
            <ButtonBack
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              <FontAwesomeIcon icon={'backward'} size={'lg'} color={'white'} />
            </ButtonBack>
            <ButtonPlay
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              <FontAwesomeIcon icon={'play'} size={'lg'} color={'white'} />
            </ButtonPlay>
            <ButtonNext
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              {' '}
              <FontAwesomeIcon icon={'forward'} size={'lg'} color={'white'} />
            </ButtonNext>
            <ButtonLast
              style={{ backgroundColor: 'transparent', border: 'none' }}
            >
              <FontAwesomeIcon
                icon={'fast-forward'}
                size={'lg'}
                color={'white'}
              />
            </ButtonLast>
          </CarouselProvider>
        </div>
        
        <footer className="card-footer podFoot">
          <p className="card-footer-item">
            <img
              src="../images/logo/listen_notes_api_logo.png"
              alt="logo"
              style={{ width: '125px', padding:"15px" }}
            />
          </p>
        </footer>
      </div>
    )}
  />
)


export default FrontEnd;