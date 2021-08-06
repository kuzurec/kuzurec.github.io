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
  pathPrefix: '/page',
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'kuzure',
        short_name: 'kuzure',
        start_url: `/`,
        icon: require.resolve('./images/favicon.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://at.alicdn.com/t/font_2633402_q06j6vu6n4.js',
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css?version=1.5.6',
      },
    },
    `gatsby-plugin-gitalk`,
  ],
}
