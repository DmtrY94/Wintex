/** @jsx jsx */
import React, {useState} from "react"
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from "../components/particles/Layout"
import HeroUa from "../components/organisms/hero/HeroUa"
import SeoContentTextUa from "../components/molecules/SeoContentTextUa"
import ContentList from "../components/organisms/contentlist/ContentList"
import ContentNews from "../components/organisms/contentnews/ContentNews"
import { motion, AnimatePresence  } from "framer-motion"
import Screenfull from "screenfull-react"
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';



const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
        y: 30,
        opacity: 0
    },
    animate : {
        y: 0,
        opacity: 1,
        transition: {
            duration: .75,
            ease: easing
        } 
    }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const IndexPage = ( props ) => {

    const data = useStaticQuery(graphql`{
        wordpress {
            forChildrens(where: {language: UA, orderby: {field: MENU_ORDER, order: ASC}}) {
              nodes {
                title
                uri
                slug
                id
                language {
                    slug
                }
                PostTypeForChildrenFields {
                    time
                    age
                    school
                    flag  
                }
                featuredImage {
                    sourceUrl(size: LARGE)
                    altText
                    imageFile {
                        childImageSharp {
                            fluid(maxWidth: 2500) {
                                aspectRatio
                                base64
                                sizes
                                src
                                srcSet
                            }
                        }
                    }
                }
                categories {
                    nodes {
                      slug
                      name
                      id
                      uri
                    }
                }
              }
            }
        }
    }
`)


const [swiper, updateSwiper] = useState(null);
const goNext = () => {
  if (swiper !== null) {
    swiper.slideNext();
  }
};
const goPrev = () => {
  if (swiper !== null) {
    swiper.slidePrev();
  }
}

const params = {
    containerClass: 'container-swiper-list',
    spaceBetween: 40,
    slidesPerView: 5,
    mousewheel: true,
    breakpoints: {
      1920: {
        slidesPerView: 5,
        spaceBetween: 40
      },     
      1600: {
        slidesPerView: 5,
        spaceBetween: 40
      },  
      1280: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1060: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 25
      }
    }
  }

    
    return ( 
        <>          
        <Layout location={props.location}>   

                <HeroUa />


               
        <motion.div
            exit={{ opacity: 0 }}
            initial='initial'
            animate='animate'
        >     
                <div
                sx={{
                    borderTop: '2px solid rgba(0, 0, 0, 0.035)',
                }}
                >
                    <div
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingLeft: ['5.208vw', '20px', '5vh', '5.208vw'],
                            paddingRight: ['5.208vw', '20px', '5vh', '5.208vw'],
                            margin: '20px 0',
                        }}                    
                    >
                        <Styled.h3
                        sx={{
                            fontSize: ['1.0416vw', '20px', '20px', '1.0416vw']
                        }}
                        >
                        Актуальні програми
                        </Styled.h3>
                        
                    </div>
                <div>
                <motion.div variants={stagger} 
                    sx={{position: 'relative'}}
                >
               
                            <button 
                                onClick={goPrev}                               
                                sx={{
                                    position: 'absolute',                         
                                    top: '50%',
                                    width: ['2.6041vw','50px', '50px', '2.6041vw'],
                                    height: ['2.6041vw','50px', '50px', '2.6041vw'],
                                    borderRadius: '100%',
                                    transform: 'translateY(-50%)',
                                    left: ['7vh', '20px', '7vh'],
                                    border: 0,
                                    bg: 'primary',
                                    outline: 'none',
                                    color: 'white',
                                    display: ['flex', 'none', 'flex'],
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    padding: 0,
                                    zIndex: '7',
                                    boxShadow: '0px 10px 30px rgba(11,128,254,0.71)',
                                    willChange: 'box-shadow',
                                    transition: 'transform 0.25s ease-out, box-shadow 0.35s ease-out',
                                    ":focus": {
                                        background: 'linear-gradient(39.9deg, #0B6CFE 22.83%, #458FFF 79.5%)',
                                        boxShadow: '0px 10px 30px rgba(11, 128, 254, 0.71)',                                         
                                    },                                
                                    ":hover": {   
                                        background: 'linear-gradient(39.9deg, #0B6CFE 22.83%, #458FFF 79.5%)',                       
                                        boxShadow: '0px 10px 30px rgba(11, 128, 254, 0.71)',                
                                    }, 
                                    ":active": {
                                        transform: 'scale(.98)',
                                    }
                                }}
                            >
                                <span
                                    sx={{
                                        display: 'flex',
                                        transform: 'rotate(180deg)'
                                    }}
                                    >
                                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.633174 0.993821C0.24265 1.38435 0.24265 2.01751 0.633174 2.40803L5.89975 7.67461L0.633174 12.9412C0.24265 13.3317 0.24265 13.9649 0.633174 14.3554C1.0237 14.7459 1.65686 14.7459 2.04739 14.3554L8.02107 8.38172C8.4116 7.99119 8.4116 7.35803 8.02107 6.96751L2.04739 0.993821C1.65686 0.603297 1.0237 0.603297 0.633174 0.993821Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            </button>
                            <button 
                                onClick={goNext}
                                sx={{
                                    position: 'absolute',                         
                                    top: '50%',
                                    width: ['2.6041vw','50px', '50px', '2.6041vw'],
                                    height: ['2.6041vw','50px', '50px', '2.6041vw'],
                                    borderRadius: '100%',
                                    transform: 'translateY(-50%)',
                                    right: ['7vh', '20px', '7vh'],
                                    border: 0,
                                    bg: 'primary',
                                    outline: 'none',                      
                                    color: 'white',
                                    display: ['flex', 'none', 'flex'],
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    padding: 0,
                                    zIndex: '7',
                                    boxShadow: '0px 10px 30px rgba(11,128,254,0.71)',
                                    willChange: 'box-shadow',
                                    transition: 'transform 0.25s ease-out, box-shadow 0.35s ease-out',
                                    ":focus": {
                                        background: 'linear-gradient(39.9deg, #0B6CFE 22.83%, #458FFF 79.5%)',
                                        boxShadow: '0px 10px 30px rgba(11, 128, 254, 0.71)',                                         
                                    },                                
                                    ":hover": {   
                                        background: 'linear-gradient(39.9deg, #0B6CFE 22.83%, #458FFF 79.5%)',                       
                                        boxShadow: '0px 10px 30px rgba(11, 128, 254, 0.71)',                
                                    }, 
                                    ":active": {
                                        transform: 'scale(.98)',
                                    }
                                }}                          
                            >                           
                                <span
                                    sx={{
                                        display: 'flex',
                                        
                                    }}
                                    >
                                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.633174 0.993821C0.24265 1.38435 0.24265 2.01751 0.633174 2.40803L5.89975 7.67461L0.633174 12.9412C0.24265 13.3317 0.24265 13.9649 0.633174 14.3554C1.0237 14.7459 1.65686 14.7459 2.04739 14.3554L8.02107 8.38172C8.4116 7.99119 8.4116 7.35803 8.02107 6.96751L2.04739 0.993821C1.65686 0.603297 1.0237 0.603297 0.633174 0.993821Z" fill="currentColor"/>
                                    </svg>
                                </span>
                            </button>
                       
                    <Swiper 
                        getSwiper={updateSwiper}
                        sx={{
                            marginLeft: ['5.208vw', '30px', '5vh', '5.208vw'],
                            marginRight: ['calc(5.208vw - 4.5vh)', 'calc(30px - 4.5vh)', 'calc(5.208vw - 4.5vh)'],
                            marginBottom: '2vh',
                        }}
                        {...params}
                        >



                {data.wordpress.forChildrens.nodes.map(nodeua => (
                                
                                <div key={nodeua.id} ><ContentList {...nodeua} /></div>
                                
                                
                ))}

                </Swiper>
                                
                                </motion.div>
                                </div>
                            </div>  
                            </motion.div> 
             
  
               
               
                <ContentNews /> 
                <SeoContentTextUa />
            </Layout>
            <motion.div
                    initial={{ height: '100%' }}
                    animate={{ height: '70%' }} 
                    transition={{ duration: 0.7 }} 
                    sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '70%',
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

export default IndexPage