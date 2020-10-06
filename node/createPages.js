const path = require(`path`)
const mediaFields = require(`./fragments/media`)
const seoFields = require(`./fragments/seo`)
const { lang } = require("moment")

module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
  query GET_PAGES($first:Int){
    site {
      siteMetadata {
        languages {
          langs
        }
      }
    }
    wordpress {
      pages( first: $first ) {
        nodes {
          isFrontPage
          uri
          title
          content
          slug
          PageGallery {
            pagegallery {
              ${mediaFields}
            }
            pageimg {
              ${mediaFields}
            }
          }
          ${seoFields}
          language {
            slug
          }
        }
      }
    }
  }
  `
  const languages = [
    {
      path: "/",
      code: "en_US",
    },
    {
      path: "/ua",
      code: "et",
    },
  ]

 
  const { createPage } = actions

  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
        return data.wordpress.pages.nodes
      
    })



    await fetchPages({ first: 500 }).then(allPages => {

    allPages.map(page => {
       
       
        console.log(`create page: /${page.uri}`)
        
        const { isFrontPage } = page
        const uri = isFrontPage ? `/` : `/${page.uri}`


        
        actions.createPage({
          path: `/${page.uri}`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            ...page,
            id: page.id,
            slug: page.slug,
            title: page.title,
          },
        })
      })

  })
}


