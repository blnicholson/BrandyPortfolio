import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import './podcastCard.css'

/*Listen Notes API for Podcasts: https://www.listennotes.com/api/ */
/* pure-react-carousel: https://www.npmjs.com/package/pure-react-carousel */
/*AudioCard Player:  https://erikras.github.io/audiocard/?path=/story/examples--plain */

const BigWeb = () => (
  <StaticQuery
    query={graphql`
      query BigWeb2ApiQuery {
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
      <div>
      <img src={data.allBigWeb.nodes[0].thumbnail}/>
      </div>
    )}
  />
)

export default BigWeb