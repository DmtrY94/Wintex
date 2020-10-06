/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import HorizontalScroller from 'react-horizontal-scroll-container'
import { graphql, useStaticQuery } from "gatsby"

import Instagr from "../../molecules/Instagr"

const ContentNews = () => {
    const data = useStaticQuery(graphql`{
        allInstaNode(sort: {fields: id, order: DESC}, limit: 10) {
            nodes {  
                id
                caption
                username
                localFile {
                    childImageSharp {
                    fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                    }
                    }
                } 
            }        
        }
    }
`)


return (     
    <div
        sx={{
            paddingTop: '1vh',
            borderTop: '2px solid rgba(0, 0, 0, 0.035)'
                        
        }}
    >
        <Styled.h3
            sx={{
                paddingLeft: ['5.208vw', '20px', '5vh', '5.208vw'],
                fontSize: ['1.0416vw', '20px', '20px', '1.0416vw'],
                margin: '15px 0 0',
                color: ['white', '#0D2344', 'white']
            }}
        >
            insta life
        </Styled.h3>
        <div>
        <div
            sx={{
                paddingLeft: ['5.208vw', '20px', '5vh', '5.208vw'],
            }}
        >
            <HorizontalScroller invert sensibility={50}>
                

            
               <Instagr  node={data.allInstaNode.nodes} />
               
      
            </HorizontalScroller>
        </div>
        </div>
    </div>
    )
}






export default ContentNews