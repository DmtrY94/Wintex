const config = require(`./site-config`);
const languages = require('./src/data/languages');

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`

console.log(`Using environment config: "${activeEnv}"`)

require(`dotenv`).config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `IntEXchange`,
    siteUrl: `https://intexchange.org/`,
    description: `IntEXchange - Освіта за кордоном для школярів і студентів`,
    languages
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
        start_url: `/`,
        background: '#ffffff',
        theme_color: '#1ABC06',
        display: 'standalone',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      }
    }, 
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ['Oswald:300,400,500,600,700', 'Fira Sans']
        },
      },
    },
    {
      resolve: `gatsby-wpgraphql-inline-images`,
      options: {
        wordPressUrl: `http://admin.intexchange.education/`,
        uploadsUrl: `http://admin.intexchange.education/wp-content/uploads/`,
        processPostTypes: ["Page", "Post"],
        graphqlTypeName: 'WORDPRESS',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-26421321-13",
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '237424446631315',
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://intexchange.org/`,
        sitemap: `https://intexchange.org/sitemap.xml`,
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
