/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import { motion, AnimatePresence } from 'framer-motion'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import LayoutChildren from '../components/particles/LayoutChildren'
import FluidImage from '../components/molecules/FluidImage'
import Gallery from '../components/organisms/gallery/Gallery'
import ShareModal from '../components/modals/ShareModal'
import YoutubeModal from '../components/modals/YoutubeModal'
import FormModalChildren from  '../components/modals/FormModalChildren'
import ButtonBack from '../components/molecules/ButtonBack'
import SEO from '../components/particles/SEO'
import Logo from '../components/molecules/Logo'



import config from '../../site-config'

import './children.css'

const easings = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
        y: 20,
        opacity: 0
    },
    animate : {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.64,
            ease: easings,
        } 
    }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const createChildrens = props => {


  const { 
    content, 
    title,
    uri,
    PostTypeForChildrenFields: {
        time,
        age,
        school,
        flag,
        aboutSchool,
        apartments,
        dateT,
        fieldGroupName,
        food,
        included,
        location,
        pay,
        program,
        descriptionschool,
        youtube,
        image,
        schoollogo,
    },
    featuredImage,
    categories: {
      nodes: {
        name,
        slug
      }
    },
    language
    
  } = props.pageContext


  const loc = props.pageContext.language.slug
  const langK = loc === 'ru' ? '' : 'ua/'
  

  return (
    
    <AnimatePresence> 
      <Helmet title={config.siteTitle} />
      <SEO data={props.pageContext} />   
      <motion.div 
        exit={{opacity: 0}}
      >  
        <LayoutChildren location={props.location}>
      
          <div sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: ['hidden', 'unset', 'hidden'],
        overflowY: ['scroll', 'unset', 'scroll'],
      }}
          >
        
      
            <div
              sx={{
            display: 'flex',
            flexDirection: ['row', 'column', 'column', 'row'],
          }}
            >
          
              <motion.div
                initial={{ opacity: 0, y: 140}}
                animate={{ opacity: 1, y: 0}}
           
                transition={{ duration: 0.75}}          
                sx={{
              width: ['50%', '100%', '100%', '50%', '50%', '50%'],
              position: [ 'absolute', 'relative', 'relative', 'absolute'],
              height: '100%',
              zIndex: '1'
            }}
              >
                <div
                  sx={{
                position: 'relative',
                maxHeight: ['40.8854vw', '78.16vh', '68.16vh', '40.8854vw'],
                height: '100%',
                minHeight: ['initial', '45vh', '58vh', 'initial']
              }}
                >
                  <div sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: ['2.0833vw', '20px', '20px', '2.0833vw'],
                zIndex: '4',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
                  >
                    <div
                      sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                    > 
                      <div
                        sx={{
                      display: 'flex', 
                      alignItems: 'center', 
                    }}
                      >
                        <div sx={{ marginBottom: '0.5vw'}}><ButtonBack /></div>  
                        <Link to={`/${langK}`} sx={{ fontSize: 0, marginLeft: ['0.5208vw', '10px', '10px', '0.5208vw'] }}>      
                        <Logo />
                      </Link>
                      </div>         
                      <div
                            className="DropdownContent"
                            sx={{
                                position: 'relative'
                            }}
                        >
                            <a  
                            sx={{
                                display: ['flex', 'none', 'flex'],
                                alignItems: 'center',
                                color: '#ffffff',
                                fontFamily: 'heading',
                                fontWeight: '700',
                                fontSize: ['calc(3.5*0.25vw)', '1.25rem', 'calc(3.5*0.25vw)',],
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                padding: '0.6375vw 1.40625vw',
                                borderRadius: '32px'
                            }}
                            href="#">
                                <span
                                    sx={{
                                        display: ['flex', 'none', 'flex'], marginRight: ['5px', '0', '5px'], marginTop: ['5px', '0', '5px'], 
                                        color: 'white',
                                        padding: ['0', '9px', '0'],
                                        border: ['0', '1px solid rgba(255, 255, 255, 0.2)', '0'],
                                        borderRadius: ['inherit', '100%', 'inherit'],
                                        width: ['0.78125vw', '15px', '0.78125vw'],
                                                    
                                    }}
                                >
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.3859 11.967C14.4156 12.2104 14.3463 12.4227 14.1782 12.6025L12.2069 14.7C12.1179 14.8061 12.002 14.896 11.8588 14.97C11.7156 15.0443 11.5745 15.0917 11.4365 15.1131C11.4265 15.1131 11.3968 15.1157 11.3475 15.1213C11.2982 15.1264 11.234 15.1294 11.155 15.1294C10.9673 15.1294 10.6634 15.095 10.2435 15.0262C9.82331 14.9574 9.30959 14.7879 8.70203 14.5176C8.09447 14.2473 7.40518 13.8422 6.63445 13.3022C5.86372 12.7622 5.04365 12.0203 4.17424 11.0778C3.48252 10.3469 2.90947 9.64753 2.45509 8.98027C2.0004 8.31301 1.63502 7.69606 1.35833 7.12908C1.08165 6.56243 0.873982 6.04868 0.735942 5.58783C0.597598 5.12698 0.503755 4.72974 0.454412 4.39612C0.405068 4.06249 0.385089 3.80026 0.395078 3.60975C0.404765 3.41892 0.409912 3.31312 0.409912 3.29202C0.429589 3.14371 0.474088 2.9928 0.543411 2.83929C0.612734 2.68578 0.696588 2.56116 0.795275 2.46607L2.76598 0.351675C2.90433 0.203684 3.06235 0.129364 3.24035 0.129364C3.3687 0.129364 3.48252 0.168958 3.58121 0.248471C3.6799 0.327984 3.76405 0.425995 3.83307 0.542506L5.41903 3.76813C5.50803 3.93754 5.53255 4.12318 5.49319 4.32439C5.45384 4.52561 5.36968 4.69534 5.24133 4.83295L4.5151 5.61153C4.49543 5.63294 4.47787 5.66735 4.46334 5.71473C4.44851 5.76244 4.44094 5.80236 4.44094 5.83384C4.48029 6.05647 4.56929 6.31059 4.70763 6.59651C4.8263 6.85095 5.00914 7.16056 5.25616 7.526C5.50318 7.89143 5.85404 8.31236 6.30842 8.78911C6.75312 9.27658 7.14817 9.65499 7.49418 9.92533C7.83988 10.1954 8.12898 10.394 8.36117 10.5212C8.59335 10.6481 8.77135 10.725 8.89486 10.7516L9.08013 10.7912C9.0998 10.7912 9.1322 10.7831 9.17639 10.7675C9.22089 10.7516 9.25298 10.7331 9.27266 10.712L10.1176 9.79033C10.2956 9.62091 10.5029 9.53588 10.7399 9.53588C10.908 9.53588 11.0415 9.56769 11.1401 9.6313H11.155L14.0154 11.4429C14.2227 11.5805 14.3463 11.7551 14.3859 11.967Z" fill="currentColor"/>
                                    </svg>
                                </span>
                           
                                <span
                                    sx={{
                                        display: ['flex', 'none','flex']
                                    }}
                                >
                                    +38 063 982 56 82
                                </span>
                            </a>
                            <nav
                            sx={{
                                display: ['flex', 'none', 'flex'],
                                flexDirection: 'column',
                                padding: ['1.5625vw', '30px', '30px', '1.5625vw']  ,
                                bg: 'white',
                                borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                                boxShadow: '0px 18px 47px rgba(11, 108, 254, 0.37)',
                                visibility: 'hidden',
                                opacity: 0,
                                position: 'absolute',                                
                                zIndex: '4',
                                width: ['11.4583vw', '220px', '11.4583vw'],
                                left: '50%',
                                transform: 'translateX(-50%)',
                                marginTop: '0.5vw'                             
                            }}
                            >
                            <a 
                                sx={{
                                    color: '#0D2344',
                                    fontFamily: 'heading',
                                    fontWeight: '700',
                                    fontSize: ['0.9375vw', '1.05rem', '1.05rem', '0.9375vw'],
                                    ':hover': { 
                                        color: 'primary' 
                                    },                                   
                                }}
                                href="tel:+380443376718">
                                    +38 044 337 67 18
                            </a>
                                <p
                                    sx={{
                                        marginTop: '10px',
                                        fontFamily: 'body',
                                        fontWeight: 'body',
                                        fontSize: ['0.7291vw', '14px', '14px', '0.7291vw'],
                                        paddingBottom: '20px',
                                        borderBottom: '1px solid #e5e5e5' 
                                    }}
                                
                                >
                                     г. Киев<br/> ул. Шота Руставели 30Б
                                </p>
                            <a 
                                 sx={{
                                    marginTop: '20px',
                                    color: '#0D2344',
                                    fontFamily: 'heading',
                                    fontWeight: '700',
                                    fontSize: ['0.9375vw', '1.05rem', '1.05rem', '0.9375vw'],
                                    ':hover': { 
                                        color: 'primary' 
                                    }, 
                                }}
                            href="tel:+380639825682">
                                +38 063 982 56 82
                            </a>
                            <p
                                sx={{
                                    marginTop: '10px',
                                    fontFamily: 'body',
                                    fontWeight: 'body',
                                    fontSize: ['0.7291vw', '14px', '14px', '0.7291vw'],
                                }}
                            
                            > г. Кривой Рог<br/> ул. Героев АТО 30в</p>
                            </nav>

                        
                       
                            <Link 
                                sx={{ display: ['none', 'block', 'none'] }}
                            to="/contact">    
                            <span
                                sx={{
                                    display: 'flex', marginRight: ['5px', '0', '5px'], marginTop: ['5px', '0', '5px'], 
                                    color: ['#0D2344', 'white','#0D2344'],
                                    padding: ['0', '9px', '0'],
                                    border: ['0', '1px solid rgba(255, 255, 255, 0.2)', '0'],
                                    borderRadius: ['inherit', '100%', 'inherit']                        
                                 }}
                            >
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3859 11.967C14.4156 12.2104 14.3463 12.4227 14.1782 12.6025L12.2069 14.7C12.1179 14.8061 12.002 14.896 11.8588 14.97C11.7156 15.0443 11.5745 15.0917 11.4365 15.1131C11.4265 15.1131 11.3968 15.1157 11.3475 15.1213C11.2982 15.1264 11.234 15.1294 11.155 15.1294C10.9673 15.1294 10.6634 15.095 10.2435 15.0262C9.82331 14.9574 9.30959 14.7879 8.70203 14.5176C8.09447 14.2473 7.40518 13.8422 6.63445 13.3022C5.86372 12.7622 5.04365 12.0203 4.17424 11.0778C3.48252 10.3469 2.90947 9.64753 2.45509 8.98027C2.0004 8.31301 1.63502 7.69606 1.35833 7.12908C1.08165 6.56243 0.873982 6.04868 0.735942 5.58783C0.597598 5.12698 0.503755 4.72974 0.454412 4.39612C0.405068 4.06249 0.385089 3.80026 0.395078 3.60975C0.404765 3.41892 0.409912 3.31312 0.409912 3.29202C0.429589 3.14371 0.474088 2.9928 0.543411 2.83929C0.612734 2.68578 0.696588 2.56116 0.795275 2.46607L2.76598 0.351675C2.90433 0.203684 3.06235 0.129364 3.24035 0.129364C3.3687 0.129364 3.48252 0.168958 3.58121 0.248471C3.6799 0.327984 3.76405 0.425995 3.83307 0.542506L5.41903 3.76813C5.50803 3.93754 5.53255 4.12318 5.49319 4.32439C5.45384 4.52561 5.36968 4.69534 5.24133 4.83295L4.5151 5.61153C4.49543 5.63294 4.47787 5.66735 4.46334 5.71473C4.44851 5.76244 4.44094 5.80236 4.44094 5.83384C4.48029 6.05647 4.56929 6.31059 4.70763 6.59651C4.8263 6.85095 5.00914 7.16056 5.25616 7.526C5.50318 7.89143 5.85404 8.31236 6.30842 8.78911C6.75312 9.27658 7.14817 9.65499 7.49418 9.92533C7.83988 10.1954 8.12898 10.394 8.36117 10.5212C8.59335 10.6481 8.77135 10.725 8.89486 10.7516L9.08013 10.7912C9.0998 10.7912 9.1322 10.7831 9.17639 10.7675C9.22089 10.7516 9.25298 10.7331 9.27266 10.712L10.1176 9.79033C10.2956 9.62091 10.5029 9.53588 10.7399 9.53588C10.908 9.53588 11.0415 9.56769 11.1401 9.6313H11.155L14.0154 11.4429C14.2227 11.5805 14.3463 11.7551 14.3859 11.967Z" fill="currentColor"/>
                                </svg>
                            </span>
                            </Link>
                       
                        </div>
                    </div>
                    <div>            
                      <div
                        sx={{
                      color: 'rgba(255, 255, 255, 0.65)',
                      fontFamily: '"Fira Sans", sans-serif',
                      fontWeight: '300',
                      fontSize: ['0.7291vw', '14px', '14px', '0.7291vw'],
                      textAlign: 'center'
                    }}
                      >
                        <div dangerouslySetInnerHTML={{ __html: featuredImage.description }} />

                      </div>
                      <div
                        sx={{
                      display: 'flex',
                      flexDirection: ['row', 'column', 'row'],
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: ['1.4062vw', '1.8vh',  '1.8vh', '1.4062vw']
                    }}
                      >
                        <div
                        sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: ['initial', '100%', 'initial'],
                      }}
                      >
                        <YoutubeModal image={featuredImage} school={school} youtube={youtube} />                                                       
                      </div>
                        <div
                        sx={{
                        display: ['block', 'none', 'block']
                      }}
                      >
                        <FormModalChildren />
                      </div>
                      </div>
                    </div>  
                  </div>
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0, y: 40}}
                    animate={{ scale: 1, opacity: 1, y: 0}} 
                    transition={{ duration: 0.5}}
                  > 
                    <FluidImage
                      image={featuredImage} 
                      sx={{
                  display: 'block',
                  left: ['-10px', 0, '-10px'],
                  right: ['-20px', 0, '-20px'],
                  top: ['-10px', 0, '-10px'],                
                  position: 'absolute !important',
                  zIndex: '-1',
                  ' &:before ' : {
                    content: '""',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    background: 'linear-gradient(0deg, #212121 0%, rgba(0, 0, 0, 0.12) 39.91%, rgba(0, 0, 0, 0.33) 85.14%)',
                    zIndex: '1'
                  },
                }}
                    />
                  </motion.div>
                </div>
                <div>
                  <Gallery image={image} />
                </div>
              </motion.div>
          
              <motion.div
                initial={{ x: 100, opacity: 0}}
                animate={{ x: 0, opacity: 1}} 
                transition={{ delay: 0.45, duration: 0.45 }} 
                sx={{
                width:  ['50%', '100%', '100%', '50%', '50%'],
                position: ['fixed', 'relative', 'relative', 'fixed'],
                top: 0,
                right: 0,
                bottom: 0,
                bg: 'white',
                borderTopLeftRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                borderTopRightRadius: [0, '10px', '10px', 0], 
                zIndex: '2',        
                ' &:after' : {
                  content: '""',
                  bg: '#EEEEEE',
                  display: 'block',
                  position: 'absolute',
                  width: ['1.0416vw', 'initial', 'initial', '1.0416vw'],
                  height: ['initial', '20px', '20px', 'initial'],
                  top: ['1.5625vw', '-20px', '-20px', '1.5625vw'],
                  left: ['-1.0416vw', '20px', '20px', '-1.0416vw'],
                  right: ['initial', '20px', '20px', 'initial'],
                  zIndex: '-1',
                  bottom: 0,
                  borderTopLeftRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                  borderTopRightRadius: [0, '10px', '10px', 0],
              },
              }}
              >
          
            
                <motion.div
                  initial='initial'
                  animate='animate'             
                  sx={{
                  overflowY: ['scroll', 'initial', 'scroll'],
                  overflowX: ['hidden', 'initial', 'hidden'],
                  position: 'relative',
                  height: '100%',
                  padding: ['2.0833vw', '20px', '20px', '2.0833vw'],
                  marginRight: ['3px', '0', '3px'],
                  "::-webkit-scrollbar": {                      
                    width: '8px',
                    
                  },
                  "::-webkit-scrollbar-thumb": {                      
                    background: 'rgba(83, 199, 3, 0.6);',
                    borderRadius: '10px'
                    
                  },
                }}
                >
              
                  <motion.div 
                    variants={stagger}
                  >
                    <motion.div
                      className="childern-title"
                      variants={fadeInUp}
                      sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start'
              }}
                    >
                      <Styled.h1
                        sx={{
                          textTransform: 'uppercase',
                          color: 'black',
                          fontSize: ['calc(14*0.25vw)', '2rem', 'calc(14*0.25vw)'],
                          margin: 0,
                          flexBasis: '85%',
                          lineHeight: '1.25',
                        }}
                        dangerouslySetInnerHTML={{ __html: title }} />
                      <div className={flag} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0,}}
                      animate={{ opacity: 1,}} 
                      transition={{ delay: 0.7}} 
                      sx={{                
                      height: ['1.1979vw', '23px', '23px', '1.1979vw'],
                      marginTop: ['1.3020vw', '25px', '25px', '1.3020vw'],                             
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      marginBottom: ['1.5625vw', '2.95vh', '2.95vh', '1.5625vw'],                 
                    }}
                    >
                      <h3 sx={{ fontSize: ['0.625vw', '12px', '12px', '0.625vw'], textTransform: 'uppercase', fontWeight: '700', fontFamily: 'heading', padding: ['0.2083vw 0.5208vw 0.2083vw 0.5208vw', '4px 10px 4px 10px', '4px 10px 4px 10px', '0.2083vw 0.5208vw 0.2083vw 0.5208vw'], background: 'linear-gradient(39.9deg,#0B6CFE 22.83%,#458FFF 79.5%)', color: 'white', borderRadius: '32px', letterSpacing: '0.018rem'  }}>{school}</h3>
              
                    </motion.div> 
                    <motion.div
                      variants={fadeInUp}
                      sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: ['1.5625vw', '2.95vh', '2.95vh', '1.5625vw'],
                      paddingTop: ['1.5625vw', '2.95vh', '2.95vh', '1.5625vw'], 
                      fontFamily: 'body',
                      fontWeight: '500',
                      borderTop: '1px solid #e5e5e5',        
                    }}
                    >
                      {props.pageContext.categories.nodes.map((category) => { 
                return (
                  <div
                    key={category.slug} 
                    sx={{display: 'block', borderRadius: '100px', bg: 'rgba(11, 108, 254, 0.05)', marginRight: '2.08vh'          
                  }}
                  >
                    <Link
                      sx={{
                     color: 'primary', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: ['0.78125vw', '15px', '15px', '0.78125vw'], fontSize: ['0.8333vw', '16px', '16px', '0.8333vw']
                    }} 
                      to={`/${category.uri}`}
                    >
                      <span sx={{ marginRight: '8px' }} className={`children-${category.slug}`} />
                      {category.name}
                    </Link>
                  </div>
                )
              })}
                      <ShareModal title={title} uri={uri} />     
                    </motion.div>
                    <motion.div
                      variants={fadeInUp}
                      sx={{                         
                marginBottom: '3.5vh'
              }}
                    >
                      <div 
                        className="content"
                        sx={{
                fontFamily: 'body',
              }}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    </motion.div>
                    <motion.div
                      variants={fadeInUp}
                      sx={{
                      display: 'flex',
                      flexDirection: ['row', 'column', 'row'],
                      justifyContent: 'flex-start',
                      paddingBottom: ['1.7187vw', '3.25vh', '3.25vh', '1.7187vw'],
                      paddingTop: ['1.7187vw', '3.255vh', '3.25vh', '1.7187vw'],            
                      borderBottom: '1px solid #E5E5E5',
                      borderTop: '1px solid #E5E5E5'
                    }}
                    >       
                      <div sx={{display: 'flex', fontSize: ['0.8333vw', '16px', '16px', '0.8333vw'], alignItems: 'center', paddingTop: ['0.2604vw', '5px', '5px', '0.2604vw'], paddingBottom: ['0.2604vw', '5px', '5px', '0.2604vw'], paddingRight: ['0.7812vw', '15px', '15px', '0.7812vw'], borderRadius: '100px', border: 'solid 1px #E5E5E5', marginRight: ['2.08vh', 0, '2.08vh'], fontFamily: 'body'}}>
                        <div sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: ['2.0833vw', '40px', '40px','2.0833vw'],
                              height: ['2.0833vw', '40px', '40px','2.0833vw'], 
                              marginLeft: ['0.2604vw', '5px', '5px', '0.2604'], 
                              marginRight: ['0.7812vw', '15px', '15px', '0.7812vw'], 
                              background: 'linear-gradient(226.43deg, #8FD300 27.55%, #00B707 132.85%)', 
                              borderRadius: '100px',
                              boxShadow: '0px 6px 15px rgba(4, 175, 16, 0.57)',
                              "&>svg": {
                                display: 'flex',
                                width: ['1.0416vw', '20px', '20px', '1.0416vw']
                            }, 
                            }}
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.83204 0C4.24625 0 4.58204 0.335786 4.58204 0.75V2.17633H15.4131V0.75C15.4131 0.335786 15.7489 0 16.1631 0C16.5773 0 16.9131 0.335786 16.9131 0.75V2.17633H17.2462C18.765 2.17633 19.9962 3.40755 19.9962 4.92633V17.2492C19.9962 18.768 18.765 19.9992 17.2462 19.9992H2.75C1.23122 19.9992 0 18.768 0 17.2492V4.92633C0 3.40755 1.23122 2.17633 2.75 2.17633H3.08204V0.75C3.08204 0.335786 3.41783 0 3.83204 0ZM4.58204 3.67633H15.4131V4.01458C15.4131 4.42879 15.7489 4.76458 16.1631 4.76458C16.5773 4.76458 16.9131 4.42879 16.9131 4.01458V3.67633H17.2462C17.9366 3.67633 18.4962 4.23598 18.4962 4.92633V17.2492C18.4962 17.9396 17.9366 18.4992 17.2462 18.4992H2.75C2.05965 18.4992 1.5 17.9396 1.5 17.2492V4.92633C1.5 4.23598 2.05964 3.67633 2.75 3.67633H3.08204V4.01458C3.08204 4.42879 3.41783 4.76458 3.83204 4.76458C4.24625 4.76458 4.58204 4.42879 4.58204 4.01458V3.67633ZM4.58204 8.3679C4.58204 7.95369 4.24625 7.6179 3.83204 7.6179C3.41783 7.6179 3.08204 7.95369 3.08204 8.3679V8.91174C3.08204 9.32595 3.41783 9.66174 3.83204 9.66174C4.24625 9.66174 4.58204 9.32595 4.58204 8.91174V8.3679ZM3.83204 13.0585C4.24625 13.0585 4.58204 13.3943 4.58204 13.8085V14.3523C4.58204 14.7665 4.24625 15.1023 3.83204 15.1023C3.41783 15.1023 3.08204 14.7665 3.08204 14.3523V13.8085C3.08204 13.3943 3.41783 13.0585 3.83204 13.0585ZM16.9131 8.3679C16.9131 7.95369 16.5773 7.6179 16.1631 7.6179C15.7489 7.6179 15.4131 7.95369 15.4131 8.3679V8.91174C15.4131 9.32595 15.7489 9.66174 16.1631 9.66174C16.5773 9.66174 16.9131 9.32595 16.9131 8.91174V8.3679ZM16.1631 13.0585C16.5773 13.0585 16.9131 13.3943 16.9131 13.8085V14.3523C16.9131 14.7665 16.5773 15.1023 16.1631 15.1023C15.7489 15.1023 15.4131 14.7665 15.4131 14.3523V13.8085C15.4131 13.3943 15.7489 13.0585 16.1631 13.0585ZM12.8033 8.3679C12.8033 7.95369 12.4675 7.6179 12.0533 7.6179C11.639 7.6179 11.3033 7.95369 11.3033 8.3679V8.91174C11.3033 9.32595 11.639 9.66174 12.0533 9.66174C12.4675 9.66174 12.8033 9.32595 12.8033 8.91174V8.3679ZM7.9424 7.6179C8.35662 7.6179 8.6924 7.95369 8.6924 8.3679V8.91174C8.6924 9.32595 8.35662 9.66174 7.9424 9.66174C7.52819 9.66174 7.1924 9.32595 7.1924 8.91174V8.3679C7.1924 7.95369 7.52819 7.6179 7.9424 7.6179ZM8.6924 13.8085C8.6924 13.3943 8.35662 13.0585 7.9424 13.0585C7.52819 13.0585 7.1924 13.3943 7.1924 13.8085V14.3523C7.1924 14.7665 7.52819 15.1023 7.9424 15.1023C8.35662 15.1023 8.6924 14.7665 8.6924 14.3523V13.8085ZM10.9981 10.8817C10.0316 10.8817 9.24807 11.6652 9.24807 12.6317V14.9844C9.24807 15.9509 10.0316 16.7344 10.9981 16.7344H13.1084C14.0748 16.7344 14.8584 15.9509 14.8584 14.9844V12.6317C14.8584 11.6652 14.0748 10.8817 13.1084 10.8817H10.9981ZM10.7481 12.6317C10.7481 12.4936 10.86 12.3817 10.9981 12.3817H13.1084C13.2464 12.3817 13.3584 12.4936 13.3584 12.6317V14.9844C13.3584 15.1225 13.2464 15.2344 13.1084 15.2344H10.9981C10.86 15.2344 10.7481 15.1225 10.7481 14.9844V12.6317Z" fill="white" />
                      </svg>
                      </div>
                        <span sx={{color: '#7E7E7E', marginRight: '5px', }}><FormattedMessage id="per" /></span>
                        <span>{time}</span>
                      </div>
                      <div sx={{
                        display: 'flex', 
                        fontSize: ['0.8333vw', '16px', '16px', '0.8333vw'],
                        alignItems: 'center', 
                        paddingTop: ['0.2604vw', '5px', '5px', '0.2604vw'], 
                        paddingBottom: ['0.2604vw', '5px', '5px', '0.2604vw'], 
                        paddingRight: ['0.7812vw', '15px', '15px', '0.7812vw'], 
                        borderRadius: '100px', 
                        border: 'solid 1px #E5E5E5', 
                        fontFamily: 'body',
                        marginTop: [0, '15px', 0]
                      }}
                      >
                        <div sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center', 
                          width: ['2.0833vw', '40px', '40px','2.0833vw'],
                          height: ['2.0833vw', '40px', '40px','2.0833vw'],  
                          marginLeft: '5px', 
                          marginRight: '15px', 
                          background: 'linear-gradient(226.43deg, #8FD300 27.55%, #00B707 132.85%)', 
                          borderRadius: '100px',
                          boxShadow: '0px 6px 15px rgba(4, 175, 16, 0.57)',
                          "&>svg": {
                            display: 'flex',
                            width: ['0.9895vw', '19px', '19px', '0.9895vw']
                        }, 
                        }}
                      >
                        <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.1862 2.3651C11.344 2.12282 11.4361 1.83051 11.4361 1.51579C11.4361 0.678642 10.7842 0 9.97994 0C9.17571 0 8.52376 0.678642 8.52376 1.51579C8.52376 1.8302 8.61572 2.12226 8.77318 2.3644C6.45481 2.6876 4.79981 3.93554 3.7092 5.49016C2.51495 7.19251 1.9959 9.25669 1.95204 10.8936C1.32896 12.1209 0.978027 13.5098 0.978027 14.9788C0.978027 19.9591 5.0066 23.9994 9.97971 23.9994C14.9528 23.9994 18.9814 19.9591 18.9814 14.9788C18.9814 13.4898 18.6208 12.083 17.9817 10.8435C17.7729 9.26993 17.2688 7.21088 16.1188 5.50213C15.0712 3.94551 13.4899 2.69058 11.1862 2.3651ZM8.49371 6.86584C8.88819 5.63357 9.30109 4.93277 9.70498 4.35215C10.1089 4.93277 10.5218 5.63357 10.9162 6.86584C11.0502 7.28429 11.181 7.99231 11.2785 8.7449C11.3566 9.34815 11.4079 9.93725 11.4247 10.3691H7.98529C8.00204 9.93725 8.05333 9.34815 8.13146 8.7449C8.22892 7.99231 8.35976 7.28429 8.49371 6.86584ZM12.3448 6.40852C11.9954 5.3169 11.5811 4.5107 11.1932 3.88506C12.9109 4.18957 14.0693 5.14349 14.8744 6.33964C15.6994 7.56548 16.1537 9.05398 16.39 10.3691H12.9256C12.9087 9.86421 12.8502 9.2022 12.7661 8.55226C12.6663 7.78169 12.5221 6.96219 12.3448 6.40852ZM6.48435 10.3691H3.48764C3.61561 9.08865 4.06766 7.59106 4.93717 6.35161C5.67383 5.30153 6.70868 4.43402 8.12904 4.02899C7.76703 4.63329 7.38836 5.39881 7.06513 6.40852C6.88789 6.96219 6.74367 7.78169 6.64388 8.55226C6.55971 9.2022 6.50126 9.86421 6.48435 10.3691ZM5.13835 11.8696H3.14691C2.71746 12.8164 2.47803 13.8687 2.47803 14.9788C2.47803 19.134 5.83827 22.4994 9.97971 22.4994C14.1212 22.4994 17.4814 19.134 17.4814 14.9788C17.4814 13.8687 17.242 12.8164 16.8125 11.8696H14.8215C14.798 11.9433 14.7698 12.0352 14.7347 12.1512C14.6352 12.48 14.49 12.9372 14.1791 13.3733C13.5098 14.3126 12.2791 14.9007 9.97991 14.9007C7.68069 14.9007 6.45001 14.3126 5.78068 13.3733C5.46986 12.9372 5.32461 12.48 5.22508 12.1512C5.18997 12.0352 5.16185 11.9433 5.13835 11.8696ZM6.70846 11.8696C6.78786 12.1149 6.87132 12.3191 7.00226 12.5028C7.26904 12.8772 7.91059 13.4007 9.97991 13.4007C12.0492 13.4007 12.6908 12.8772 12.9576 12.5028C13.0885 12.3191 13.172 12.1149 13.2514 11.8696H6.70846ZM6.58184 15.4238C6.99605 15.4238 7.33184 15.7596 7.33184 16.1738V17.1844C7.33184 17.5986 6.99605 17.9344 6.58184 17.9344C6.16763 17.9344 5.83184 17.5986 5.83184 17.1844V16.1738C5.83184 15.7596 6.16763 15.4238 6.58184 15.4238ZM14.1276 16.1738C14.1276 15.7596 13.7918 15.4238 13.3776 15.4238C12.9634 15.4238 12.6276 15.7596 12.6276 16.1738V17.1844C12.6276 17.5986 12.9634 17.9344 13.3776 17.9344C13.7918 17.9344 14.1276 17.5986 14.1276 17.1844V16.1738ZM8.34861 18.4773C8.75137 18.3806 9.15629 18.6286 9.25302 19.0314C9.29561 19.2087 9.36843 19.2933 9.44411 19.345C9.53199 19.405 9.69487 19.4671 9.97994 19.4671C10.265 19.4671 10.4279 19.405 10.5158 19.345C10.5914 19.2933 10.6643 19.2087 10.7069 19.0314C10.8036 18.6286 11.2085 18.3806 11.6113 18.4773C12.014 18.574 12.2621 18.9789 12.1654 19.3817C12.0462 19.8781 11.7792 20.2987 11.3614 20.5839C10.9558 20.8607 10.4715 20.9671 9.97994 20.9671C9.48838 20.9671 9.00406 20.8607 8.59846 20.5839C8.18066 20.2987 7.91371 19.8781 7.79449 19.3817C7.69776 18.9789 7.94585 18.574 8.34861 18.4773Z" fill="white" />
                      </svg>
                      </div>
                        {age}
                      </div>         
                    </motion.div>
                    <motion.div
                      variants={fadeInUp}
                      sx={{
                        paddingBottom: ['1.7187vw', '3.25vh', '3.25vh', '1.7187vw'],
                        paddingTop: ['1.7187vw', '3.255vh', '3.25vh', '1.7187vw'],
                        borderBottom: '1px solid #E5E5E5',
                        fontFamily: 'body',
                        lineHeight: '1.45rem',             
                      }}
                    > 
                      <Styled.h2 sx={{ color: 'black', marginBottom: '2.48vh', fontSize: ['1.25vw', '24px', '24px', '1.25vw'] }}><FormattedMessage id="langschool" /></Styled.h2>
                      <div className="content" dangerouslySetInnerHTML={{ __html: aboutSchool }} />
                    </motion.div>

            

                    <motion.div
                      variants={fadeInUp}
                      sx={{
                        paddingBottom: ['1.7187vw', '3.25vh', '3.25vh', '1.7187vw'],
                        paddingTop: ['1.7187vw', '3.255vh', '3.25vh', '1.7187vw'],
                        borderBottom: '1px solid #E5E5E5',
                        fontFamily: 'body',
                        lineHeight: '1.45rem',            
                      }}
                    > 
                      <Styled.h2 sx={{ color: 'black', marginBottom: '2.48vh', fontSize: ['1.25vw', '24px', '24px', '1.25vw'] }}><FormattedMessage id="home" /></Styled.h2>
                      <div className="content" dangerouslySetInnerHTML={{ __html: apartments }} />
                    </motion.div>
            
                    <motion.div
                      variants={fadeInUp}
                      sx={{
                        paddingBottom: ['1.7187vw', '3.25vh', '3.25vh', '1.7187vw'],
                        paddingTop: ['1.7187vw', '3.255vh', '3.25vh', '1.7187vw'],
                        borderBottom: '1px solid #E5E5E5',
                        fontFamily: 'body',
                        lineHeight: '1.45rem',      
                      }}
                    > 
                      <Styled.h2 sx={{ color: 'black', marginBottom: '2.48vh', fontSize: ['1.25vw', '24px', '24px', '1.25vw'] }}><FormattedMessage id="food" /></Styled.h2>
                      <div className="content" dangerouslySetInnerHTML={{ __html: food }} />
                    </motion.div>  
            
            
                    <motion.div
                      variants={fadeInUp}
                      sx={{
                        paddingBottom: ['1.7187vw', '3.25vh', '3.25vh', '1.7187vw'],
                        paddingTop: ['1.7187vw', '3.255vh', '3.25vh', '1.7187vw'],
                        fontFamily: 'body',
                        lineHeight: '1.45rem',    
                      }}
                    > 
                      <Styled.h2 sx={{ color: 'black', marginBottom: '2.48vh', fontSize: ['1.25vw', '24px', '24px', '1.25vw'] }}><FormattedMessage id="prog" /></Styled.h2>
                      <div className="content" dangerouslySetInnerHTML={{ __html: program }} />
                    </motion.div> 
                    <motion.div
                      variants={fadeInUp}
                      sx={{              
                        fontFamily: '"Fira Sans", sans-serif',
                        bg: '#00969F',
                        borderTopRightRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                        borderTopLeftRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                        padding: ['1.5625vw', '30px', '30px', '1.5625vw']   
                      }}
                    >
                      <Styled.h2 sx={{ color: 'white', marginBottom: '2.48vh', fontSize: ['1.25vw', '24px', '24px', '1.25vw'] }}><FormattedMessage id="progincl" /></Styled.h2>
                      {included.map((includ) => { 
             

              if (!includ.length) {
                return (<p>Something went wrong or no data...</p>)
              }

              return (
                <li
                  key={includ}
                  sx={{
                  listStyle: 'none',
                  color: 'white',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                  paddingBottom: ['0.625vw', '12px', '12px', '0.625vw'],
                  paddingTop: ['0.625vw', '12px', '12px', '0.625vw'],
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  fontSize: ['0.8333vw', '16px', '16px', '0.8333vw']
                }}
                >
                  <span
                    sx={{
                      width: '5px',
                      height: '5px',
                      bg: 'white',
                      display: 'block',
                      borderRadius: '5px',
                      marginRight: ['1.3020vw', '25px', '25px', '1.3020vw'],
                      boxShadow: '0 0 0 5px rgba(255, 255, 255, 0.3)'
                    }}
                  />  
                  {includ}
                </li>
            )
            })}
                    </motion.div>            
                    <motion.div
                      variants={fadeInUp}
                      sx={{               
                        marginBottom: ['1.7187vw', '3.25vh', '3.25vh', '1.7187vw'],
                        fontFamily: '"Fira Sans", sans-serif',
                        border: '2px solid #0B6CFE',
                        padding: ['1.5625vw', '30px', '30px', '1.5625vw'],
                        borderBottomRightRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                        borderBottomLeftRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],                    
                      }}
                    >
                      <Styled.h2 sx={{ color: '#0B6CFE', marginBottom: '1.48vh', fontSize: ['0.8333vw', '16px', '16px', '0.8333vw'] }}><FormattedMessage id="doppay" /></Styled.h2>
                      <div sx={{
                        display: 'flex',
                        flexDirection: 'column', 
                        alignItems: 'flex-start'
                      
                      }}
                      >
                        {pay.map((pays) => { 
                if (!pays.length) return null
                return (
                  <li
                    key={pays}
                    sx={{
                    listStyle: 'none',
                    color: '#0B6CFE',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                    paddingTop: '12px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: ['1.0416vw', '20px', '20px', '1.0416vw'],
                    fontSize: ['0.8333vw', '16px', '16px', '0.8333vw']
                  }}
                  >
                    <span
                      sx={{
                    display: 'flex',
                    marginRight: '10px',
                    width: ['0.8333vw', '16px', '16px', '0.8333vw']
                  }}
                    >
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9671 14.5145L8.29687 9.84424L3.6267 14.5145C2.9793 15.1618 1.92974 15.1618 1.28234 14.5145C0.635053 13.8671 0.635053 12.8176 1.28234 12.1702L5.95263 7.5L1.28234 2.82982C0.635053 2.18242 0.635053 1.13287 1.28234 0.485466C1.92974 -0.161822 2.9793 -0.161822 3.6267 0.485466L8.29687 5.15576L12.9671 0.485466C13.6145 -0.161822 14.664 -0.161822 15.3114 0.485466C15.9587 1.13287 15.9587 2.18242 15.3114 2.82982L10.6411 7.5L15.3114 12.1702C15.9587 12.8176 15.9587 13.8671 15.3114 14.5145C14.664 15.1618 13.6145 15.1618 12.9671 14.5145V14.5145Z" fill="#0B6CFE" />
                      </svg>
                    </span>  
                    {pays}
                  </li>
              )
              })}
                      </div>
                    </motion.div>        
                    <motion.div
                      variants={fadeInUp}
                      sx={{
                        paddingBottom: ['1.7187vw', '3.25vh', '3.25vh', '1.7187vw'],
                        paddingTop: ['1.7187vw', '3.255vh', '3.25vh', '1.7187vw'],
                        fontFamily: '"Fira Sans", sans-serif',       
                      }}
                    >
                      <FormModalChildren />
                    </motion.div>  
           
                  </motion.div>
                </motion.div>
              </motion.div>
            </div> 
          </div>
        </LayoutChildren>
      </motion.div>
    </AnimatePresence>
   
  )
}

export default createChildrens
