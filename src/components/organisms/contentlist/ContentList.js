/** @jsx jsx */
import React, {useState} from 'react'
import { Link } from 'gatsby'
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from "gatsby"
import FluidImage from '../../molecules/FluidImage'
import { motion, AnimatePresence  } from "framer-motion"
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';
import "./contentlist.css"



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






const ContentList = () => {

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
            slidesPerView: 4,
            spaceBetween: 40
          },  
          1280: {
            slidesPerView: 3,
            spaceBetween: 40
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
            spaceBetween: 15
          }
        }
      }
   

    

    const data = useStaticQuery(graphql`{
        wordpress {
            forChildrens(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
              nodes {
                title
                uri
                id
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
                    }
                }
              }
            }
        }
    }
`)


    

    return (
        <AnimatePresence>
        <motion.div
            exit={{ opacity: 0 }}
            initial='initial'
            animate='animate'
        >     
                <div
                sx={{
                    marginTop: '3vh',
                    borderTop: '2px solid rgba(0, 0, 0, 0.035)',
                }}
                >
                    
                        <Styled.h3
                        sx={{
                            paddingLeft: ['10vh', '30px', '5vh', '10vh'],
                            margin: '20px 0'
                        }}
                        >
                        Актуальні програми
                        </Styled.h3>
                        
               
                <div>
                <motion.div variants={stagger} >
                    
                    <Swiper 
                        sx={{
                            marginLeft: ['10vh', '30px', '5vh', '10vh'],
                            marginRight: ['calc(10vh - 4.5vh)', 'calc(30px - 4.5vh)', 'calc(10vh - 4.5vh)'],
                            marginBottom: '2vh',
                        }}
                    {...params}>

                        {data.wordpress.forChildrens.nodes.map((node) => {

                            const featuredImage = node.featuredImage                       
                            const categories = node.categories


                            return (

                                

                                <motion.div 
                              


                                    variants={fadeInUp}                                  
                                    className="Block" key={node.id}
                                    whileHover={{ y: -20 }}
                                    whileTap={{ scale: 1.1, zIndex: 999, }}
                                sx={{
                                    zIndex: 10,                                  
                                    willChange: "transform",
                                    transition: "transform 0.25s ease-out",
                                    outline: 'none',
                                    ":focus": {
                                        transform: "translateY(-10px) scale(1.04)",
                                    },                                
                                    ":hover": {
                                        transform: "translateY(-10px) scale(1.04)",                     
                                    },                                                                                              
                                }}


                                >
                                    
                                    
                                    
                                    
                                    
                                        

                                    <div  
                                    
                                    

                                    sx={{
                                        cursor: 'grab',                                     
                                        height: ['25vh', '30vh', '25vh'],                       
                                        backgroundSize: 'cover',
                                        position: 'relative',
                                        borderRadius: '8px',
                                        bg: 'background',                                    
                                        boxShadow: '0px 14px 25px rgba(0, 41, 102, 0.3)',
                                        display: 'flex',
                                        flexDirection: 'column',                                     
                                        overflow: 'hidden',
                                        zIndex: '3',
                                        willChange: "box-shadow",
                                        transition: "box-shadow 0.25s ease-out",                                      
                                        ":hover": {                                       
                                            boxShadow: '0px 14px 25px rgba(0, 41, 102, 0.4)',                                                                  
                                        },                                                                         
                                    }}                               
                                    >
                                        
                                        <motion.div
                                            initial={{ scale: 1.3 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.4 }}
                                            sx={{
                                                position: 'absolute !important',
                                                left: '0',
                                                right: '0',
                                                top: '0',
                                                bottom: '0',
                                                zIndex: '1',
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
                                        </motion.div> 
                                                                     
                                        <div
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                padding: '18px',
                                                zIndex: '2',
                                                alignItems: 'center'
                                            }}
                                        >
                                        <div
                                                sx={{
                                                    fontFamily: 'heading',
                                                    fontWeight: '400',
                                                    textTransform: 'uppercase',
                                                    fontSize: 12,
                                                    color: 'white',
                                                    padding: '4px 5px 4px 5px',
                                                    borderRadius: '5px',
                                                    background: 'linear-gradient(103.84deg, #56B8E9 -18.6%, #0B6CFE 99.61%)'
                                                
                                                }}
                                        > {node.PostTypeForChildrenFields.school}</div>
                                        <div
                                            sx={{
                                                fontFamily: '"Fira Sans", sans-serif',                                              
                                                fontWeight: '300',
                                                color: 'white',                                          
                                                fontSize: '14px' 
                                            }}
                                        ><div 
                                       
                                        className={node.PostTypeForChildrenFields.flag}
                                            sx={{ margin: 0}}
                                        ></div></div>
                                        </div>
                                        <div
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'flex-end',
                                                flexGrow: '1',
                                                padding: '18px',
                                                color: 'white',
                                                fontFamily: '"Fira Sans", sans-serif',                                              
                                                fontWeight: '300',
                                                fontSize: '14px',
                                                zIndex: '2'                            
                                            }}
                                        >
                                            <div
                                                sx={{
                                                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                                                    paddingTop: '10px',
                                                    width: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <div>{node.PostTypeForChildrenFields.age}</div>
                                                <div
                                                    sx={{ display: 'flex'}}
                                                >
                                                   {categories.nodes.map(cat => (
                            
                                                        <Categories key={cat.id} {...cat} />
                                                    
                                                        
                                                    ))}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link 
                                        
                                        to={`/for-childrens/${node.uri}`}
                                    >
                                    <motion.div
                                        initial={{ opacity: 0, y: -40}}
                                        animate={{ opacity: 1, y: 0}}
                                       
                                        transition={{ duration: 0.5, delay: 0.8}}    
                                        sx={{                                                                
                                            margin: 0,
                                            bg: 'white',
                                            padding: '22px 18px 12px 18px',
                                            marginTop: '-5px',
                                            marginBottom: '20px',
                                            borderBottomLeftRadius: '10px',
                                            borderBottomRightRadius: '10px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            boxShadow: '0px 14px 25px rgba(0, 41, 102, 0.07)',
                                            willChange: "transform, box-shadow",
                                            transition: "transform 0.25s ease-out, box-shadow 0.25s ease-out",                                                                                
                                            ":hover>div": {                                       
                                                color: 'primary',                       
                                            },                                      
                                            ":hover>span": {                                       
                                                transform: 'rotate(-90deg) translateX(10px)'                       
                                            },
                                            ":hover": {                                       
                                                boxShadow: '0px 4px 40px rgba(255, 255, 255, 0.8)',                       
                                            },                                                         
                                        }}
                                    >
                                        <div
                                            sx={{
                                                textTransform: 'uppercase',
                                                color: '#000',                  
                                                maxWidth: '85%',
                                                fontSize: '1rem',
                                                lineHeight: '24px',
                                                fontFamily: 'heading',
                                                fontWeight: 'bold'                                                                                                                       
                                            }}
                                            dangerouslySetInnerHTML={{ __html: node.title }} 
                                        >
                                        
                                        </div>
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
                                    </motion.div>
                                    </Link>
                                </motion.div>
                            )
                        })}
                        
                
                    

                    
                    

                    </Swiper>
                  
                </motion.div>
                </div>
            </div>  
            </motion.div> 
           

            </AnimatePresence>  
        )
    }


    const Categories = ({ slug, name, id }) => {
        return (
        <Link to={`/for-childrens/category/${slug}`}>
        <div
            className={slug}
            sx={{
                opacity: '0.7',
                ":hover": {                      
                    opacity: '1 ',
                    },
            }}
        >
        </div> 
        </Link>
        )
    }

    

    
    export default ContentList