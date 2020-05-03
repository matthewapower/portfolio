module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require("autoprefixer")],
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
    {
      resolve: `gatsby-remark-images`,
      options: {
        backgroundColor: 'white',
        quality: 100
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Matthew A Power`,
    description: `Designer & Developer based in Atlanta, GA.`,
    author: `@matthewapower`,
  },
}
