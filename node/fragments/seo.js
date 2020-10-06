const mediaFields = require(`./media`)

const seoFields = `
	seo {
		title
		focuskw
		metaDesc
		metaKeywords
		opengraphDescription
		opengraphTitle
		twitterDescription            
		twitterTitle
		opengraphImage {
			${mediaFields}
		}
	}
`

module.exports = seoFields