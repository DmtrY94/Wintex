/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import Container from '../particles/Container'
import 'fira-sans-cyrillic'
import { motion } from "framer-motion"

import './all.sass'

const Layout = (props) => {
  return (
    <motion.div 
      
      layoutTransition
    >  
      <div

        sx={{
          position: 'absolute',
          bg: '#212121',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }}
      >
        <Container>  
        {props.children}
        </Container>
      </div>
    </motion.div>
  )
}

export default Layout
