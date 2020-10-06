/** @jsx jsx */
import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { jsx, Styled } from "theme-ui"

import Canada from "../../images/canada_big.svg"
 
class ParticlesCountry extends Component {
  
    render() {
        return (
            <div
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: '3'
                }}
            >
            <Particles
        params={{
	    "particles": {
	        "number": {
	            "value": 8,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	                "circle"
	            ],
	            "image": [
	                {
	                    "src": Canada,
	                    "height": 20,
	                    "width": 23
	                }
	                
	            ]
	        },
	        "color": {
	            "value": "#0B6CFE"
	        },
	        "size": {
	            "value": 10,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
    </div>

        )
    }
 
}

export default ParticlesCountry