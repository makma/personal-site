const lost = require('lost')
const pxtorem = require('postcss-pxtorem')

const url = 'https://www.martinmakarsky.com/'

require('dotenv').config()

module.exports = {
  // These properties are used by gatsby-plugin-sitemap
  // https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/#how-to-use
  siteMetadata: {
    url,
    siteUrl: url,
  },
  plugins: [
    {
      resolve: '@kentico/gatsby-source-kontent',
      options: {
        projectId: '71f6c7d0-f57d-00dc-8e60-b98b6dede89b', // Fill in your Project ID
        // if false used authorization key for secured API
        usePreviewUrl: process.env.KONTENT_PREVIEW_ENABLED && process.env.KONTENT_PREVIEW_ENABLED.toLowerCase() === 'true',
        authorizationKey: process.env.KONTENT_PREVIEW_ENABLED && process.env.KONTENT_PREVIEW_ENABLED.toLowerCase() === 'true'
          ? process.env.KONTENT_PREVIEW_KEY
          : undefined,
        languageCodenames: ['en-US'],
      },
    },
    {
      resolve: 'kontent-used-by-content-items', // local plugin
      options: {
        links: [
          {
            parentTypeCodename: 'article',
            childTypeCodename: 'tag',
            linkedElementCodename: 'tags',
            backReferenceName: 'used_by_articles',
          },
          {
            parentTypeCodename: 'article',
            childTypeCodename: 'category',
            linkedElementCodename: 'category',
            backReferenceName: 'used_by_articles',
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-39248355-12' }, // add own google analytics trackingId
    },
    'gatsby-plugin-preact',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {exclude: ["/not-very-secret-experiment-page"]}
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          lost(),
          pxtorem({
            precision: 8,
            rootValue: 16,
            unitPrecision: 5,
            propList: [
              'font',
              'font-size',
              'line-height',
              'letter-spacing',
              'margin',
              'margin-top',
              'margin-left',
              'margin-bottom',
              'margin-right',
              'padding',
              'padding-top',
              'padding-left',
              'padding-bottom',
              'padding-right',
              'border-radius',
              'width',
              'max-width',
            ],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
          }),
        ],
      },
    },
  ],
}