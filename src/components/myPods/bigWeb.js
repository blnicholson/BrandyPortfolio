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
  import "./bigWeb.css"

/*Listen Notes API for Podcasts: https://www.listennotes.com/api/ */
/* pure-react-carousel: https://www.npmjs.com/package/pure-react-carousel */
/*AudioCard Player:  https://erikras.github.io/audiocard/?path=/story/examples--plain */

const BigWeb = (props) => (
  <StaticQuery
    query={graphql`
      query BigWebApiQuery {
        allBigWeb {
          nodes {
            alternative_id
            title
            publisher
            image
            thumbnail
            listennotes_url
            total_episodes
            explicit_content
            description
            itunes_id
            rss
            latest_pub_date_ms
            earliest_pub_date_ms
            language
            country
            website
            extra {
              twitter_handle
              facebook_handle
              instagram_handle
              wechat_handle
              patreon_handle
              youtube_url
              linkedin_url
              spotify_url
              google_url
              url1
              url2
              url3
            }
            is_claimed
            email
            looking_for {
              sponsors
              guests
              cohosts
              cross_promotion
            }
            genre_ids
            episodes {
              alternative_id
              title
              description
              pub_date_ms
              audio
              audio_length_sec
              listennotes_url
              image
              thumbnail
              maybe_audio_invalid
              listennotes_edit_url
              explicit_content
            }
            next_episode_pub_date
          }
        }
      }
    `}
    render={data => (
      <div id="podcastPlayerCard" className="card has-text-white">
      <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={35}
        totalSlides={10}
      >
        <Slider>
          {data.allBigWeb.nodes[0].episodes.map(episode => (
            <Slide index={1}>
            <PodcastPlayer
              title={episode.title}
              art={episode.thumbnail}
              source={episode.audio}
            />
            </Slide>
          ))}
        </Slider>
        <ButtonFirst style={{ backgroundColor: 'transparent', border: 'none' }}>
          <FontAwesomeIcon icon={'fast-backward'} size={'lg'} color={'white'} />
        </ButtonFirst>
        <ButtonBack style={{ backgroundColor: 'transparent', border: 'none' }}>
          <FontAwesomeIcon icon={'backward'} size={'lg'} color={'white'} />
        </ButtonBack>
        <ButtonPlay style={{ backgroundColor: 'transparent', border: 'none' }}>
          <FontAwesomeIcon icon={'play'} size={'lg'} color={'white'} />
        </ButtonPlay>
        <ButtonNext style={{ backgroundColor: 'transparent', border: 'none' }}>
          {' '}
          <FontAwesomeIcon icon={'forward'} size={'lg'} color={'white'} />
        </ButtonNext>
        <ButtonLast style={{ backgroundColor: 'transparent', border: 'none' }}>
          <FontAwesomeIcon icon={'fast-forward'} size={'lg'} color={'white'} />
        </ButtonLast>
      </CarouselProvider>
      <img
        src="../images/logo/listen_notes_api_logo.png"
        alt="logo"
        style={{ width: '125px' }}
      />
      <div>
        <p onClick = {() => props.closePlayer(props.id)} value={props.id}>Close</p>
      </div>
    </div>

      </div>
    )}
  />
)

export default BigWeb