require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Abhisek Mazumdar`,
    description: `Know about Me | Blogs | Tech News | Fun Facts`,
    url: "https://www.abhisek.xyz",
    image: "/icons/icon-512x512.png",
    keywords: ["blogs", "news", "cv", "technology", "drupal", "javascript"],
    author: `@abhisekmajumdar`,
    twitterUsername: "@abhisekmajumdar",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://dev-abhisek-xyz.pantheonsite.io`,
        apiBase: `jsonapi`,
        basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD,
        },
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
        background_color: `#001845`,
        theme_color: `#001845`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true,
      },
    },
  ],
}
