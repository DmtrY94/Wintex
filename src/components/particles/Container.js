/** @jsx jsx */
import React from "react"
import { jsx } from 'theme-ui'

// example Container component
export default props =>
  <div
    {...props}
    sx={{     
      
      position: 'absolute',
      zIndex: '2',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      overflowY: ['scroll', 'initial', 'scroll'],
      overflowX: 'hidden',
      "::-webkit-scrollbar": {                      
        width: '0',
        
      },
    }}
  />

