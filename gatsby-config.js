module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: 'heroes - bettering our systems of care, together.',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Heroes - bettering our systems of care, together.',
        short_name: 'Heroes',
        start_url: '/',
        background_color: '#b3d4e6',
        theme_color: '#e23e24',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
}