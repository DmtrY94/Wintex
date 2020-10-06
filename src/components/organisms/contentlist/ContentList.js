/** @jsx jsx */
import React, {useState} from 'react'
import { Link , graphql, useStaticQuery } from 'gatsby'
import { jsx, Styled } from 'theme-ui'

import { motion, AnimatePresence  } from 'framer-motion'
import Swiper from 'react-id-swiper';
import FluidImage from '../../molecules/FluidImage'

import 'swiper/css/swiper.css';
import './contentlist.css'



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





const ContentList = ({ title, uri, featuredImage, PostTypeForChildrenFields, categories, slug }) => {

   


   

    return (
      
                       
      <motion.div 
                              


        variants={fadeInUp}                                  
        className="Block" 
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
                                    
                                    
                                    
        <Link 
                                        
          to={`/${uri}`}
        >
                                    
                                        

          <div  
                                    
                                    

            sx={{
                                        cursor: 'pointer',                                     
                                        height: ['18.3567vw', '40vh', '40vh', '18.3567vw'],                       
                                        backgroundSize: 'cover',
                                        position: 'relative',
                                        borderRadius: ['0.78125vw', '15px', '15px', '0.78125vw'],
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
                                                    background: 'linear-gradient(3.01deg, #000000 -22.6%, rgba(0, 0, 0, 0) 66.89%)',
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
                                                padding: ['0.9375vw 0.9375vw', '18px 18px', '18px 18px', '0.9375vw 0.9375vw'],
                                                zIndex: '2',
                                                alignItems: 'center'
                                            }}
            >
              <div
                sx={{
                                                    fontFamily: 'heading',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: ['0.625vw', '12px', '12px', '0.625vw'],
                                                    color: 'white',
                                                    padding: ['0.2083vw 0.5208vw 0.2083vw 0.5208vw', '4px 10px 4px 10px', '4px 10px 4px 10px', '0.2083vw 0.5208vw 0.2083vw 0.5208vw'],
                                                    borderRadius: '32px',
                                                    background: 'linear-gradient(39.9deg,#0B6CFE 22.83%,#458FFF 79.5%)', 
                                                    letterSpacing: '0.018rem'                                                                                   
                                                }}
              > 
                {' '}
                {PostTypeForChildrenFields.school}
              </div>
              <div
                sx={{
                                                fontFamily: '"Fira Sans", sans-serif',                                              
                                                fontWeight: '300',
                                                color: 'white',                                          
                                                fontSize: '14px' 
                                            }}
              >
                <div 
                                       
                  className={PostTypeForChildrenFields.flag}
                  sx={{ margin: 0}}
                />
              </div>
            </div>
            <div
              sx={{
                                                display: 'flex',
                                                alignItems: 'flex-end',
                                                flexGrow: '1',
                                                padding: ['0.2604vw 0.9375vw', '5px 18px', '5px 18px', '0.2604vw 0.9375vw'],
                                                color: 'white',
                                                fontFamily: '"Fira Sans", sans-serif',                                              
                                                fontWeight: '300',
                                                fontSize: ['0.7291vw', '14px', '14px', '0.7291vw'],
                                                zIndex: '2',
                                                                           
                                            }}
            >
              <div
                sx={{
                                                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                                                    paddingBottom: '10px',
                                                    width: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}
              >
                <div>{PostTypeForChildrenFields.age}</div>
                <div
                  sx={{ display: 'flex'}}
                >
                  {categories.nodes.map(cat => (
                            
                    <Categories key={cat.id} {...cat} />
                                                    
                                                        
                                                    ))}

                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -40}}
              animate={{ opacity: 1, y: 0}}
                                       
              transition={{ duration: 0.5, delay: 0.8}}    
              sx={{                                                                
                                            margin: 0,                                                                                  
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between', 
                                            zIndex: '3', 
                                            padding: ['0.2604vw 0.9375vw 0.9375vw 0.9375vw', '5px 18px 18px 18px', '5px 18px 18px 18px', '0.2604vw 0.9375vw 0.9375vw 0.9375vw']                                               
                                        }}
            >
              <div
                sx={{
                                                textTransform: 'uppercase',
                                                color: 'white',                  
                                                maxWidth: '85%',
                                                fontSize: ['0.9375vw', '1rem', '1rem', '0.9375vw'],
                                                lineHeight: '1.4',
                                                fontFamily: 'heading',
                                                fontWeight: '500'                                                                                                                       
                                            }}
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <span
                sx={{
                                                transform: 'rotate(-45deg)',
                                                willChange: "transform",
                                                transition: "transform 0.25s ease-out",
                                            }}
              >
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.6568 10.0711L13.2928 1.70706L14.707 0.292847L23.8492 9.43498L23.2132 10.0709L23.8493 10.707L14.7072 19.8491L13.293 18.4349L21.6568 10.0711ZM18 11H0V9H18V11Z" fill="white" />
                </svg>
              </span>
            </motion.div>
          </div>
                                   
                                    
        </Link>
      </motion.div>
                            
                        
                             
                    

                    
                    

                
                  
            
        )
    }


    const Categories = ({ uri, slug, name, id }) => {
        return (          
          <Link to={`/${uri}`}>
            <span
              className={slug}
              sx={{
                opacity: '0.7',
                ":hover": {                      
                    opacity: '1 ',
                    },
            }}
            /> 
          </Link>   
        )
    }

    

    
    export default ContentList