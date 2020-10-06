import React from "react"
import PropTypes from "prop-types"


import LogoLoad from "./images/logo-load.svg"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <meta name="keywords" content="вчитися за кордоном, навчання за кордоном для Українців, навчання за кордоном, навчання в Європі,  освіта в Європі, вищу освіту за кордоном, сучасна освіта за кордоном, навчання, агентство з освіти, навчання за кордоном для українців, закордонне навчання, мовні курси, мовні школи, освіта за кордоном"></meta>

      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
            key={`loader`}
            id="___loader"
            style={{
                alignItems: "center",
                background: "linear-gradient(0deg, #8FD300 -2.04%, #00B707 22.03%)",
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 999,
                transition: "all 0.7s",
            }}
        >
            <LogoLoad />
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}




HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
