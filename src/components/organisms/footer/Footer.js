/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const Footer = () => {
    return (
        <footer
            sx={{
                padding: '0 10vh 1.68vh 10vh',
                position: 'relative',
                bottom: '0',
                width: '100%',
                zIndex: '4',
                "@media screen and (max-width: 768px)": {
                    borderTop: '2px solid rgba(0,0,0,0.035)',
                    padding: '20px 30px 100px 30px'
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
                        fontFamily: '"Fira Sans", sans-serif',                       
                        color: 'white',
                        fontWeight: '300',
                        fontSize: '0.875rem',
                        "@media screen and (max-width: 768px)": {
                            textAlign: 'center',
                            color: '#0D2344'
                        },
                    }}
                >Ukrainian Education Company IntEXchange © 2020 </div>
                <nav
                    sx={{ display: 'flex',
                    "@media screen and (max-width: 768px)": {
                        justifyContent: 'center',
                        marginTop: '15px',
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
                                ":hover": {
                                    bg: '#4267b2', 
                                    color: '#fff',
                                    padding: '0 6px',
                                    borderRadius: '4px'                       
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
                                ":hover": {                                   
                                    background: 'radial-gradient(circle at -20% 107%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)',                                 
                                    color: '#fff',
                                    padding: '0 6px',
                                    borderRadius: '4px'                 
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