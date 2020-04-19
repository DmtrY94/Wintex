const fluidImageFields = `
	imageFile {
		childImageSharp {
			fluid(maxWidth: 2000, quality: 100) {
				aspectRatio
				base64
				sizes
				src
				srcSet
			}
		}
	}
`

module.exports = fluidImageFields