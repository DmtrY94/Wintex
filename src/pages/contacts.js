/** @jsx jsx */
import React from "react"
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'
import { motion } from "framer-motion"
import Layout from "../components/particles/Layout"
import GoogleMaps from '../components/organisms/googlemaps/GoogleMaps'
import Helmet from "react-helmet"

import SEO from "../components/particles/SEO"


const Contact = () => {
  const data = useStaticQuery(graphql`{
    wordpress {
        pageBy(uri: "contact") {
          id
          title
          PageContacts {
            addressk
            addresskr
            emailkr
            fieldGroupName
            phonek1
            phonek2
            phonekr1
            phonekr2
            work
          }
          seo {
            title
            focuskw
            metaDesc
            metaKeywords
            opengraphDescription
            opengraphTitle
            twitterDescription            
            twitterTitle
          }
        }
      }
  }
`)


    return (

          
        <Layout>
          <SEO data={data.wordpress.pageBy} /> 
             <div
                sx={{
                marginTop: '6vh',
                
                height: '100%'
                }}
                >
                
                <Styled.h1
                    sx={{
                    position: 'relative',
                    color: 'white',
                    paddingLeft: ['10vh', '30px', '5vh', '10vh'],
                    margin: '15px 0',
                    marginBottom: '4.51vh',
                    fontSize: ['calc(16*0.25vw)', '1.75rem', 'calc(16*0.25vw)'],
                    textTransform: 'uppercase',
                    zIndex: '2'
                    }}
                >{data.wordpress.pageBy.title}</Styled.h1>
                
                

                     
                        <div
                        sx={{
                            marginTop: '4vh',
                            borderTop: '2px solid rgba(0, 0, 0, 0.035)'
                        }}
                    >                      
                        <div
                           sx={{
                            padding: ['0 10vh', '0 30px', '0 5vh', '0 10vh'],
                            position: 'relative',
                            width: ['60%', '100%', '60%'],                        
                            zIndex: '2',
                            marginTop: '30px'
                          }}
                        >
                        
                          
                            
                          <div
                            sx={{
                              position: 'relative',
                              display: 'block',
                              color: 'white',
                              fontFamily: 'heading',
                              bg: 'rgba(255, 255, 255, 0.1)',
                              borderRadius: '10px',
                              overflow: 'hidden',
                              padding: '30px'
                            }}
                          >
                            <div
                              sx={{
                                display: 'block',
                                borderBottom: '2px solid rgba(0, 0, 0, 0.035)',
                                paddingBottom: '10px'
                              }}
                            >
                              <span></span>
                              <h3
                                sx={{
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: ['calc(5.25*0.25vw)', '1.5rem', 'calc(5.25*0.25vw)'],
                                }}
                              >Кривий Ріг</h3>
                            </div>
                            <div
                              sx={{
                                marginTop: '20px',
                                textTransform: 'uppercase',
                                fontWeight: '300',
                                fontSize: '2rem'
                              }}
                            >{data.wordpress.pageBy.PageContacts.addresskr}</div>
                            <div
                              sx={{
                                display: 'flex',
                                marginTop: '15px',
                                alignItems: 'center'
                              }}
                            >
                              <a href="#"
                                sx={{                        
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: '1.5rem',
                                  padding: '5px 10px',
                                  borderRadius: '10px',
                                  bg: 'rgba(255, 255, 255, 0.2)',
                                  color: 'white',
                                  marginRight: '15px'
                                }}
                              >{data.wordpress.pageBy.PageContacts.phonekr1}</a>
                              <a 
                                sx={{                        
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: '1.5rem',
                                  padding: '5px 10px',
                                  borderRadius: '10px',
                                  bg: 'rgba(255, 255, 255, 0.2)',
                                  color: 'white'
                                }}
                              href="#">{data.wordpress.pageBy.PageContacts.phonekr2}</a>
                            </div>
                          </div>

                          <div
                            sx={{
                              position: 'relative',
                              display: 'block',
                              color: 'white',
                              fontFamily: 'heading',
                              bg: 'rgba(255, 255, 255, 0.1)',
                              borderRadius: '10px',
                              overflow: 'hidden',
                              padding: '30px',
                              marginTop: '30px'
                            }}
                          >
                            <div
                              sx={{
                                display: 'block',
                                borderBottom: '2px solid rgba(0, 0, 0, 0.035)',
                                paddingBottom: '10px'
                              }}
                            >
                              <span></span>
                              <h3
                                sx={{
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: '1.5rem'
                                }}
                              >Київ</h3>
                            </div>
                            <div
                              sx={{
                                marginTop: '20px',
                                textTransform: 'uppercase',
                                fontWeight: '300',
                                fontSize: '2rem'
                              }}
                            >{data.wordpress.pageBy.PageContacts.addressk}</div>
                            <div
                              sx={{
                                display: 'flex',
                                marginTop: '30px',
                                alignItems: 'center'
                              }}
                            >
                              <a href="#"
                                sx={{                        
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: '1.5rem',
                                  padding: '5px 10px',
                                  borderRadius: '10px',
                                  bg: 'rgba(255, 255, 255, 0.2)',
                                  color: 'white',
                                  marginRight: '15px'
                                }}
                              >{data.wordpress.pageBy.PageContacts.phonek1}</a>
                              <a 
                                sx={{                        
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: '1.5rem',
                                  padding: '5px 10px',
                                  borderRadius: '10px',
                                  bg: 'rgba(255, 255, 255, 0.2)',
                                  color: 'white'
                                }}
                              href="#">{data.wordpress.pageBy.PageContacts.phonek2}</a>
                            </div>
                          </div>
                          <div
                              sx={{
                                display: 'block',                              
                                marginTop: '30px',
                                color: 'white',
                                fontFamily: 'heading',
                              }}
                            >                           
                              <h3
                                sx={{
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: '1.5rem'
                                }}
                              >Ми працюємо</h3>
                              <div
                                sx={{
                                  textTransform: 'uppercase',
                                  fontWeight: '400',
                                  fontSize: '2rem'
                                }}
                              >{data.wordpress.pageBy.PageContacts.work}</div>
                            </div>                         
                            
                            

                        </div>
                        <motion.div
                              initial={{  opacity: 0}}
                              animate={{  opacity: 1}} 
                              transition={{ delay: 2.8 }} 
                              sx={{
                                position: 'absolute',
                                width: '60%',
                                height: '100%',
                                background: 'linear-gradient(225.35deg, #8FD300 27.55%, #00B707 95.85%)',
                                left: '-3.3em',
                                top: 0,
                                bottom: 0,
                                zIndex: '1',
                                transform: 'skew(6deg)',
                                display: ['block', 'none', 'block']
                              }}
                            ></motion.div>
                        <motion.div
                          initial={{ opacity: 0,}}
                          animate={{ opacity: 1,}} 
                          transition={{ delay: 3, duration: 2}} 
                          sx={{
                            width: ['50%', '100%', '50%'],
                            position: ['absolute', 'relative', 'absolute'],
                            top: 0,
                            right: 0,
                            bottom: 0,
                            height: '100%',
                            zIndex: 0,
                          }}
                        >
                          <GoogleMaps />
                        </motion.div>                        
                    </div>  
                   
                
            </div>
         
        </Layout>
    )
}
export default Contact

