  
const fluidImageFields = require(`./fluid`)

const mediaFields = `
    sourceUrl(size: LARGE)
    altText
    id
    description
    ${fluidImageFields}	
`

module.exports = mediaFields