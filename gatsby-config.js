const moment = require('moment') 
const startDate = moment().subtract(14, 'days').format('YYYY-MM-DD')
const endDate = moment().subtract(7, 'days').format('YYYY-MM-DD')
require('dotenv').config();

const OWApi = process.env.OPEN_WEATHER_API_KEY; 
console.log(OWApi)
module.exports = {

  siteMetadata: {

    title: 'Brandy Nicholson',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options:{
        fonts: [
          {
            family: `Rakkas`,
            // subsets: [``],
          },
          {
            family: `Open Sans`,
            variants: [`400`]
          },
        ],
      },
    },

    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/4e19a8a109a24385b7c0c51faabc46f9?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": "a4539543e2ec4e228042992bb87f0f1d"
        },
          name: "BigWeb",
      }
    },


    {
      resolve: 'gatsby-source-thirdparty',
      options: {
        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=6ae76703-d7e3-4535-b4eb-2372e2b61fc6`,
  
        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `wakatime`,
      }
    },
  {
    resolve: `gatsby-source-youtube-v2`,
    options: {
      channelId: [ 'UCW5YeuERMmlnqo4oq8vwUpg'],
      apiKey: 'AIzaSyBwF32cih-lu4GxejN2pd7lBgqcG2aF3rU',
      maxVideos: 50// Defaults to 50
    },
  },
  
  {
    resolve: `gatsby-source-openweathermap`,
    options: {
      apikey: OWApi,
      location: 'Frisco',
      units: 'imperial',
      type: 'forecast'
    },
  },

  `gatsby-transformer-json`,
  {
    resolve:`gatsby-source-filesystem`,
    options:{
      path:`./public/pods/myPodcastList.json`
    },
  },

  // {
  // resolve: `gatsby-source-filesystem`,
  //     options: {
  //       path: `${__dirname}/src/pods/`,
  //       name: 'pods',
  //     },
  // },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    
  ],
}
