module.exports = {
  siteMetadata: {
    title: `Matthew A Power`,
    description: `Designer & Developer based in Atlanta, GA.`,
    author: `@matthewapower`,
    social: {
      twitter: 'matthewapower'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `matthewapower`,
        short_name: `mpower`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-theme-blog`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        backgroundColor: 'white',
        tracedSVG: { color: "#F00", turnPolicy: "TURNPOLICY_MAJORITY" },
        quality: 100
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'adh1nys'
        }
      }
    },
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require("autoprefixer")],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
