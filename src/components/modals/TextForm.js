/** @jsx jsx */
import React, {useState} from 'react'
import { jsx, Styled } from 'theme-ui'

import Mail from "../../images/mail.svg"

const TextForm = () => {

   
    return ( 
        <div>
            <div sx={{position: 'relative', marginTop: '10px', textAlign: 'center'}}></div>
            <a href="mailto:intexchangeua@gmail.com" target="_blank" sx={{ display: 'block', fontFamily: 'body', color: 'primary', borderBottom: '1px solid #E5E5E5', padding: '15px 0'}}>Написати e-mail</a>
            <a href="https://t.me/Intexchange" rel="noopener noreferrer" target="_blank" sx={{ display: 'block', fontFamily: 'body', color: 'primary', borderBottom: '1px solid #E5E5E5', padding: '15px 0'}}>Telegram</a>
            <a href="viber://chat?number=+380984241234" rel="noopener noreferrer" target="_blank" sx={{ display: 'block', fontFamily: 'body', color: 'primary', borderBottom: '1px solid #E5E5E5', padding: '15px 0'}}>Viber</a>
            <a href="https://www.messenger.com/t/intexchangeua" rel="noopener noreferrer" target="_blank" sx={{ display: 'block', ontFamily: 'body', color: 'primary', padding: '15px 0'}}>Messenger</a>
        </div>
    )
}

export default TextForm