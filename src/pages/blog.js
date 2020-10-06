/** @jsx jsx */
import React, {useState} from "react"
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import moment from "moment/moment"
import 'moment/locale/pt-br'
import { graphql, useStaticQuery } from 'gatsby'
import FluidImage from '../components/molecules/FluidImage'
import Layout from "../components/particles/Layout"
import { motion  } from "framer-motion"
import SEO from "../components/particles/SEO"
import ButtonBack from '../components/molecules/ButtonBack'

import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';

const Blog = ( props ) => {

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
        slidesPerView: 3,
        mousewheel: true,
        breakpoints: {
          1920: {
            slidesPerView: 3,
            spaceBetween: 40
          },     
          1600: {
            slidesPerView: 3,
            spaceBetween: 40
          },  
          1280: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1160: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 25
          }
        }
      }

    const data = useStaticQuery(graphql`{
        wordpress {
            pageBy(uri: "blogs") {
                id
                title
                uri
                slug
                content
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
            blogs(where: {language: DEFAULT}) {
              nodes {
                title
                uri
                id
                date
                content
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
              }
            }
        }
    }
`)
    if (!data.wordpress.blogs.nodes.length) {
        return (
            <Layout location={props.location}>
                <SEO data={data.wordpress.pageBy} /> 
                <div     
                    sx={{
                    marginTop: ['3.1468vw', '6vh', '6vh', '3.1468vw'],
                    position: 'relative',
                    height: '100%'
                    }}
                >
                    <div
                        sx={{
                            borderBottom: '2px solid rgba(0, 0, 0, 0.035)',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            padding: ['0 5.208vw', '0 20px', '0 5vh', '0 5.208vw'],
                            zIndex: '2',
                            position: 'relative'
                        }}
                    >  
                    <div sx={{ marginTop: '0.67vw'  }}>    
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
                </div>
            </Layout>
        )
    }
    
   
    return (
        <>
        <Layout location={props.location}>
            <SEO data={data.wordpress.pageBy} /> 
            <div     
                sx={{
                marginTop: ['3.1468vw', '6vh', '6vh', '3.1468vw'],
                position: 'relative',
                height: '100%'
                }}
            >
                <div
                sx={{
                    borderBottom: '2px solid rgba(0, 0, 0, 0.035)',
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
                    dangerouslySetInnerHTML={{ __html: data.wordpress.pageBy.title }} />
                     
                </div>



                <div 
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

                                {data.wordpress.blogs.nodes.map((node) => {

                                const featuredImage = node.featuredImage     
                                
                                return (
                                <div 
                                
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative',
                                        borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                                        bg: 'white',
                                        position: 'relative'
                                    }}                        
                                    
                                >
                                    <Link
                                        to={`/${node.uri}`}
                                        sx={{
                                            padding: ['2.0833vw', '20px', '20px', '2.0833vw'],
                                        }}
                                    >
                                    <div
                                        sx={{
                                            position: 'relative',
                                            borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                                            overflow: 'hidden',
                                            ' &:before ' : {
                                                content: '""',
                                                paddingBottom: '66.66%',
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
                                    <div
                                        sx={{
                                            display: 'block',
                                            marginTop: '20px',
                                            fontFamily: 'body',
                                            fontWeight: '500',
                                            fontSize: ['0.9375vw', '18px', '18px', '0.9375vw'],
                                            color: '#A1B1C8'
                                        }}
                                    >
                                        {moment(node.date).format(`DD.MM.YYYY`)}
                                    </div>
                                    <div
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            fontFamily: 'heading',
                                            fontWeight: '700',
                                            fontSize: ['0.9375vw', '1rem', '1rem', '0.9375vw'],
                                            textTransform: 'uppercase',
                                            color: 'black',
                                            marginTop: '7px',                                                                                
                                            ":hover": {                                       
                                                color: 'primary',                       
                                            },  
                                            ":hover>span": {                                       
                                                transform: 'rotate(-90deg) translateX(5px)'                       
                                            },
                                        }}
                                    >
                                        <div dangerouslySetInnerHTML={{ __html: node.title }} />                                     
                                        <span
                                                sx={{
                                                    transform: 'rotate(-45deg)',
                                                    willChange: "transform",
                                                    transition: "transform 0.25s ease-out",
                                                }}
                                            >
                                                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M21.6568 10.0711L13.2928 1.70706L14.707 0.292847L23.8492 9.43498L23.2132 10.0709L23.8493 10.707L14.7072 19.8491L13.293 18.4349L21.6568 10.0711ZM18 11H0V9H18V11Z" fill="#0B6CFE"/>
                                                </svg>
                                        </span>
                                    </div>
                                    </Link>
                                </div>
                                )
                                
                                })}


                </Swiper>
                
            </div>      

            </div>

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

    export default Blog