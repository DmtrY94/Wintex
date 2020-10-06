/** @jsx jsx */
import React from 'react'
import { graphql } from 'gatsby'
import { jsx, Styled } from 'theme-ui'
import Layout from '../components/particles/Layout'
import { motion } from "framer-motion"
import ButtonBack from '../components/molecules/ButtonBack'
import FluidImage from '../components/molecules/FluidImage'
import SEO from "../components/particles/SEO"

import './post.css'


const CreatePost = props => {

  const { content, title, seo, uri, slug, featuredImage } = props.pageContext

  return (
    <>
      <Layout location={props.location}>
        <SEO data={props.pageContext} /> 
        <motion.div
          exit={{ opacity: 0 }}
          initial='initial'
          animate='animate'
          sx={{
            marginTop: ['6vh', '8vh', '6vh'],
            marginBottom: '12vh',
            position: 'relative',
            height: '100%'
          }}
        >
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: ['75.3333vw', '600px', '800px', '75.3333vw',],
              marginRight: 'auto',
              marginLeft: 'auto',
              position: 'relative',
              
            }}
          >
              <div 
                      sx={{ 
                        marginBottom: '32px',
                        marginLeft: ['0', '20px', '0']                   
                      }}             
                    >
                <ButtonBack />         
              </div> 
            <div
              sx={{
                bg: 'white',
                borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                padding: ['2.0833vw', '20px', '20px', '2.0833vw'],
                width: '100%',
              }}
            >
                <div>
                  <h1
                    sx={{
                      fontFamily: 'heading',
                      fontWeight: '700',
                      fontSize: ['calc(12*0.25vw)', '2rem', '2rem', 'calc(12*0.25vw)'],
                      lineHeight: '1.125',
                      textTransform: 'uppercase',
                      color: 'black',
                      marginTop: '7px'
                  }}
                  >
                    {title}
                  </h1>
                </div>
                <div
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: ['1.0416vw', '20px', '20px', '1.0416vw'],
                    fontFamily: 'body',
                    fontWeight: '500'  
                  }}
                >
                </div>
                {( !featuredImage  ) ? (
                    <br/>
                ) : (
                <div
                  sx={{
                    marginTop: ['1.6666vw', '32px', '32px', '1.6666vw'],
                    position: 'relative',
                    borderRadius: '10px',
                    overflow: 'hidden',
                      ' &:before ' : {
                        content: '""',
                        paddingBottom: ['38.66%', '56.66%', '66.66%', '36.66%',],
                        display: 'table'
                      },
                  }}
                >
                  <FluidImage                           
                    image={featuredImage} 
                      sx={{
                        position: 'absolute !important',
                        left: '0',
                        right: '0',
                        top: '0',
                        bottom: '0',
                        zIndex: '1',
                          ' &:before ' : {
                            content: '""',
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            background: 'linear-gradient(3.01deg, #000000 -42.6%, rgba(0, 0, 0, 0) 66.89%)',
                            zIndex: '2'
                          },
                      }}
                  />   
                                
                </div>
                )} 
                <div
                  sx={{
                    marginTop: ['1.6666vw', '32px', '32px', '1.6666vw'],
                    fontFamily: 'body',
                    fontSize: ['0.9375vw', '18px', '18px', '0.9375vw'],
                    lineHeight: '1.66'
                  }}
                >
                  <div className="content-post" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>

            
          </div>

          
        </motion.div>
      </Layout>
      <motion.div
        initial={{ height: '100%' }}
        animate={{ height: '45%' }} 
        transition={{ duration: 0.7 }} 
        sx={{
          position: 'absolute',
          width: '100%',
          height: '45%',
          background: 'linear-gradient(354.04deg, #8FD300 33.78%, #00B707 96.12%)',
          left: 0,
          top: ['-3.7em', '-5.7em', '-5.7em' ],
          zIndex: '0',
          transform: 'skewY(-15deg)',
          display: ['none', 'block', 'none']
        }}
      />
    </>    
  )
}

export default CreatePost
