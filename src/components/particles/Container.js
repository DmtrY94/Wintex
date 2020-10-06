/** @jsx jsx */
import React from "react"
import { jsx } from 'theme-ui'

// example Container component
export default props =>
  <div
    {...props}
    sx={{     
      
      position: 'relative',
      zIndex: '2',
      overflowY: ['scroll', 'initial', 'scroll'],
      overflowX: 'hidden',
      height: '100%',
      "::-webkit-scrollbar": {                      
        width: '0',
        
      },
    }}
  />

