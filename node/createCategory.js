const path = require(`path`)
const seoFields = require(`./fragments/seo`)

module.exports = async ({ actions, graphql }) => {
  const GET_CATEGORIES = `
  query GET_CATEGORIES($first: Int) {
    wordpress {
      categories(first: $first) {
        nodes {
          id
          categoryId
          slug
          name
          uri
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
  const fetchTags = async variables =>
    await graphql(GET_CATEGORIES, variables).then(({ data }) => {
        return data.wordpress.categories.nodes
    })

    await fetchTags({ first: 100 }).then(allTags => {
        allTags.map(category => {
        console.log(`create category: ${category.slug}`)


        actions.createPage({
          path: `${category.uri}`,
          component: path.resolve(`./src/templates/category.js`),
          context: {
            ...category,
            id: category.id,
            slug: category.slug,
            name: category.name,
          },
        })
      })

  })
}

