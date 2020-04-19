const config = require(`./site-config`)

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`

console.log(`Using environment config: "${activeEnv}"`)

require(`dotenv`).config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `IntEXchange`,
    siteUrl: `https://intexchange.education`,
    description: `IntEXchange - Освіта за кордоном для школярів і студентів`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WORDPRESS",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wordpress",
        // Url to query from
        url: "http://admin.intexchange.education/graphql/",
        refetchInterval: 60,
     },          
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `intexchange.ua`
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        appName: 'IntEXchange',
        appDescription: 'IntEXchange - Освіта за кордоном для школярів і студентів',
        background: '#1ABC06',
        theme_color: '#1ABC06',
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-wpgraphql-inline-images`,
      options: {
        wordPressUrl: `https://wintex.local/`,
        uploadsUrl: `https://wintex.local/wp-content/uploads/`,
        processPostTypes: ["Page", "Post"],
        graphqlTypeName: 'WORDPRESS',
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://intexchange.education`,
        sitemap: `https://intexchange.education/sitemap.xml`,
        resolveEnv: () => activeEnv,
        env: {
          development: {
            policy: [{ userAgent: `*`, disallow: [`/`] }],
          },
          production: {
            policy: [
              {
                userAgent: `*`,
                allow: `/`,
                disallow: [`/inspiration`, `/assets`, `/client/*`, `/twitter`],
              },
            ],
          },
        },
      },
    },
    {
      // Removes unused css rules
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeLinkHeaders: false,
        mergeCachingHeaders: false,
      },
    },
  ],
}
