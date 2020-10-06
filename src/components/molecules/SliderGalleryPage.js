/** @jsx jsx */
import React, { Component, Fragment, useState } from 'react'
import { Link } from 'gatsby'
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
 



function  SliderGalleryPage({PageGallery})  {

    

        const [swiper, updateSwiper] = useState(null);
        const goNext = () => {
          if (swiper !== null) {
            swiper.slideNext();
          }
        };
        const goPrev = () => {
          if (swiper !== null) {
            swiper.slidePrev();
          }
        }
        
        const params = {
            containerClass: 'container-swiper-list',
            spaceBetween: 40,
            slidesPerView: 3,
            mousewheel: true,
            breakpoints: {
              1920: {
                slidesPerView: 2,
                spaceBetween: 40
              },     
              1600: {
                slidesPerView: 2,
                spaceBetween: 40
              },  
              1280: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1060: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              320: {
                slidesPerView: 3,
                spaceBetween: 25
              }
            }
          }

    

    return (    
        
        <div
            sx={{
                width: '100%',
                overflow: 'hidden'
            }}
        >
             <Swiper 
                      getSwiper={updateSwiper}
                      sx={{
                            marginLeft: ['5.208vw', '30px', '5vh', '5.208vw'],
                            marginRight: ['calc(5.208vw - 4.5vh)', 'calc(30px - 4.5vh)', 'calc(5.208vw - 4.5vh)'],
                            marginBottom: '2vh',
                            width: '100%'
                        }}
                      {...params}
                    >
        
            {PageGallery.pagegallery.map((images) => (
              
              
                
                 
               
              <div key={images.id}
                className="pagephoto"
                sx={{
                  display: 'block',
                  height: ['45.33vh', '21.6vh', '45.33vh'],
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
            </Swiper>
         </div>
        )
    }



    

    
    export default SliderGalleryPage