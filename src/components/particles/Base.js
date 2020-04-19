import React from "react"
import Helmet from "react-helmet"

import config from "../../site-config"

import SEO from "../components/particles/SEO"




const Base = props => {
    const { context } = props.BaseProps

    console.log(props)


    return (  
        <React.Fragment>
            
            <SEO data={context} />    
                  
        </React.Fragment>
    )
}


export default Base