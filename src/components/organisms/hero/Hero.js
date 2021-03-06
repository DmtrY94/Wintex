/** @jsx jsx */
import React from "react"
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import Sticker from "../../molecules/Sticker"
import FormModal from '../../modals/FormModal'
import { motion  } from "framer-motion"
import SEO from "../../particles/SEO"

import Rover from "../../../images/rover.svg"

function MainMenu() {
    return null;
}

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const Hero = ({location}) => {
  const data = useStaticQuery(graphql`{
    wordpress {
      pageBy(uri: "main") {
        id
        title
        uri
        slug
        PageMain {
          bigtitle
          descr
          textcircle
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
        <div
          sx={{
            position: 'relative',
            marginTop: '1.0786vw',
            "@media screen and (max-width: 768px)": {
                marginTop: '4.5vh',
                marginLeft: '20px',
                marginRight: '20px',
            },
          }}
        >
            <SEO data={data.wordpress.pageBy} location={location} />   
            <MainMenu />
                <div sx={{
                   display: 'block',
                   padding: ['0 5.208vw', 0, '0 5vh', '0 5.208vw']
                }}>
                  <div sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'relative',
                    justifyContent: 'space-between'
                  }}>
                   
                    <h1                  
                    sx={{
                      display: ['block', 'none', 'block'],
                      textTransform: 'uppercase',
                      color: 'white',
                      textShadow: '0px 4px 47px rgba(138, 138, 138, 0.3)',
                      margin: 0,
                      fontSize: 'calc(16*0.25vw)',
                      fontFamily: 'heading',
                      zIndex: 2,
                      
                    }}
                    dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.bigtitle }} >
                    </h1>                
                    <h1
                      sx={{
                        display: ['none', 'block', 'none'],
                        textTransform: 'uppercase',
                        color: 'white',
                        margin: 0,
                        fontSize: '1.55rem', 
                        fontFamily: 'heading',
                        zIndex: 2,
                        
                      }}
                    >Обучение<br/>и стажировка<br/>за границей</h1>  
                                
                    <Sticker lang={data.wordpress.pageBy.language.slug}/>
                  </div>
                  <div sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: ['2.15vh', '3.15vh', '2.15vh'],
                    alignItems: 'center',
                    paddingBottom: '4vh',
                    borderBottom: '2px solid #0b6cfe'                
                  }}>
                    <div                 
                    sx={{
                      width: ['41%', '57%', '67%', '43%', '43%', '41%'],   
                      display: ['none', 'none', 'none', 'flex', 'flex'],
                      flexDirection: 'row',
                      alignItems: 'flex-start'                      
                    }}
                    >
                      <div
                        sx={{ display: 'flex', marginRight: '10px' }}
                      >
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.47998 13.9201C0.47998 9.60006 1.09331 6.32006 2.31998 4.08006C3.54665 1.84006 5.57331 0.666727 8.39998 0.560059L9.91998 3.68006C8.31998 3.84006 7.19998 4.61339 6.55998 6.00006C5.91998 7.38673 5.59998 9.62673 5.59998 12.7201H9.83998V21.6801H0.47998V13.9201ZM14.56 13.9201C14.56 9.60006 15.1733 6.32006 16.4 4.08006C17.6266 1.84006 19.6533 0.666727 22.48 0.560059L24 3.68006C22.4 3.84006 21.28 4.61339 20.64 6.00006C20 7.38673 19.68 9.62673 19.68 12.7201H23.92V21.6801H14.56V13.9201Z" fill="white"/>
                        </svg>
                      </div>
                      <div
                        
                        className="intex-text-descr"
                        sx={{
                          border: '2px solid #fff',
                          padding: '10px 15px',
                          position: 'relative',
                          transform: 'rotate(1.1deg)'  
                        }}
                      >
                        <div                        
                          sx={{
                            fontFamily: 'heading',  
                            textTransform: 'uppercase',                     
                            color: 'white',
                            fontWeight: '400',
                            fontSize: ['calc(3.5*0.25vw)', 'calc(3.5*0.25vw)', 'calc(5.5*0.25vw)', 'calc(4.5*0.25vw)', 'calc(3.5*0.25vw)']
                                                    
                          }}
                          dangerouslySetInnerHTML={{  __html: data.wordpress.pageBy.PageMain.descr }}
                        />
                        
                      </div>
                      <div
                        sx={{ display: 'flex', transform: 'rotate(180deg)', marginLeft: '10px' }}
                      >
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.47998 13.9201C0.47998 9.60006 1.09331 6.32006 2.31998 4.08006C3.54665 1.84006 5.57331 0.666727 8.39998 0.560059L9.91998 3.68006C8.31998 3.84006 7.19998 4.61339 6.55998 6.00006C5.91998 7.38673 5.59998 9.62673 5.59998 12.7201H9.83998V21.6801H0.47998V13.9201ZM14.56 13.9201C14.56 9.60006 15.1733 6.32006 16.4 4.08006C17.6266 1.84006 19.6533 0.666727 22.48 0.560059L24 3.68006C22.4 3.84006 21.28 4.61339 20.64 6.00006C20 7.38673 19.68 9.62673 19.68 12.7201H23.92V21.6801H14.56V13.9201Z" fill="white"/>
                        </svg>
                      </div>                   
                    </div>
                    <div
                      sx={{
                        paddingLeft: ['4.75vh', '0', '0', '4.75vh', '4.75vh' ],
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        zIndex: '2'
                      }}
                    >
                      <FormModal />
                      <Link to="/pro-nas">
                      <button
                        sx={{
                          bg: 'white',  
                          border: 0,                                          
                          borderRadius: '100px',
                          padding: ['0.9375vw 1.40625vw', '18px 27px', '18px 27px', '0.9375vw 1.40625vw'],
                          fontFamily: '"Oswald", sans-serif',
                          textTransform: 'uppercase',
                          color: 'primary',
                          fontSize: ['0.833vw', '16px', '16px', '0.833vw'],
                          fontWeight: '700',                       
                          cursor: 'pointer',
                          outline: 'none',
                          display: 'flex',
                          alignItems: 'center',                        
                          marginLeft: ['1.7em', 0, '1.7em'],
                          willChange: 'transform',
                          transition: 'transform 0.2s ease-out, box-shadow 0.35s ease-out',
                          ":focus": {
                              transform: 'scale(1.07)',   
                          },                                
                          ":hover": {   
                              transform: 'scale(1.07)',                 
                          }, 
                          ":active": {
                              transform: 'scale(.94)',
                          }             
                          
                        }}
                      >
                        <FormattedMessage id="buttonpronas" />
                        <span
                          sx={{
                            display: 'flex',
                            marginLeft: '12px'
                          }}
                        >
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.633174 0.993821C0.24265 1.38435 0.24265 2.01751 0.633174 2.40803L5.89975 7.67461L0.633174 12.9412C0.24265 13.3317 0.24265 13.9649 0.633174 14.3554C1.0237 14.7459 1.65686 14.7459 2.04739 14.3554L8.02107 8.38172C8.4116 7.99119 8.4116 7.35803 8.02107 6.96751L2.04739 0.993821C1.65686 0.603297 1.0237 0.603297 0.633174 0.993821Z" fill="currentColor"/>
                        </svg>
                        </span>
                      </button>
                      </Link>
                    </div>
                    
                  </div>

                </div>
             
                
            <motion.div
                 initial={{  x: -2160}}
                 animate={{  x: 0}}               
                 transition={{ duration: 3, delay: 1.6 }}    
              sx={{
                position: 'absolute',              
                bottom:  '-3px',
                right: ['10vh', 0, '10vh'],
                zIndex: '1'
              }}
            >
              
              <Rover 
                sx={{
                  width: ['13.3854vw', '140px', '13.3854vw'],
                  height: ['11.3541vw', '118px', '11.3541vw']
                }}
              />
            </motion.div>
        </div> 
    )
}
export default Hero

