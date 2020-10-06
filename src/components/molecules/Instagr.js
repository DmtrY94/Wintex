/** @jsx jsx */
import React, { Component, Fragment } from 'react'
import { jsx, Styled } from "theme-ui"
import Modal from 'react-modal'
import { graphql } from "gatsby"
import { motion  } from "framer-motion"
import Img from "gatsby-image"
import HorizontalScroller from 'react-horizontal-scroll-container'
import Swiper from 'react-id-swiper'

import InstaT from "../../images/insta.svg"


import 'swiper/css/swiper.css';

Modal.setAppElement(`#___gatsby`)
const modalStyles = {
    overlay: {
      backgroundColor: "rgba(185, 185, 185, 0.79)",
    },
    content: {
      position: 'fixed',
      top: 'auto',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      border: '0px',
      background: '0',
      overflow: 'hidden',
      borderRadius: '10px',
      outline: 'none',
      padding: '0',
      transform: 'translateX(-50%)',
      width: '100%',
      height: 'auto',
      maxWidth: '1280px',
        
    },
  }



class Instagr extends Component {

    state = {
        modalIsOpen: false,
        selectedImage: 0,
    }

    componentDidMount = () => {
      window.addEventListener('keyup', this.handleKeyUp, false)
    }
  
    componentWillUnmount = () => {
      window.removeEventListener('keyup', this.handleKeyUp, false)
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
                        zIndex: '2',
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
                                marginRight: ['2.0833vw', '2.97vh', '2.97vh', '2.0833vw'],
                                willChange: "border-color",
                                ":hover>span": {                      
                                    border: ['0.1562vw solid white', '3px solid white', '3px solid white', '0.1562vw solid white'],
                                    borderTopColor: 'white',
                                    borderRightColor: 'white',
                                    borderBottomColor: 'white',
                                    
                                },
                                ":focus>span": {                      
                                    border: ['0.1562vw solid white', '3px solid white', '3px solid white', '0.1562vw solid white'],
                                    borderTopColor: 'white',
                                    borderRightColor: 'white',
                                    borderBottomColor: 'white',
                                    
                                },
                                                             
                            }}
                        >
                            <span
                                sx={{                                  
                                    border: ['0.1562vw solid #0B6CFE', '3px solid #0B6CFE', '3px solid #0B6CFE', '0.1562vw solid #0B6CFE'],
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
                                    width: ['3.3854vw', '65px', '65px', '3.3854vw'],
                                    height: ['3.3854vw', '65px', '65px', '3.3854vw'],
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
                  <button             
                    sx={{
                       
                        background: 0,
                        border: 0,
                        position: "absolute",
                        display: ['none', 'flex', 'none'],
                        alignItems: "center",
                        justifyContent: "center",                      
                        top: 0,
                        width: '100%',
                        padding: '15px 0',
                        zIndex: 1,
                        color: "white",
                        cursor: 'pointer',  
                        outline: 'none',                      
                        ":hover": {
                        color: "white",
                        },
                    }}
                    onClick={this.closeModal}
                >
                    <svg width="35" height="9" viewBox="0 0 35 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M34.9306 0.63348C34.7282 0.119629 34.1475 -0.132831 33.6337 0.0695954L17.5002 6.4252L1.36674 0.0695968C0.852893 -0.132829 0.272239 0.119631 0.0698124 0.633482C-0.132614 1.14733 0.119846 1.72799 0.633697 1.93041L17.1337 8.43041C17.3692 8.5232 17.6312 8.5232 17.8667 8.43041L34.3667 1.93041C34.8806 1.72799 35.1331 1.14733 34.9306 0.63348Z" fill="white"/>
                    </svg>
                </button>
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
                              marginRight: '1.05vh',
                              marginLeft: '1.05vh',
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
                                  border: ['0.1562vw solid #0B6CFE', '3px solid #0B6CFE', '3px solid #0B6CFE', '0.1562vw solid #0B6CFE'],
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
                                  width: ['3.3854vw', '65px', '65px', '3.3854vw'],
                                  height: ['3.3854vw', '65px', '65px', '3.3854vw'],
                                                              
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
                        display: ['flex', 'none', 'flex'],
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

            

                

                <button onClick={this.goBack} disabled={selectedImage === 0}
                  sx={{
                    display: ['flex', 'none', 'flex'],
                    alignItems: 'center',
                    cursor: 'pointer',
                    paddingRight: '40px',
                    background: 0,
                    border: 0,
                    outline: 'none'
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
                  
                </button>
               
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  sx={{
                    display: ['flex', 'block', 'flex'],
                    flexDirection: "colrowumn",
                    position: "relative",
                    overflow: 'hidden',              
                    maxWidth: ['58.3333vw', '720px', '720px','58.3333vw'],
                    maxHeight: ['37.9166vw', '100%', '428px', '37.9166vw'],                
                    borderRadius: '10px',
                    bg: 'white'
                  }} >
                  <div
                  sx={{
                      width: ['65%', '100%', '65%'],
                      minWidth: ['400px', '200px', '400px']
                  }}
                  >
                    <Img  fluid={node[selectedImage].localFile.childImageSharp.fluid} />
                  </div>
                  <div
                  sx={{
                      width: ['35%', '100%', '35%'],
                      maxHeight: ['37.9166vw', '100%', '100%', '37.9166vw'],
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
                      fontSize: ['1.0416vw', '20px', '20px', '1.0416vw'],             
                      paddingTop: ['1.5625vw', '20px', '20px', '1.5625vw'],
                      paddingLeft: ['1.5625vw', '20px', '20px', '1.5625vw']
                    }}
                    ><a href="https://www.instagram.com/intexchange.ua/" sx={{ color: 'black', ':hover': { color: 'primary' } }}>{node[selectedImage].username}</a></Styled.h3>
                      <article sx={{ padding: ['1.5625vw', '20px', '20px', '1.5625vw'], fontSize: ['0.9375vw', '18px', '18px', '0.9375vw'], lineHeight: '1.66',  fontFamily: '"Fira Sans", sans-serif', }} dangerouslySetInnerHTML={{ __html: captions }} />
                  </div>  
                </motion.div>             
                <button onClick={this.goForward} disabled={selectedImage === node.length - 1}
                  sx={{
                    display: ['flex', 'none', 'flex'],
                    alignItems: 'center',
                    cursor: 'pointer',
                    paddingLeft: '40px',
                    background: 0,
                    border: 0,
                    outline: 'none'
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
                </button>
              </div>
           


            </div>
            
                                                   
          </Modal>
        </Fragment>
      )
    }
  }
  


  
  export default Instagr

