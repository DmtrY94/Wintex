/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from '../components/particles/Layout'
import SEO from "../components/particles/SEO"
import { motion } from "framer-motion"
import Img from "gatsby-image"


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

  const { content, title, PageGallery, seo } = props.pageContext
  
  console.log(PageGallery.pagegallery)

  if (!PageGallery.pagegallery) {
    return (<Styled.p sx={{textAlign: 'center', color: 'white', marginTop: '2em', marginBottom: ['initial', '3em', 'initial'], fontSize: ['20px', '14px', '20px']}}>Тут скоро будуть фотографії з наших поїздок...</Styled.p>)
  }

  if (!PageGallery.pagegallery.length) {
    return (<p>Something went wrong or no data...</p>)
  }

  return (
    <Layout>
      <SEO data={props.pageContext} /> 
      <motion.div
        exit={{ opacity: 0 }}
        initial='initial'
        animate='animate'
        sx={{
          marginTop: '6vh',
          position: 'relative',
          height: '100%'
        }}
      >
        <div
          sx={{
            borderBottom: '2px solid rgba(0, 0, 0, 0.035)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: ['0 10vh', '0 30px', '0 5vh', '0 10vh'],
            zIndex: '2',
            position: 'relative'
          }}
        >
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
              marginLeft: ['initial', '60px', 'initial'],
              marginTop: ['initial', '20px', 'initial']  
            }}
          >
            {PageGallery.pagegallery.map((images) => (
                <div key={images.id}
                  className="pagephoto"
                  sx={{
                    display: 'block',
                    height: ['52.33vh', '21.6vh', '52.33vh'],
                    flexBasis: '33.3%',
                    overflow: 'hidden',
                    position: 'relative',
                    padding: '10px',
                    width: '100%',
                    borderRadius: '10px',
                    marginRight: '20px',
                  
                                        
                }}
                >             
                    <Img 
                      sx={{
                        position: 'absolute !important',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                      }}
                      fluid={images.imageFile.childImageSharp.fluid} 
                    />
                  
                </div>
              ))}
          </div>

          <div
            sx={{
              position: 'relative',
              padding: ['0 10vh', '0 30px', '0 5vh', '0 10vh'],
              width: ['50%', '100%', '50%'],
              overflow: 'hidden',
              minHeight: '65vh',
              overflowY: 'scroll',   
              zIndex: '2',                    
              ' &::-webkit-scrollbar ' : {
                width: 0,
            },
            }}
          >
          <div
            sx={{
              position: ['absolute', 'relative', 'absolute'], 
              padding: '35px 0',        
              height: '100%',                  
              ' &::-webkit-scrollbar ' : {
                width: 0,
            },
            }}
          >
          
            <article
            sx={{
              fontFamily: 'body',
              fontWeight: 'body',
              color: ['white', '#0D2344', 'white']
            }}
            dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          </div>
          <motion.div
            initial={{ width: '100%', opacity: 0}}
            animate={{ width: '60%', opacity: 1}} 
            transition={{ duration: 0.45 }} 
            sx={{
              position: 'absolute',
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
        </div>

        
      </motion.div>
    </Layout>
  )
}

export default CreatePage
