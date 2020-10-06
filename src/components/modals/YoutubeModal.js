/** @jsx jsx */
import React, { Component } from 'react'
import { jsx, Styled } from "theme-ui"
import { navigate } from "gatsby"
import Modal from 'react-modal'
import YouTube from 'react-youtube'
import FluidImage from '../molecules/FluidImage'


Modal.setAppElement(`#___gatsby`)
const modalStyles = {
    overlay: {
      backgroundColor: "rgba(185, 185, 185, 0.79)",
      overflow: 'hidden',
    },
    content: {
      position: "fixed",
      top: '50%',
      left: "50%",
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%,-50%)',
      width: '100%',
      height: 'auto',
      maxWidth: "1280px",
      padding: 0,
      border: 0,
      borderRadius: '10px',
      overflow: 'hidden',
      background: '0',
      borderRadius: '10px'
    },
  }



class YoutubeModal extends Component {
    state = {
        modalIsOpen: false
    }
    

    openModal = () => {
        this.setState({ modalIsOpen: true })
      }

    closeModal = () => {
      this.setState({ modalIsOpen: false })
    }
  

  
    render() {
        const { image } = this.props
        const { school } = this.props
        const { youtube } = this.props
        const { modalIsOpen } = this.state
        const modalCloseTimeout = 300
        const opts = {
        height: '770',
        width: '1280',

      }
   
      

      return (
        <>  
            <div onClick={this.openModal}
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: ['0.6770vw 0.7812vw', '13px 15px', '13px 15px', '0.6770vw 0.7812vw'],
                    borderRadius: '10px',
                    width: ['initial', '100%', 'initial'],
                    backgroundColor: 'rgba(255, 255, 255, .05)',
                    cursor: 'pointer',
                    willChange: "border-color",
                    backdropFilter: 'saturate(180%) blur(20px)',
                    ":hover>span": {                      
                        border: '2px solid #00B707',
                        borderTopColor: '#00B707',
                        borderRightColor: '#00B707',
                        borderBottomColor: '#00B707',
                        transition: 'border-top-color 0.1s linear, border-right-color 0.15s linear 0.1s, border-bottom-color 0.15s linear 0.2s'
                    },
                    ":focus>span": {                      
                        border: '2px solid #00B707',
                        borderTopColor: '#00B707',
                        borderRightColor: '#00B707',
                        borderBottomColor: '#00B707',
                        transition: 'border-top-color 0.15s linear, border-right-color 0.15s linear 0.1s, border-bottom-color 0.15s linear 0.2s'
                    },
                  }}
                >
                <span
                    sx={{                     
                        border: '2px solid #0B6CFE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '100%',
                        marginTop: '-25px',
                        
                    }}
                >
                    <div
                        sx={{
                            margin: '3px',
                            display: 'block',
                            width: ['3.125vw', '60px', '60px', '3.125vw'],
                            height: ['3.125vw', '60px', '60px', '3.125vw'],
                            borderRadius: '100%',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >    
                    <FluidImage image={image} 
                        sx={{
                            position: 'absolute !important',
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        }}
                    />
                    </div>  
                </span>     
                <div
                    sx={{
                        fontFamily: 'heading',
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        marginLeft: '15px',
                        color: 'white',
                        fontSize: ['0.8333vw', '16px', '16px', '0.8333vw']
                    }}
                >Проморолик <br/>{school}</div>          
            </div>
    
          <Modal
             isOpen={modalIsOpen}
             style={modalStyles}
             onRequestClose={this.closeModal}
             closeTimeoutMS={modalCloseTimeout}
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
                        right: 0,
                        top: 0,
                        zIndex: 1,
                        color: "white",
                        borderRadius: "50%",
                        backgroundColor: 'rgba(196, 196, 196, 0.75)',
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
                
                
                <YouTube opts={opts}  className="video-inner" containerClassName="video-container"   videoId={youtube} />
                
                
                                                      
          </Modal>
        </>
      )
    }
  }
  

  
 

  
  
  

  
  export default YoutubeModal