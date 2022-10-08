require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Clay By Stacy`,
    description: `This is a web shop selling handcrafted clay wares made by Stacy Healy.`,
    author: `@gatsbyjs`,
    siteUrl: `https://claybystacy.net`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: process.env.GATSBY_STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
    {
      resolve: `gatsby-plugin-use-shopping-cart`,
      options: {
        mode: "payment",
        cartMode: "client-only",
        stripePublicKey: `${process.env.GATSBY_STRIPE_PUBLIC_KEY}`,
        successUrl: "http://claybystacy.net/success",
        cancelUrl: "http://claybystacy.net/",
        currency: "USD",
        allowedCountries: ["US", "GB", "CA"],
        billingAddressCollection: true,
      },
    },
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
            {
              family: "Edu SA Beginner",
              variants: ["300", "600"],
            },
          ],
        },
      },
    },
  ],
}
