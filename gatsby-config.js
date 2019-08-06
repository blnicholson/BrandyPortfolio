// var id = [ "0", "e06cad6496bf46e0b1809eba32089eb3", "4e19a8a109a24385b7c0c51faabc46f9","6e1dd27675924918bdd733b1194bbb94", "559de49bb9f24680825ae6b59839e60c"]
// var url =[];

// for(i=1; i<6; i++){
//    url = "https://listen-api.listennotes.com/api/v2/podcasts/" + id[i]
//    console.log("butt" + id.length)
//   }
     
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
      apikey: 'c0d2380d8f5bf41da5f7c4ab854ee475',
      location: 'Frisco',
      units: 'imperial',
      type: 'forecast'
    },
  },

  
    

    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    
  ],
}
