/** @jsx jsx */
import React from 'react';
import { jsx, Styled } from 'theme-ui'
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

const SelectedLanguage = (props) => {
  const links = props.langs.map(lang => (
    <Link
      to={lang.link}
      key={lang.langKey}
      sx={{
        color: '#0D2344',
        fontFamily: 'heading',
        fontWeight: '700',
        textTransform: 'uppercase',
        fontSize: ['calc(3.5*0.25vw)', '1.25rem', 'calc(3.5*0.25vw)',],
      }}
    >
      <li
        sx={{
          marginRight: '5px'
        }}
        selected={lang.selected}
      >
        {lang.langKey}
      </li>
    </Link>
  )
  );

  return (
    <div
      sx={{
        marginRight: '20px'
      }}
    >
      <ul
        sx={{
          display: 'flex',
          flexDirection: 'row',
          listStyle: 'none'
        }}
      >
        {links}
      </ul>
    </div>
  );
};

SelectedLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectedLanguage;