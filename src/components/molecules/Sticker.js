/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import StickerMob from "../../images/sticker-mob.svg"
import StickerMobRu from "../../images/sticker-mob-ru.svg"
import StickerDesUa from "../../images/sticker-des-ua.svg"
import StickerDesRu from "../../images/sticker-des-ru.svg"

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

const Sticker = ({ lang }) => {

    
    const langKey = lang === 'ru' ? '' : 'ua'
      
    const lan = langKey === 'ua';

    return ( 
        <>
        <BrowserView>
        <div
            sx={{
                position: 'absolute',
                top: ['0', '30%', '40%', '30%', '20%', '0'],
                right: ['-44.2708vw', '0',  '-44.2708vw'],
                transform: 'translate(-50%)',
            }}
        >
            <div className="sticker"
                sx={{
                    display: 'flex',
                    "&>svg": {
                        width: ['39.8958vw', '466px', '466px',  '39.8958vw'],
                        height: ['39.8958vw', '466px', '466px',  '39.8958vw'],                       
                      }, 
                   
                }}
            >
                
            
                {lan ? (               
                    <StickerDesUa />
                    ) : (
                    <StickerDesRu />
                )}
                

            </div>
        </div>
        </BrowserView> 
        <MobileView>
            <div
                sx={{
                    position: 'absolute',                 
                    right: '0',
                    transform: 'rotate(-15deg)'
                }}
            >
                {lan ? (
                    <StickerMob />
                    ) : (
                    <StickerMobRu />
                )}
            </div>        
        </MobileView>
        </>
    )
}

export default Sticker