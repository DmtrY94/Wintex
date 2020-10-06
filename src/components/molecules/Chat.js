/** @jsx jsx */
import React, {useState} from 'react'
import { jsx, Styled } from 'theme-ui'
import { motion, AnimatePresence  } from "framer-motion"
import { FormattedMessage } from 'react-intl'

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import Hand from "../../images/hand.svg"

const Chat = () => {

    const [menuOpen, toggleMenu] = useState(false)
    return ( 
        <>
        <div className={menuOpen ? `chat--show` : undefined}
            sx={{
                position: 'fixed',
                bottom: '120px',
                right: '45px',
                bg: 'white',
                borderRadius: '10px',
                width: '220px',
                visibility: 'hidden',
                opacity: 0,
                zIndex: '999',
                transition: 'all 0.3s',
                boxShadow: '0px 18px 47px rgba(11,108,254,0.37)',
                "@media screen and (max-width: 768px)": {
                    right: '20px',
                    bottom: '70px',
                    left: '20px',
                    width: 'auto'
                },    
            }}
        >
            <div
                sx={{ padding: '30px 30px 15px 30px'}}
            >
                <p sx={{ fontFamily: 'body', fontSize: '1rem' }}><span sx={{ fontWeight: '500'}}><FormattedMessage id="chat-text-1" /></span><br/><FormattedMessage id="chat-text-2" /></p>
                <div sx={{position: 'relative', marginTop: '10px', textAlign: 'center'}}><Hand sx={{ transform: 'rotate(90deg)' }}/></div>
                <a href="https://t.me/Intexchange" rel="noopener noreferrer" target="_blank" 
                    sx={{ 
                        display: 'block', 
                        fontFamily: 'body', 
                        color: 'primary', 
                        borderBottom: '1px solid #E5E5E5', 
                        padding: '15px 0',
                        ":hover": {                      
                            color: '#00B707 ',
                            },
                        }}>
                            Telegram
                </a>
                <BrowserView>
                <a href="viber://chat?number=+380984241234" rel="noopener noreferrer" target="_blank" 
                    sx={{ 
                        display: 'block', 
                        fontFamily: 'body', 
                        color: 'primary', 
                        borderBottom: '1px solid #E5E5E5', 
                        padding: '15px 0',
                        ":hover": {                      
                            color: '#00B707 ',
                            },
                        }}>
                            Viber
                </a>
                </BrowserView>
                <MobileView>
                <a href="viber://add?number=+380984241234" rel="noopener noreferrer" target="_blank" 
                    sx={{ 
                        display: 'block', 
                        fontFamily: 'body', 
                        color: 'primary', 
                        borderBottom: '1px solid #E5E5E5', 
                        padding: '15px 0',
                        ":hover": {                      
                            color: '#00B707 ',
                            },
                        }}>
                            Viber
                </a>
                </MobileView>
                <a href="https://www.messenger.com/t/intexchangeua" rel="noopener noreferrer" target="_blank" 
                    sx={{ 
                        display: 'block', 
                        fontFamily: 'body', 
                        color: 'primary', 
                        padding: '15px 0',
                        ":hover": {                      
                            color: '#00B707 ',
                            },
                        }}>
                            Messenger
                </a>
            </div>
        </div>
        <div
            onClick={() => toggleMenu(!menuOpen)}
            sx={{
                position: 'fixed',
                bottom: '45px',
                right: '45px',
                width: '60px',
                height: '60px',
                bg: 'primary',
                zIndex: '999',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0px 10px 30px rgba(11, 128, 254, 0.71)',
                "@media screen and (max-width: 768px)": {
                    right: '20px',
                    bottom: 0,
                    background: 0,
                    boxShadow: 'none',
                    height: '55px',
                    width: '30px'
                },      
            }}
        >
                {(!menuOpen) ? (
                
                <span
                    sx={{ display: 'flex' }}
                >
                    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M25 2H5C3.34314 2 2 3.34314 2 4.99999V17.7273C2 18.38 2.52912 18.9091 3.18182 18.9091H4.00284C6.41124 18.9091 8.36364 20.8615 8.36364 23.2699C8.36364 23.3907 8.39623 23.4492 8.42252 23.4842C8.45724 23.5303 8.51846 23.58 8.60501 23.6103C8.69155 23.6407 8.77039 23.6402 8.82632 23.6258C8.86868 23.615 8.93071 23.5896 9.00617 23.4953L11.0254 20.9713C12.0681 19.6678 13.6468 18.9091 15.316 18.9091H25C26.6569 18.9091 28 17.5659 28 15.9091V5C28 3.34315 26.6569 2 25 2ZM5 0C2.23858 0 0 2.23857 0 4.99999V17.7273C0 19.4845 1.42455 20.9091 3.18182 20.9091H4.00284C5.30667 20.9091 6.36364 21.9661 6.36364 23.2699C6.36364 25.5015 9.17383 26.4873 10.5679 24.7447L12.5871 22.2206C13.2503 21.3917 14.2544 20.9091 15.316 20.9091H25C27.7614 20.9091 30 18.6705 30 15.9091V5C30 2.23858 27.7614 0 25 0H5ZM5 13C5 12.4477 5.44772 12 6 12H20C20.5523 12 21 12.4477 21 13C21 13.5523 20.5523 14 20 14H6C5.44772 14 5 13.5523 5 13ZM6 8C5.44772 8 5 8.44771 5 9C5 9.55229 5.44772 10 6 10H13.5C14.0523 10 14.5 9.55229 14.5 9C14.5 8.44771 14.0523 8 13.5 8H6Z" fill="white"/>
                    </svg>
                </span>
                
                ) : (
                
                <span
                    sx={{ display: 'flex' }}
                >
                        <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.6667 0.407868C2.27618 0.017344 1.64301 0.017344 1.25249 0.407868C0.861964 0.798392 0.861964 1.43156 1.25249 1.82208L7.54539 8.11498L1.25249 14.4079C0.861964 14.7984 0.861964 15.4316 1.25249 15.8221C1.64301 16.2126 2.27618 16.2126 2.6667 15.8221L8.9596 9.5292L15.2525 15.8221C15.643 16.2126 16.2762 16.2126 16.6667 15.8221C17.0572 15.4316 17.0572 14.7984 16.6667 14.4079L10.3738 8.11498L16.6667 1.8221C17.0572 1.43157 17.0572 0.798408 16.6667 0.407883C16.2762 0.0173588 15.643 0.0173587 15.2525 0.407883L8.9596 6.70077L2.6667 0.407868Z" fill="white"/>
                        </svg>
                </span>
                
                )}             
            </div>

            </>
    )
}

export default Chat