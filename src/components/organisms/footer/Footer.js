/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'

const Footer = () => {
    return (
        <footer
            sx={{
                borderTop: '2px solid rgba(0,0,0,0.035)',
                padding: '0.8811vw 5.208vw',
                position: 'relative', 
                bottom: '0',
                zIndex: '4',
                marginTop: 'auto',
                "@media screen and (max-width: 768px)": {
                    borderTop: '2px solid rgba(0,0,0,0.035)',
                    marginTop: '30px',
                    marginBottom: '30px',
                    padding: '20px'
                },
            }}
        >
            <div
                sx={{
                    display: 'flex',
                    flexDirection: ['row', 'column', 'row'],
                    justifyContent: 'space-between'
                
                }}
            >
                <div
                    sx={{                     
                        color: 'white',
                        fontFamily: 'body',
                        fontWeight: 'body',
                        fontSize: '0.8375vw',
                        "@media screen and (max-width: 768px)": {                         
                            color: '#0D2344',
                            fontSize: '14px',
                        },
                    }}
                >Ukrainian Education Company IntEXchange © 2020</div>
                <nav
                    sx={{ display: 'flex',
                    "@media screen and (max-width: 768px)": {
                        justifyContent: 'flex-start',
                        marginTop: '10px',
                        marginBottom: '15px'
                    }, 
                
                }}
                >
                    
                        <a 
                            sx={{
                                fontFamily: 'heading',
                                textTransform: 'uppercase',
                                color: 'rgba(13, 35, 68, 0.5)',
                                marginRight: '5px',
                                padding: '0 6px', 
                                fontSize: '0.8333vw',                                                   
                                ":hover": {
                                    bg: '#4267b2', 
                                    color: '#fff',
                                    padding: '0 6px',
                                    borderRadius: '4px'                       
                                },
                                "@media screen and (max-width: 768px)": {
                                    fontSize: '14px',  
                                    padding: 0,
                                },
                            }}
                        href="https://www.facebook.com/intexchangeua/">
                            facebook
                        </a>
                    
                    
                        <a 
                            sx={{
                                fontFamily: 'heading',
                                textTransform: 'uppercase',
                                color: 'rgba(13, 35, 68, 0.5)',
                                padding: '0 6px',
                                fontSize: '0.8333vw',           
                                ":hover": {                                   
                                    background: 'radial-gradient(circle at -20% 107%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)',                                 
                                    color: '#fff',
                                    padding: '0 6px',
                                    borderRadius: '4px'                 
                                },
                                "@media screen and (max-width: 768px)": {
                                    fontSize: '14px',  
                                },
                            }}
                        href="https://www.instagram.com/intexchange.ua/">
                            instagram
                        </a>
                    
                </nav>
            </div>
        </footer>
    )
}

export default Footer