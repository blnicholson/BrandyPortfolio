

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
        url: "https://listen-api.listennotes.com/api/v2/curated_podcasts/aPNowE9Z8FU",
        method:"get",
        headers:{
          "X-ListenAPI-Key": "a4539543e2ec4e228042992bb87f0f1d"
        },
          name: "podcasts",
      },
  },

    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}