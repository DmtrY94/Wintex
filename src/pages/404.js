/** @jsx jsx */
import React from "react"
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from "../components/particles/Layout"
import { motion } from "framer-motion"

const NotFoundPage = ({ location }) => {
  return (
  <>
  <Layout location={location}>
    <div
      sx={{
        position: 'relative',
        padding: ['0 5.208vw', '0 20px', '0 5vh', '0 5.208vw'],
        width: ['50%', '100%', '50%'],
        overflow: 'hidden',
        minHeight: '35.2916vw',
        overflowY: 'scroll',   
        zIndex: '2',                    
          ' &::-webkit-scrollbar ' : {
            width: 0,
          },
            "@media screen and (max-width: 768px)": {
              marginTop: '30px',
              padding: 0,
              height: 'calc(100vh - 100px)'
               
            },
      }}
    >
      <div
        sx={{
          position: ['absolute', 'relative', 'absolute'], 
          padding: ['1.8229vw 0', '35px 0', '35px 0', '1.8229vw 0',],    
          height: '100%', 
          fontFamily: 'body',
          color: ['white', 'black', 'white'],  
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',               
            "@media screen and (max-width: 768px)": {
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px'
               
              },
        }}
      >
        <h1 sx={{fontSize: ['calc(24*0.25vw)', '1.75rem', 'calc(24*0.25vw)'],textTransform: 'uppercase',}}>Ошибка 404</h1>
        <p>К сожалению, запрашиваемая страница не найдена :(</p>
      </div>
    </div>
  </Layout>
  <motion.div
    initial={{ height: '100%' }}
    animate={{ height: '45%' }} 
    transition={{ duration: 0.7 }} 
    sx={{
      position: 'absolute',
      width: '100%',
      height: '45%',
      background: 'linear-gradient(354.04deg, #8FD300 33.78%, #00B707 96.12%)',
      left: 0,
      top: ['-3.7em', '-5.7em', '-5.7em' ],
      zIndex: '0',
      transform: 'skewY(-15deg)',
      display: ['none', 'block', 'none']
    }}
  >     
  </motion.div>
</>
  )
}

export default NotFoundPage
