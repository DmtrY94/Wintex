/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import Container from '../particles/Container'
import 'fira-sans-cyrillic'
import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl';
import ru from '../../data/messages/ru';
import ua from '../../data/messages/ua';
import 'intl';

const messages = { ru, ua };

import './all.sass'

const LayoutChildren = ({ children, location, i18nMessages }) => {
  const { site } = useStaticQuery(
    graphql`
      query LayoutChildrenQuery {
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
        
        const lang = langKey === 'ru' ? '' : 'ua'
        
        return (
    <IntlProvider
            locale={langKey}
            messages={messages[langKey]}
          >
    <motion.div >  
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
          
        {children}
        
      </div>
    </motion.div>
    </IntlProvider>
      )
}

LayoutChildren.propTypes = {
  children: PropTypes.func,
}


export default LayoutChildren
