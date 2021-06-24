module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Kuzure's blog`,
    author: `kuzure-东山`,
    description: `Kuzure's blog`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
