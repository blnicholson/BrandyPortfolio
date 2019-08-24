const moment = require('moment') 
const startDate = moment().subtract(14, 'days').format('YYYY-MM-DD')
const endDate = moment().subtract(7, 'days').format('YYYY-MM-DD')
require('dotenv').config();

const OWApi = process.env.OPEN_WEATHER_API_KEY; 
const LNApi = process.env.LISTEN_NOTES_API_KEY;
const YTApi = process.env.YOUTUBE_API_KEY;
const WTApi = process.env.WAKATIME_API_KEY;
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
          "X-ListenAPI-Key": LNApi
        },
          name: "BigWeb",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/a706b0a930b24e269bcf177432ce5ac6?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "Changelog",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/6e1dd27675924918bdd733b1194bbb94?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "ClickCast",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/3c03b47b265647a5b6ad271eb55130a4?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "CodeNewbie",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/8a0c7771ad414b0bbb3865c4fbb21dda?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "CodePen",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/0087e50929614250aac999207c1d33aa?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "DeveloperTea",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/ff9de4bef29f4153a84fceb1207daa57?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "FrontEnd",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/559de49bb9f24680825ae6b59839e60c?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "FullStack",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/2e44db0c634742908ee50b7ee56fdf18?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "HanselMinutes",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/b4d3741a7e5347c4b967c2245683cee3?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "JavascriptJabber",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/7d12ec241f1e46bbb0d35374470df8d5?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "Mistakes",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/5349b09d8b06416aab8f60178e206ba6?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "NonBreakingSpace",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/d573d18b312146e49e98d15cf63818e5?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "ResponsiveWeb",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/fdb835da533f41a691054815316d8b77?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "ShopTalk",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/e72fa78633a34556bac498b7afcf5ab4?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "StartHere",
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/podcasts/4e19a8a109a24385b7c0c51faabc46f9?next_episode_pub_date=1479154463000&sort=recent_first",
        method:"get",
        headers:{
          "X-ListenAPI-Key": LNApi
        },
          name: "StyleGuide",
      }
    },

    {
      resolve: 'gatsby-source-thirdparty',
      options: {
        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=` + WTApi,
  
        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `wakatime`,
      }
    },
  {
    resolve: `gatsby-source-youtube-v2`,
    options: {
      channelId: [ 'UCW5YeuERMmlnqo4oq8vwUpg'],
      apiKey: YTApi,
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
      path:`./src/pods/myPodcastList.json`
    },
  },

  
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    
  ],
}
