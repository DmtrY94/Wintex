const path = require(`path`)
const mediaFields = require(`./fragments/media`)
const seoFields = require(`./fragments/seo`)

module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
  query GET_POSTS($first:Int){
    wordpress {
        posts( first: $first ) {
        nodes {
          id
          uri
          title
          slug
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
  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
        return data.wordpress.posts.nodes
    })

    await fetchPosts({ first: 500 }).then(allPosts => {
        allPosts.map(post => {
        console.log(`create posts: ${post.uri}`)

        const { isFrontPage } = post
        const uri = isFrontPage ? `/` : `/${post.uri}`


        actions.createPage({
          path: `/${post.uri}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            ...post,
            id: post.id,
            slug: post.slug,
            title: post.title,
          },
        })
      })

  })
}