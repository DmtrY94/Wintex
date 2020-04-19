const path = require(`path`)
const mediaFields = require(`./fragments/media`)
const seoFields = require(`./fragments/seo`)


module.exports = async ({ actions, graphql }) => {
  const GET_CHILDRENS = `
  query GET_CHILDRENS($first:Int){
    wordpress {
        forChildrens( first: $first ) {
          nodes {
            title
            uri
            id
            date
            content
            featuredImage {
              ${mediaFields}
            }
            PostTypeForChildrenFields {
              time
              age
              school
              flag
              aboutSchool
              apartments
              fieldGroupName
              food
              included
              location
              pay
              program
              descriptionschool
              youtube
              schoollogo
              image {
                ${mediaFields}
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
            ${seoFields}
          }
        }
    }
  }
  `
  const { createPage } = actions
  const fetchChildrens = async variables =>
    await graphql(GET_CHILDRENS, variables).then(({ data }) => {
        return data.wordpress.forChildrens.nodes
    })

    await fetchChildrens({ first: 500 }).then(allChildren => {
    allChildren.map(caseChildren => {
        console.log(`create caseChildren: ${caseChildren.uri}`)


        actions.createPage({
          path: `/for-childrens/${caseChildren.uri}`,
          component: path.resolve(`./src/templates/children.js`),
          context: {
            ...caseChildren,
            id: caseChildren.id,
            slug: caseChildren.uri,
            title: caseChildren.title,
          },
        })
      })

  })
}




