module.exports = {
  siteMetadata: {
    title: `Abhisek Mazumdar`,
    description: `Personal Blog | Tech News | Fun Facts | About Me`,
    author: `@abhisekmajumdar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://dev-abhisek.pantheonsite.io/`,
        apiBase: `jsonapi`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
