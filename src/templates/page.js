/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from '../components/particles/Layout'
import SEO from "../components/particles/SEO"
import { motion } from "framer-motion"
import ButtonBack from '../components/molecules/ButtonBack'
import FormModalChildren from '../components/modals/FormModalChildren'
import SliderGalleryPage from '../components/molecules/SliderGalleryPage'
import Img from "gatsby-image"


import Bus_ua from "../images/form_page_img_ua.svg"
import Bus_ru from "../images/form_page_img_ru.svg"

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


const CreatePage = props => {

  const { content, title, PageGallery, seo, slug, language } = props.pageContext
  
  const langKey = language.slug === 'ru' ? '' : 'ua'
      
  const lan = langKey === 'ua';

  console.log(lan)

  return (
    <>
    <Layout location={props.location}>
     
      <SEO data={props.pageContext} /> 
      <motion.div
        exit={{ opacity: 0 }}
        initial='initial'
        animate='animate'
        sx={{
          marginTop: ['3.1468vw', '6vh', '6vh', '3.1468vw'],
          position: 'relative',
          height: '100%'
        }}
      >
        <div
          sx={{
            borderBottom: '2px solid rgba(0, 0, 0, 0.035)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: ['0 5.208vw', '0 20px', '0 5vh', '0 5.208vw'],
            zIndex: '2',
            position: 'relative'
          }}
        >
          <div sx={{ marginTop: ['0.67vw', '1.05vw', '0.67vw' ]  }}>  
            <ButtonBack />   
          </div>
          <Styled.h1
              sx={{
                color: 'white',
                marginBottom: '4.51vh',               
                textTransform: 'uppercase',
                fontSize: ['calc(16*0.25vw)', '1.75rem', 'calc(16*0.25vw)'],
              }}
            >
              {title}
            </Styled.h1>
            
        </div>
        <div
          sx={{
            display: 'flex',
            flexDirection: ['row-reverse', 'column', 'row-reverse'],
            alignItems: 'center'
          }}
        >
          <div
            sx={{
              position: 'relative',
              bottom: '0',
              width: ['50%', '100%', '50%'],
              right: '0',
              overflow: 'hidden',  
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginLeft: ['initial', '0px', 'initial'],
              marginTop: ['initial', '50px', 'initial'],
              paddingLeft: ['30px', '0px', '30px'] 
            }}
          > 
            { !PageGallery.pagegallery ? (
              null
            ) : (            
              <SliderGalleryPage PageGallery={PageGallery}/>                               
            )}
          </div>

          <div
            sx={{
              position: 'relative',
              padding: ['0 5.208vw', '0 20px', '0 5vh', '0 5.208vw'],
              width: ['50%', '100%', '50%'],
              overflow: 'hidden',
              minHeight: '34.2916vw',
              overflowY: 'scroll',   
              zIndex: '2',                    
              ' &::-webkit-scrollbar ' : {
                width: 0,
              },
              "@media screen and (max-width: 768px)": {
                marginTop: '40px',
                padding: 0
               
              },
            }}
          >
          <div
            sx={{
              position: ['absolute', 'relative', 'absolute'], 
              padding: ['1.8229vw 0', '35px 0', '35px 0', '1.8229vw 0',],    
              height: '100%',                  
              ' &::-webkit-scrollbar ' : {
                width: 0,
              },
              "@media screen and (max-width: 768px)": {
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px'
               
              },
            }}
          >
          
            <article
            className="content"
            sx={{
              backgroundColor: 'white',
              padding: '1.5625vw',
              borderRadius: '0.5208vw',
              fontFamily: 'body',
              color:  'black',
              marginBottom: '1.8229vw'
            }}
            dangerouslySetInnerHTML={{ __html: content }} />
            <div
            sx={{
              backgroundColor: 'white',
              border: ['0', '2px solid #0b6cfe', '0'],
              borderRadius: ['0.5208vw', '10px', '0.5208vw'],
              marginBottom: '1.4229vw',
              display: 'flex',
              flexDirection: ['row', 'column', 'row'],
              alignItems: ['flex-end', 'center', 'flex-end'],
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div
              sx={{ padding: ['1.5625vw', '20px', '1.5625vw'] }}
            >
            <FormModalChildren />
            </div>
            <div
              sx={{
                height: ['5.5208vw', '100%', '5.5208vw'],
                width: ['25.2083vw', '100%', '25.2083vw'],
                marginTop: ['0', '20px', '0']       
              }}
            >
              {lan ? (               
                <Bus_ua />
                ) : ( 
                <Bus_ru />
              )} 
            </div>
          </div>
          </div>
          
          </div>
          
        </div>

        
      </motion.div>
      <motion.div
        initial={{ opacity: 0,}}
        animate={{ opacity: 1,}} 
        transition={{ delay: 2.25, duration: 2}} 
        sx={{
          position: 'absolute',
          width: '100%',
         
          top: 0,
          right: 0,
        }}
      >
        <div  
          sx={{
            width: ['53.3333vw', '100%', '53.3333vw'],
            height: ['48.2291vw', '100%', '48.2291vw'],
            position: 'absolute',
            right: 0,
            top: ['3.0625vw', '14.0625vh', '3.0625vw'],
            zIndex: '0'
          }}
        >
          { !PageGallery.pageimg ? (
            null
          ) : (    
            <Img fluid={PageGallery.pageimg.imageFile.childImageSharp.fluid} />                 
          )}
        </div>
      </motion.div>
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

export default CreatePage
