import React from "react"
import Helmet from "react-helmet"
import { decodeHTML } from "../particles/helpers"

const SEO = ({ data }) => {
  if (!data || !data.seo) return null

  const {
    isBlog,
    metaDesc,
    opengraphTitle,
    slug,
    title,
    twitterDescription,
    twitterTitle,
  } = data.seo

  const postURL = `/`

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: process.env.GATSBY_DOMAIN,
      name: opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title),
      alternateName: "WhatJackHasMade",
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
      alternateName: "WhatJackHasMade",
      headline: opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title),
      description: metaDesc,
    },
  ]

  return (
    <Helmet>
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
      <meta
        property="og:url"
        content={`${process.env.GATSBY_DOMAIN}/${slug}`}
      />
      {isBlog ? <meta property="og:type" content="article" /> : null}
      <meta
        property="og:title"
        content={
          opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title)
        }
      />
      <meta property="og:description" content={metaDesc ? metaDesc : ""} />
      
    
    </Helmet>
  )
}

export default SEO