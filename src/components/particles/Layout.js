/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header";
import Toolbar from "../organisms/toolbar/Toolbar";
import Container from '../particles/Container'
import 'fira-sans-cyrillic'
import { motion, AnimatePresence } from "framer-motion"


import './all.sass'

const easings = [0.6, -0.05, 0.01, 0.99];

const fadeIn = {
    initial: {
        y: 60,
        opacity: 0
    },
    animate : {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.7,
            ease: easings,
            delay: 0.3,
        } 
    }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5
    }
  }
}

const Layout = (props) => {
  return (    
    <AnimatePresence exitBeforeEnter>
    <div
      sx={{
        position: 'absolute',
        background: 'linear-gradient(52.25deg, rgba(171, 218, 238, 0.5) 40.16%, rgba(91, 180, 218, 0.5) 100.32%)',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: 'hidden',
        overflowY: ['hidden', 'scroll', 'hidden']
      }}
    >
      <Container>
      <motion.div
        initial='initial'
        animate='animate'
        
      >
      <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{ y: 0, opacity: 1}} 
        transition={{ delay: 0.15, duration: 0.4 }} 
      >
        <Header/> 
      </motion.div>  
      
      <motion.div
        variants={stagger}
        exit={{ opacity: 0 }}
        
      >  
      <motion.div
        
        variants={fadeIn}
        
        sx={{       
          height: '100%',
          marginBottom: '2vh'
        }}
      >    
      {props.children}
      </motion.div> 
      </motion.div>
      <Footer />
      </motion.div>
      <Toolbar />
      </Container>
      
      
      <motion.div
        initial={{ width: '100%'}}
        animate={{ width: '60%'}} 
        
        transition={{ duration: 0.7 }} 
        sx={{
          position: 'fixed',
          width: '60%',
          height: '100%',
          background: 'linear-gradient(225.35deg, #8FD300 27.55%, #00B707 95.85%)',
          left: '-3.3em',
          top: 0,
          bottom: 0,
          zIndex: '1',
          transform: 'skew(6deg)',
          display: ['block', 'none', 'block']
        }}
      ></motion.div>
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
          zIndex: '1',
          transform: 'skewY(-15deg)',
          display: ['none', 'block', 'none']
        }}
      ></motion.div>
      
    </div>
    </AnimatePresence>
  )
}

export default Layout
