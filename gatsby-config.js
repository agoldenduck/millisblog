const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      plugins: [
        {
          resolve: `gatsby-remark-relative-images`,
          options: {
            name: `images` // Must match the source name ^
          }
        },
        {
          resolve: `gatsby-plugin-netlify-cms-paths`,
          options: {
            cmsConfig: `/static/admin/config.yml`
          }
        },
        {
          resolve: `gatsby-remark-images`,
        }
      ]
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
