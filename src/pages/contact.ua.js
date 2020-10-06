/** @jsx jsx */
import React, {useState} from "react"
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'
import { motion } from "framer-motion"
import Layout from "../components/particles/Layout"
import GoogleMaps from '../components/organisms/googlemaps/GoogleMaps'
import GoogleMapsK from '../components/organisms/googlemaps/GoogleMapsK'
import ButtonBack from '../components/molecules/ButtonBack'

import SEO from "../components/particles/SEO"
import Man from "../images/london_man.svg"

const Contact = ({ location }) => {
  const [menuOpen, toggleMenu] = useState(false)

  const data = useStaticQuery(graphql`{
    wordpress {
        pageBy(id: "cGFnZToyODY=") {
          id
          title
          slug
          PageContactsUa {
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
            opengraphImage {
              sourceUrl(size: LARGE)
              id
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
            }
          }
          language {
            slug
          }
        }
      }
  }
`)


    return (

        <>
        <Layout location={location}>
          <SEO data={data.wordpress.pageBy} /> 
             <div
                sx={{
                marginTop: ['3.1468vw', '6vh', '6vh', '3.1468vw'],
                
                height: '100%'
                }}
                >
                <div
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: ['0 5.208vw', '0 20px', '0 5vh', '0 5.208vw'],
                    zIndex: '2',
                    position: 'relative'
                  }}
                >
                  <div sx={{ marginTop: ['0.67vw', '1.05vw', '0.67vw' ]  }}>  
                    <ButtonBack />   
                  </div>
                  <Styled.h1
                      sx={{
                        color: 'white',
                        marginBottom: '4.51vh',               
                        textTransform: 'uppercase',
                        fontSize: ['calc(16*0.25vw)', '1.75rem', 'calc(16*0.25vw)'],
                      }}
                    >
                      {data.wordpress.pageBy.title}
                    </Styled.h1>
                    
                </div>
                

                     
                        <div
                        sx={{
                            paddingTop: [0, '20px', 0],

                        }}
                    >                      
                        <div
                           sx={{
                            padding: ['0 5.208vw', '0 20px', '0 5vh', '0 5.208vw'],
                            position: 'relative',
                            width: ['60%', '100%', '60%'],                        
                            zIndex: '2',
                          }}
                        >                        

                          <div
                            sx={{
                              position: 'relative',
                              display: 'block',
                              color: 'white',
                              fontFamily: 'heading',
                              bg: ['rgba(255, 255, 255, 0.1)', 'primary', 'rgba(255, 255, 255, 0.1)'],
                              borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                              overflow: 'hidden',
                              padding: ['1.5625vw', '20px', '20px', '1.5625vw'],
                              marginBottom: ['1.5625vw', '20px', '20px', '1.5625vw'],
                            }}
                          >
                            <div
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderBottom: '2px solid rgba(0, 0, 0, 0.035)',
                                paddingBottom: '10px'
                              }}
                            >
                              <h3
                                sx={{
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: ['calc(5.25*0.25vw)', '1.5rem', 'calc(5.25*0.25vw)'],
                                }}
                              >Київ</h3>
                               <span onClick={() => toggleMenu(!menuOpen)} className={!menuOpen ? `map--show` : undefined}
                                sx={{
                                  fontFamily: 'body',
                                  fontSize: ['0.625vw', '12px', '12px', '0.625vw'],
                                  border: '1px solid #fff',
                                  padding: ['0.2604vw 0.5208vw', '5px 10px', '5px 10px', '0.2604vw 0.5208vw'],
                                  borderRadius: '32px',
                                  cursor: 'pointer',
                                }}
                               >
                                  на мапі
                                </span>
                            </div>
                            <div
                              sx={{
                                marginTop: ['1.5625vw', '20px', '20px', '1.5625vw'],
                                fontFamily: 'body',
                                fontWeight: '300',
                                fontSize: ['calc(3.7*0.25vw)', '1.2rem', 'calc(5.7*0.25vw)', 'calc(4.7*0.25vw)', 'calc(3.7*0.25vw)']
                              }}
                            >{data.wordpress.pageBy.PageContactsUa.addressk}</div>
                            <div
                              sx={{
                                display: 'flex',
                                marginTop: ['0.7812vw', '15px', '15px', '0.7812vw'],
                                alignItems: 'center',
                                "@media screen and (max-width: 768px)": {
                                  flexDirection: 'column',
                                  alignItems: 'stretch'
                                },
                              }}
                            >
                              <a href={`tel:${data.wordpress.pageBy.PageContactsUa.phonek1}`}
                                sx={{                        
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: ['calc(4.5*0.25vw)', '1.5rem', 'calc(6.7*0.25vw)', 'calc(5.7*0.25vw)', 'calc(4.5*0.25vw)'],
                                  padding: ['0.2604vw 0.5208vw', '5px 10px', '5px 10px', '0.2604vw 0.5208vw'],
                                  borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                                  bg: 'rgba(255, 255, 255, 0.2)',
                                  color: 'white',
                                  marginRight: ['0.7812vw', '15px', '15px', '0.7812vw'],
                                  "@media screen and (max-width: 768px)": {
                                    marginBottom: '15px',
                                    marginRight: 0,
                                  },
                                }}
                              >{data.wordpress.pageBy.PageContactsUa.phonek1}</a>
                              <a 
                                sx={{                        
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: ['calc(4.5*0.25vw)', '1.5rem', 'calc(6.7*0.25vw)', 'calc(5.7*0.25vw)', 'calc(4.5*0.25vw)'],
                                  padding: ['0.2604vw 0.5208vw', '5px 10px', '5px 10px', '0.2604vw 0.5208vw'],
                                  borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                                  bg: 'rgba(255, 255, 255, 0.2)',
                                  color: 'white'
                                }}
                              href={`tel:${data.wordpress.pageBy.PageContactsUa.phonek2}`}>{data.wordpress.pageBy.PageContactsUa.phonek2}</a>
                            </div>
                          </div>
                          <div
                            sx={{
                              position: 'relative',
                              display: 'block',
                              color: ['white', '#0D2344', 'white'],
                              fontFamily: 'heading',
                              bg: ['rgba(255, 255, 255, 0.1)', 'white', 'rgba(255, 255, 255, 0.1)'],
                              borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                              overflow: 'hidden',
                              padding: ['1.5625vw', '20px', '20px', '1.5625vw'],
                            }}
                          >
                            <div
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderBottom: '2px solid rgba(0, 0, 0, 0.035)',
                                paddingBottom: ['0.5208vw', '10px', '10px', '0.5208vw'],
                              }}
                            >
                              <h3
                                sx={{
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: ['calc(5.25*0.25vw)', '1.5rem', 'calc(5.25*0.25vw)'],
                                }}
                              >Кривий Ріг</h3>
                              <span onClick={() => toggleMenu(!menuOpen)}  className={menuOpen ? `map--show` : undefined}
                                sx={{
                                  fontFamily: 'body',
                                  fontSize: ['0.625vw', '12px', '12px', '0.625vw'],
                                  border: '1px solid #fff',
                                  padding: ['0.2604vw 0.5208vw', '5px 10px', '5px 10px', '0.2604vw 0.5208vw'],
                                  borderRadius: '32px',
                                  cursor: 'pointer',
                                }}
                              >на мапі</span>
                            </div>
                            <div
                              sx={{
                                marginTop: ['1.5625vw', '20px', '20px', '1.5625vw'],
                                fontFamily: 'body',
                                fontWeight: '300',
                                fontSize: ['calc(3.7*0.25vw)', '1.2rem', 'calc(5.7*0.25vw)', 'calc(4.7*0.25vw)', 'calc(3.7*0.25vw)']
                              }}
                            >{data.wordpress.pageBy.PageContactsUa.addresskr}</div>
                            <div
                              sx={{
                                display: 'flex',
                                marginTop: ['0.7812vw', '15px', '15px', '0.7812vw'],
                                alignItems: 'center',
                                "@media screen and (max-width: 768px)": {
                                  flexDirection: 'column',
                                  alignItems: 'stretch'
                                },
                              }}
                            >
                              <a href={`tel:${data.wordpress.pageBy.PageContactsUa.phonekr1}`}
                                sx={{                        
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: ['calc(4.5*0.25vw)', '1.5rem', 'calc(6.7*0.25vw)', 'calc(5.7*0.25vw)', 'calc(4.5*0.25vw)'],
                                  padding: ['0.2604vw 0.5208vw', '5px 10px', '5px 10px', '0.2604vw 0.5208vw'],
                                  borderRadius: '10px',
                                  bg: 'rgba(255, 255, 255, 0.2)',
                                  color: 'white',
                                  marginRight: '0.7812vw',
                                  "@media screen and (max-width: 768px)": {
                                    marginBottom: '15px',
                                    marginRight: 0,
                                    bg: 'rgba(11, 108, 254, 0.05)',
                                    color: '#0D2344',
                                  },
                                }}
                              >{data.wordpress.pageBy.PageContactsUa.phonekr1}</a>
                              <a 
                                sx={{                        
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: ['calc(4.5*0.25vw)', '1.5rem', 'calc(6.7*0.25vw)', 'calc(5.7*0.25vw)', 'calc(4.5*0.25vw)'],
                                  padding: ['0.2604vw 0.5208vw', '5px 10px', '5px 10px', '0.2604vw 0.5208vw'],
                                  borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                                  bg: ['rgba(255, 255, 255, 0.2)', 'rgba(11, 108, 254, 0.05)', 'rgba(255, 255, 255, 0.2)'],
                                  color: ['white', '#0D2344', 'white'],
                                }}
                              href={`tel:${data.wordpress.pageBy.PageContactsUa.phonekr2}`}>{data.wordpress.pageBy.PageContactsUa.phonekr2}</a>
                            </div>
                          </div>
                          <div
                              sx={{
                                display: 'block',                              
                                marginTop: ['1.5625vw', '20px', '20px', '1.5625vw'],
                                color: ['white', '#0d2344', 'white'],
                                fontFamily: 'heading',
                              }}
                            >                           
                              <h3
                                sx={{
                                  textTransform: 'uppercase',
                                  fontWeight: '300',
                                  fontSize: ['calc(5.5*0.25vw)', '1.5rem', 'calc(5.5*0.25vw)'],
                                }}
                              >Ми працюємо</h3>
                              <div
                                sx={{
                                  textTransform: 'uppercase',
                                  fontWeight: '500',
                                  fontSize: ['calc(7.5*0.25vw)', '1.8rem', 'calc(7.5*0.25vw)'],
                                }}
                              >{data.wordpress.pageBy.PageContactsUa.work}</div>
                          </div>                         
                            
                            

                        </div>
                        <motion.div
                            initial={{  y: 260, opacity: 0}}
                            animate={{  y: 0, opacity: 1}}               
                            transition={{ duration: 3, delay: 3.8 }}  
                            sx={{
                              width: '11.4583vw',
                              height: '19vw',
                              position: 'absolute',
                              bottom: '1.3458vw',
                              left: '33.4895vw',
                              zIndex: '2',
                              "@media screen and (max-width: 768px)": {
                                bottom: '49.212vh',
                                left: '73.4895vw',
                                zIndex: '0',
                                width: '58px',
                                height: '71px'
                              },
                            }}
                          ><Man />
                        </motion.div>
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
                            width: '50%',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            height: '100%',
                            zIndex: 0,
                            "@media screen and (max-width: 768px)": {
                              width:  '100%', 
                              position: 'relative', 
                              padding: '30px 20px'
                            },
                          }}
                        > 
                         {(!menuOpen) ? (
                            <GoogleMapsK />
                          ) : (
                            <GoogleMaps />
                          )}    
                        </motion.div>  

                    </div>  
                   
                
            </div>
         
        </Layout>
        <motion.div
          initial={{ height: '100%' }}
          animate={{ height: '88%' }} 
          transition={{ duration: 0.7 }} 
          sx={{
          position: 'absolute',
          width: '100%',
          height: '88%',
          background: 'linear-gradient(354.04deg, #8FD300 33.78%, #00B707 96.12%)',
          left: 0,
          top: ['-3.7em', '-5.7em', '-5.7em' ],
          zIndex: '0',
          transform: 'skewY(-15deg)',
          display: ['none', 'block', 'none']
          }}
        >     
        </motion.div>
        </>

    )
}
export default Contact

