const path = require(`path`)
const mediaFields = require(`./fragments/media`)
const seoFields = require(`./fragments/seo`)


module.exports = async ({ actions, graphql }) => {
  const GET_BLOG = `
  query GET_BLOG($first:Int){
    wordpress {
        blogs( first: $first ) {
          nodes {
            title
            uri
            id
            date
            content
            featuredImage {
              ${mediaFields}
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
  const { createPage } = actions
  const fetchBlogs = async variables =>
    await graphql(GET_BLOG, variables).then(({ data }) => {
        return data.wordpress.blogs.nodes
    })

    await fetchBlogs({ first: 500 }).then(allBlogs => {
    allBlogs.map(caseBlogs => {
        console.log(`create caseBlogs: ${caseBlogs.uri}`)


        actions.createPage({
          path: `${caseBlogs.uri}`,
          component: path.resolve(`./src/templates/blog-template.js`),
          context: {
            ...caseBlogs,
            id: caseBlogs.id,
            slug: caseBlogs.uri,
            title: caseBlogs.title,
          },
        })
      })

  })
}




