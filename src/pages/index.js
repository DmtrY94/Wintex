/** @jsx jsx */
import React from "react"
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from "../components/particles/Layout"
import Hero from "../components/organisms/hero/Hero"
import ContentList from "../components/organisms/contentlist/ContentList"
import ContentNews from "../components/organisms/contentnews/ContentNews"
import { motion  } from "framer-motion"




const IndexPage = () => {
    
    return (   
           
            <Layout>   

                <Hero />
                <ContentList />
                <ContentNews /> 
                <div 
                    sx={{                      
                        height: '200px',
                        display: 'block',
                        position: 'absolute',
                        top: '60%',
                        transform: 'translateY(-60%) rotate(3deg)',
                        left: '-10px',
                        right: '-10px',
                        zIndex: '-1',
                        bg: '#EFD80A'

                    }}
                ></div>
            </Layout>
        

      
    )
}

export default IndexPage