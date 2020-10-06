/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { motion, AnimatePresence } from 'framer-motion'


import Bus from "../../images/london-bus.svg"
import Big from "../../images/london_bigb.svg"

import Man from "../../images/london_man.svg"

const StikerLayout = () => {
    return ( 
        <div
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden'
            }}
        >   

            
         
            <div 
                className="int-particle-item p1"
            >     
                <div className="int-sprites p1-bus"></div>     
            </div>
            <div 
                className="int-particle-item p2"
            >     
                <div className="int-sprites p2-tel"></div>     
            </div>
            <div 
                className="int-particle-item p3"
            >     
                <div className="int-sprites p3-bigb"></div>     
            </div>
            <div 
                className="int-particle-item p4"
            >     
                <div className="int-sprites p4-man"></div>     
            </div>
        </div>
    )

}   
export default StikerLayout