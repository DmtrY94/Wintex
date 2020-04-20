/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from "gatsby"
import FluidImage from '../../molecules/FluidImage'
import { motion } from "framer-motion"

 
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

const staggers = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};


const ContentList = ({ node }) => {

    


    const featuredImage = node.featuredImage


    return (    
        
        
        <motion.div
            exit={{ opacity: 0 }}
            initial='initial'
            animate='animate'
        >     

                            <motion.div
                                variants={staggers}
                            > 

                                <motion.div 
                                    variants={fadeInUp}               
                                    className="Block"
                                    whileHover={{ y: -20 }}
                                    whileTap={{ scale: 1.1, zIndex: 999, }}
                                
                                sx={{
                                    zIndex: 10,
                                    willChange: "transform",
                                    transition: "transform 0.25s ease-out",
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
                                        
                                        height: '45vh',                       
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
                                            boxShadow: '0px 14px 25px rgba(0, 41, 102, 0.3)', 
                                                                
                                        },  
                                    }}                               
                                    >
                                        <FluidImage image={featuredImage} 
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
                                                    bg: 'primary',
                                                    boxShadow: '0 0 0px 1px #4891FE'
                                                
                                                }}
                                        > {node.PostTypeForChildrenFields.school}</div>
                                        <div
                                            sx={{
                                                fontFamily: '"Fira Sans", sans-serif',                                              
                                                fontWeight: '300',
                                                color: 'white',                                          
                                                fontSize: '14px' 
                                            }}
                                        ><div className={node.PostTypeForChildrenFields.flag}
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
                                                    width: '100%'
                                                }}
                                            >
                                                {node.PostTypeForChildrenFields.age}
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
                                                transform: 'rotate(-90deg) translateX(7px)'                       
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
                                                maxWidth: '75%',
                                                fontSize: '1.2rem',
                                                lineHeight: '24px',
                                                fontFamily: 'heading',
                                                fontWeight: '600'                                                                                                                       
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
                            </motion.div> 
                        
                
                    

                    
                    

            
                
            </motion.div>   
        )
    }



    

    
    export default ContentList