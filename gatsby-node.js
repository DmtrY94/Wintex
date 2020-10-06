
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WORDPRESS_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}





const createPosts = require(`./node/createPosts`)
const createPages = require(`./node/createPages`)
const createChildrens = require(`./node/createChildrens`)
const createCategory = require(`./node/createCategory`)
const createBlog = require(`./node/createBlog`)



exports.createPages = async ({ actions, graphql }) => {
  const pluginOptions = {
    wordPressUrl: `ttp://admin.intexchange.education/`,
        uploadsUrl: `ttp://admin.intexchange.education/wp-content/uploads/`,
  }

  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
  await createChildrens({ actions, graphql })
  await createCategory({ actions, graphql })
  await createBlog({ actions, graphql })

}



