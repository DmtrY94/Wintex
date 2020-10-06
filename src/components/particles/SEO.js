import React from "react"
import Helmet from "react-helmet"
import { decodeHTML } from "../particles/helpers"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const SEO = ({ data }) => {
  if (!data || !data.seo) return null

  const {
    isBlog,
    metaDesc,
    opengraphTitle,
    opengraphDescription,
    opengraphImage,
    slug,
    title,
    twitterDescription,
    twitterTitle,
    language,
  } = data.seo

  console.log(opengraphImage)

  const lan = data.slug

  const postURL = `/`
  const mainpage = data.slug 

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: process.env.GATSBY_DOMAIN,
      name: opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title),
      alternateName: "Intexchange",
    },
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": postURL,
            name: opengraphTitle
              ? decodeHTML(opengraphTitle)
              : decodeHTML(title),
           
          },
        },
      ],
    },
    {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      url: process.env.GATSBY_DOMAIN,
      name: opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title),
      alternateName: "Intexchange",
      headline: opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title),
      description: metaDesc,
    },
  ]

  return (
    <Helmet>
      <html lang={data.language.slug} />
      {/* General tags */}
      <title>
        {opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title)}
      </title>
      <meta name="description" content={metaDesc} />
     

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      
      {mainpage === 'main' ? <meta property="og:url" content={`https://intexchange.org/`} /> : <meta property="og:url" content={`https://intexchange.org/${data.slug}`} />}
      {isBlog ? <meta property="og:type" content="article" /> : null}
      <meta
        property="og:title"
        content={
          opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title)
        }
      />
      <meta property="og:description" content={opengraphDescription ? opengraphDescription : ""} />

      <meta property="og:site_name" content="Intexchange" />
      <meta property="og:locale" content="uk-UA" />
      <meta property="og:locale" content="ru-UA" />
      {opengraphImage === null ? <meta property="og:image" /> : <meta property="og:image" content={`https://intexchange.org${opengraphImage.imageFile.childImageSharp.fluid.src}`} />}
      {mainpage === 'main' ? <link rel="canonical"  href={`https://intexchange.org/`} /> : <link rel="canonical"  href={`https://intexchange.org/${data.slug}`} />}
      {mainpage === 'main' ? <link rel="alternate" href={`https://intexchange.org/`} hreflang="ru-UA" /> : <link rel="alternate" href={`https://intexchange.org/${data.slug}`} hreflang="ru-UA" />}
      {mainpage === 'main' ? <link rel="alternate" href={`https://intexchange.org/ua/`} hreflang="uk-UA" /> : <link rel="alternate" href={`https://intexchange.org/ua/${data.slug}`} hreflang="uk-UA" />}
     
    </Helmet>
  )
}




export default SEO