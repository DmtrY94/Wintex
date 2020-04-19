const path = require(`path`)


module.exports = async ({ actions, graphql }) => {
  const GET_INSTA = `
  query GET_INSTA {
    allInstaNode {
        nodes {
            id
        }
    }
}
`

  const { createPage } = actions
  const fetchInsta = async variables =>
    await graphql(GET_INSTA, variables).then(({ data }) => {
        return data.allInstaNode.nodes
    })

    await fetchInsta().then(allInsta => {
        allInsta.map(insta => {
        console.log(`create isnta: ${insta.id}`)


        actions.createPage({
          path: `/${insta.id}`,
          component: path.resolve(`./src/templates/insta.js`),
          context: {
            id: insta.id,       
          },
        })
      })

  })
}