/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import Header from '../organisms/header/Header'
import Footer from '../organisms/footer/Footer'
import HeaderUa from '../organisms/header/HeaderUa'
import Toolbar from '../organisms/toolbar/Toolbar'
import ToolbarUa from '../organisms/toolbar/ToolbarUa'
import Container from '../particles/Container'
import Chat from '../molecules/Chat'
import 'fira-sans-cyrillic'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { useStaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl'
import ru from '../../data/messages/ru';
import ua from '../../data/messages/ua';
import 'intl';

const messages = { ru, ua };

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

const Layout = ({ children, location, i18nMessages }) => {  
    const { site } = useStaticQuery(
      graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }      
            }
          }
        }
      `
      )
      
        const url = location.pathname;
        const { langs, defaultLangKey } = site.siteMetadata.languages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, url);
        const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
     

        const loc = location.pathname;
        
        const langK = loc.slice(1, 3);
      

        const lan = langK === 'ua';
        
        return (
          <IntlProvider
            locale={langKey}
            messages={messages[langKey]}
          >
    <AnimatePresence exitBeforeEnter>
    <div
      sx={{
        position: 'relative',
        background: 'linear-gradient(52.25deg, rgba(171, 218, 238, 0.5) 40.16%, rgba(91, 180, 218, 0.5) 100.32%)',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: ['100vh', '100%', '100vh'],
        overflow: 'hidden',
        overflowY: ['hidden', 'initial', 'hidden']
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

      {lan ? (
           <HeaderUa langs={langsMenu}  homeLink={homeLink}/>
        ) : (
          <Header langs={langsMenu}  homeLink={homeLink} />
      )}
        
      </motion.div>  
      
      <motion.div
        variants={stagger}
        exit={{ opacity: 0 }}
        
      >  
      <motion.div
        
        variants={fadeIn}
        
        sx={{       
          minHeight: 'calc(100vh -  4.8458vw)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >    
      {children}
      <Footer />
      </motion.div> 
      </motion.div>
      </motion.div>
      <Chat />
      {lan ? (
           <ToolbarUa langs={langsMenu}  homeLink={homeLink}/>
        ) : (
          <Toolbar langs={langsMenu}  homeLink={homeLink} />
      )}
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
          zIndex: '0',
          transform: 'skew(6deg)',
          display: ['block', 'none', 'block']
        }}
      ></motion.div>
      
      
        
    </div>
    </AnimatePresence>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
