/** @jsx jsx */
import React, { Component, Fragment } from 'react'
import { jsx, Styled } from "theme-ui"
import Modal from 'react-modal'
import { graphql } from "gatsby"
import { motion  } from "framer-motion"
import Img from "gatsby-image"
import HorizontalScroller from 'react-horizontal-scroll-container'
import Swiper from 'react-id-swiper'


import 'swiper/css/swiper.css';

Modal.setAppElement(`#___gatsby`)
const modalStyles = {
    overlay: {
      backgroundColor: "rgba(185, 185, 185, 0.79)",
    },
    content: {
        position: "relative",
        background: 'none',
        border: 0,
        height: '100%',
        width: '100%',
        left: 0,
        right: 0,
        bottom: 0, 
        top: 0,
        padding: 0,
        
    },
  }



class Instagr extends Component {

    state = {
        modalIsOpen: false,
        selectedImage: 0,
    }
    
    handleClick = (e, index) => {
        e.preventDefault()
        this.setState({ modalIsOpen: !this.state.modalIsOpen, selectedImage: index })
    }

    openModal = () => {
        this.setState({ modalIsOpen: true })
      }

    closeModal = () => {
      this.setState({ modalIsOpen: false })
    }
  
    goBack = () => {
        this.setState({ selectedImage: this.state.selectedImage - 1 })
      }
    
    goForward = () => {
        this.setState({ selectedImage: this.state.selectedImage + 1 })
    }

    selectImage = (e, index) => {
      e.preventDefault()
      this.setState({ selectedImage: index })
  }
  
    render() {
     
      const params = {
        containerClass: 'container-swiper-list',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }


    const { node } = this.props
    const { modalIsOpen, selectedImage } = this.state
    const modalCloseTimeout = 300
    const captions = node[selectedImage].caption.replace(/\r?\n/g, '<br/>')

      return (
        <Fragment>
                    
                    {node.map((nodes, i) => {
                     
                        return (
                         
                      <a
                        
                        
                        key={nodes.id} 
                        onClick={e => this.handleClick(e, i)}                                      

                        sx={{                  
                        willChange: "transform",
                        transition: "transform 0.25s ease-out",
                        paddingBottom: '1vh',
                        cursor: 'pointer',
                        ":focus": {
                            transform: "translateY(-5px)",
                        },
                        ":focus .tags": {
                            bg: "#00000038",
                            visibility: "visible"
                        },
                        ":hover": {
                            transform: "translateY(-5px)",                          
                        },
                        ":hover .tags": {
                            bg: "#00000048",
                            visibility: "visible"
                        },
                        }}
                      >
                        <div 
                            sx={{
                                position: 'relative',
                                display: 'block',
                                marginRight: '3.97vh',
                                willChange: "border-color",
                                ":hover>span": {                      
                                    border: '3px solid white',
                                    borderTopColor: 'white',
                                    borderRightColor: 'white',
                                    borderBottomColor: 'white',
                                    
                                },
                                ":focus>span": {                      
                                    border: '3px solid #white',
                                    borderTopColor: 'white',
                                    borderRightColor: 'white',
                                    borderBottomColor: 'white',
                                    
                                },
                                                             
                            }}
                        >
                            <span
                                sx={{                                  
                                    border: '3px solid #0B6CFE',
                                    display: 'flex',                                  
                                    borderRadius: '50%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'border-color 0.25s ease-in-out',
                                    
                                }}
                            >
                            <Img  fluid={nodes.localFile.childImageSharp.fluid} 
                                objectFit="cover"
                                objectPosition="50% 50%"

                                sx={{
                                    margin: '3px',
                                    padding: '10px',
                                    overflow: 'hidden',
                                    borderRadius: '50%',
                                    width: '65px',
                                    height: '65px',
                                    willChange: "box-shadow",
                                    transition: "box-shadow 0.25s ease-out",
                                    ":hover": {                                 
                                        boxShadow: '0px 14px 15px rgba(0, 41, 102, 0.27)',
                                    },
                                    
                                }}
                            />
                            </span>
                        </div>
                    </a>

                    )
                  })}

    
          <Modal
             isOpen={modalIsOpen}
             style={modalStyles}
             onRequestClose={this.closeModal}
             closeTimeoutMS={modalCloseTimeout}

             onKeyUp={e => this.handleKeyDown(e)}
          >      
            <Styled.root>   
            

                       


            <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
            >
                
                
                
                
                <div
                  sx={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    width: ['initial', '100%', 'initial']
                  }}
                >
                  <HorizontalScroller invert sensibility={50}>
                  {node.map((nodes, i) => {
                      
                      return (
                    <a
                      
                    
                      key={nodes.id} 
                      onClick={e => this.selectImage(e, i)}                                     
                      
                      sx={{                  
                      cursor: 'pointer',
                      paddingBottom: '1vh',
                      ":focus .tags": {
                          bg: "#00000038",
                          visibility: "visible"
                      },                    
                      ":hover .tags": {
                          bg: "#00000048",
                          visibility: "visible"
                      },
                      }}
                    >
                      <div 

                          sx={{
                              position: 'relative',
                              display: 'block',
                              marginRight: '1.97vh',
                              willChange: "border-color",

                              ":hover>span": {                      
                                  border: '3px solid white',
                                  borderTopColor: 'white',
                                  borderRightColor: 'white',
                                  borderBottomColor: 'white',
                                  
                              },
                              ":focus>span": {                      
                                  border: '3px solid #white',
                                  borderTopColor: 'white',
                                  borderRightColor: 'white',
                                  borderBottomColor: 'white',
                                  
                              },
                                                            
                          }}
                      >
                          <span
                              className={i === selectedImage ? 'active-insta' : ''}
                              sx={{                                  
                                  border: '3px solid #0B6CFE',
                                  display: 'flex',                                  
                                  borderRadius: '50%',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  transition: 'border-color 0.25s ease-in-out',
                                  
                              }}
                          >
                          <Img  fluid={nodes.localFile.childImageSharp.fluid} 
                              objectFit="cover"
                              objectPosition="50% 50%"

                              sx={{
                                  margin: '3px',
                                  padding: '10px',
                                  overflow: 'hidden',
                                  borderRadius: '50%',
                                  width: '65px',
                                  height: '65px',                                
                              }}
                          />
                          </span>
                      </div>
                  </a>

                  )
                })}
                </HorizontalScroller>
              </div>

               <div
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  position: 'relative',
                  width: ['initial', '100%', 'initial']
                }}
               >
                 <button             
                    sx={{
                        width: "30px",
                        height: "30px",
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        m: 3,
                        right: '-20px',
                        top: '-50px',
                        zIndex: 1,
                        color: "white",
                        borderRadius: "50%",
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid #c4c4c4',
                        cursor: 'pointer',  
                        outline: 'none',                      
                        ":hover": {
                        color: "white",
                        bg: "#C4C4C4",
                        },
                    }}
                    onClick={this.closeModal}
                >
                    <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.6667 0.407868C2.27618 0.017344 1.64301 0.017344 1.25249 0.407868C0.861964 0.798392 0.861964 1.43156 1.25249 1.82208L7.54539 8.11498L1.25249 14.4079C0.861964 14.7984 0.861964 15.4316 1.25249 15.8221C1.64301 16.2126 2.27618 16.2126 2.6667 15.8221L8.9596 9.5292L15.2525 15.8221C15.643 16.2126 16.2762 16.2126 16.6667 15.8221C17.0572 15.4316 17.0572 14.7984 16.6667 14.4079L10.3738 8.11498L16.6667 1.8221C17.0572 1.43157 17.0572 0.798408 16.6667 0.407883C16.2762 0.0173588 15.643 0.0173587 15.2525 0.407883L8.9596 6.70077L2.6667 0.407868Z" fill="white"/>
                    </svg>
                </button>

                

                <div onClick={this.goBack} disabled={selectedImage === 0}
                  sx={{
                    display: ['flex', 'none', 'flex'],
                    alignItems: 'center',
                    cursor: 'pointer',
                    paddingRight: '40px'
                  }}
                >
                  <span
                    sx={{
                      display: 'flex'                                 
                    }}
                  >
                  <svg width="14" height="30" viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.7176 0.303525C19.1022 0.699834 19.0928 1.33293 18.6965 1.71758L2.4358 17.5L18.6965 33.2824C19.0928 33.6671 19.1022 34.3002 18.7176 34.6965C18.3329 35.0928 17.6998 35.1022 17.3035 34.7176L0.303525 18.2176C0.109497 18.0293 0 17.7704 0 17.5C0 17.2296 0.109497 16.9707 0.303525 16.7824L17.3035 0.28242C17.6998 -0.102233 18.3329 -0.0927836 18.7176 0.303525Z" fill="white"/>
                  </svg>
                  </span>
                  
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  sx={{
                    display: ['flex', 'block', 'flex'],
                    flexDirection: "colrowumn",
                    position: "relative",
                    overflow: 'hidden',              
                    maxWidth: "1120px",
                    maxHeight: ['728px', '100%', '728px'],                
                    borderRadius: '10px',
                    bg: 'white'
                  }} 

                >
                  <div
                  sx={{
                      width: ['65%', '100%', '65%']
                  }}
                  >
                    <Img  fluid={node[selectedImage].localFile.childImageSharp.fluid} />
                  </div>
                  <div
                  sx={{
                      width: ['35%', '100%', '35%'],
                      maxHeight: ['728px', '100%', '728px'],
                      overflowY: 'scroll',
                      overflowX: 'hidden',                                         
                      ' &::-webkit-scrollbar ' : {
                        width: 0,
                    },
                    ':after': {
                      content: '""',
                      height: '70px',
                      width: '100%',
                      display: 'block',
                      position: 'absolute',
                      bottom: 0,                    
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 95%)'
                    },
                  }}
                  >
                    <Styled.h3
                    sx={{                   
                      paddingTop: '32px',
                      paddingLeft: '32px'
                    }}
                    ><a href="https://www.instagram.com/intexchange.ua/" sx={{ color: 'black', ':hover': { color: 'primary' } }}>{node[selectedImage].username}</a></Styled.h3>
                      <article sx={{ my: 4, px: [3, 4] }} dangerouslySetInnerHTML={{ __html: captions }} />
                  </div>  
                </motion.div>             
                <div onClick={this.goForward} disabled={selectedImage === node.length - 1}
                  sx={{
                    display: ['flex', 'none', 'flex'],
                    alignItems: 'center',
                    cursor: 'pointer',
                    paddingLeft: '40px'
                  }}
                >
                  <span
                    sx={{           
                      transform: 'rotate(180deg)',
                      display: 'flex'

                    }}
                  >
                  <svg width="14" height="30" viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.7176 0.303525C19.1022 0.699834 19.0928 1.33293 18.6965 1.71758L2.4358 17.5L18.6965 33.2824C19.0928 33.6671 19.1022 34.3002 18.7176 34.6965C18.3329 35.0928 17.6998 35.1022 17.3035 34.7176L0.303525 18.2176C0.109497 18.0293 0 17.7704 0 17.5C0 17.2296 0.109497 16.9707 0.303525 16.7824L17.3035 0.28242C17.6998 -0.102233 18.3329 -0.0927836 18.7176 0.303525Z" fill="white"/>
                  </svg>
                  </span>
                </div>
              </div>
           


            </div>
            
            </Styled.root>                                       
          </Modal>
        </Fragment>
      )
    }
  }
  


  
  export default Instagr

