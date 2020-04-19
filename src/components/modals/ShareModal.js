/** @jsx jsx */
import React, { Component } from 'react'
import { jsx, Styled } from "theme-ui"
import { navigate } from "gatsby"
import Modal from 'react-modal'
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    TelegramShareButton,
    TwitterShareButton,
    ViberShareButton,
  } from "react-share"


Modal.setAppElement(`#___gatsby`)
const modalStyles = {
    overlay: {
      backgroundColor: "rgba(185, 185, 185, 0.79)",
    },
    content: {
      position: "relative",
      top: '50%',
      transform: 'translateY(-50%)',
      left: "auto",
      right: "auto",
      bottom: "auto",
      maxWidth: "520px",
      maxHeight: '728px',
      margin: "0 auto",
      padding: 0,
      border: 0,
      borderRadius: '10px',
      overflow: 'hidden'
    },
  }



class ShareModal extends Component {
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
     
      const { title } = this.props
      const { uri } = this.props
      const { modalIsOpen } = this.state
      const modalCloseTimeout = 300

      return (
        <div>
            <div onClick={this.openModal}
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    color: 'primary',
                    cursor: 'pointer',
                    ":hover": {                      
                        color: '#00B707 ',
                        },
                  }}
                >
                <span
                    sx={{
                        display: 'flex',
                        marginRight: '8px'
                    }}
                >
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.2803 4.78033C11.9874 5.07322 11.5126 5.07322 11.2197 4.78033L9 2.56066L9 10C9 10.4142 8.66421 10.75 8.25 10.75C7.83579 10.75 7.5 10.4142 7.5 10L7.5 2.56066L5.28033 4.78033C4.98744 5.07322 4.51256 5.07322 4.21967 4.78033C3.92678 4.48744 3.92678 4.01256 4.21967 3.71967L7.71967 0.21967C8.01256 -0.0732232 8.48744 -0.0732232 8.78033 0.21967L12.2803 3.71967C12.5732 4.01256 12.5732 4.48744 12.2803 4.78033ZM0.75 7.25C0.335786 7.25 0 7.58579 0 8V19C0 19.4142 0.335786 19.75 0.75 19.75H15.75C16.1642 19.75 16.5 19.4142 16.5 19V8C16.5 7.58579 16.1642 7.25 15.75 7.25H11.75C11.3358 7.25 11 7.58579 11 8C11 8.41421 11.3358 8.75 11.75 8.75H15V18.25H1.5V8.75H4.75C5.16421 8.75 5.5 8.41421 5.5 8C5.5 7.58579 5.16421 7.25 4.75 7.25H0.75Z" fill="currentColor"/>
                    </svg>
                </span>    
                Поділитись
            </div>
    
          <Modal
             isOpen={modalIsOpen}
             style={modalStyles}
             onRequestClose={this.closeModal}
             closeTimeoutMS={modalCloseTimeout}
          >           
            <div
                sx={{
                    position: 'relative'
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
                <div
                    sx={{
                        padding: '40px'
                    }}
                >  
                    <Styled.h2 sx={{color: 'black', marginBottom: '2vh'}}>Поділитись</Styled.h2>
                    <div
                        sx={{
                            display: 'block',
                            borderBottom: '1px solid #E5E5E5',
                            padding: '15px 0',
                            fontFamily: 'body',
                            color: 'primary',                          
                            ":hover": {                      
                                color: '#00B707 ',
                                },
                        }}
                    >
                        <FacebookShareButton
                            sx={{outline: 'none'}}
                            url={`http://localhost:8000/for-childrens/${uri}`}
                            quote={title}
                            className="Demo__some-network__share-button"
                        >
                        Facebook
                        </FacebookShareButton>
                    </div>
                    <div
                         sx={{
                            display: 'block',
                            borderBottom: '1px solid #E5E5E5',
                            padding: '15px 0',
                            fontFamily: 'body',
                            color: 'primary',
                            ":hover": {                      
                                color: '#00B707 ',
                                },
                        }}
                    >
                        <TwitterShareButton
                            sx={{outline: 'none'}}
                            url={`http://localhost:8000/for-childrens/${uri}`}
                            title={title}
                            className="Demo__some-network__share-button"
                        >
                        Twitter
                        </TwitterShareButton>
                    </div>
                    <div
                         sx={{
                            display: 'block',
                            borderBottom: '1px solid #E5E5E5',
                            padding: '15px 0',
                            fontFamily: 'body',
                            color: 'primary',
                            ":hover": {                      
                                color: '#00B707 ',
                                },
                            
                        }}
                    >
                        <TelegramShareButton
                            sx={{outline: 'none'}}
                            url={`http://localhost:8000/for-childrens/${uri}`}
                            title={title}
                            className="Demo__some-network__share-button"
                        >
                        Telegram
                        </TelegramShareButton>
                    </div>
                    <div
                         sx={{
                            display: 'block',
                            borderBottom: '1px solid #E5E5E5',
                            padding: '15px 0',
                            fontFamily: 'body',
                            color: 'primary',
                            ":hover": {                      
                                color: '#00B707 ',
                                },
                            
                        }}
                    >
                        <EmailShareButton
                            sx={{outline: 'none'}}
                            url={`http://localhost:8000/for-childrens/${uri}`}
                            subject={title}
                            body="body"
                            className="Demo__some-network__share-button"
                        >
                        Email
                        </EmailShareButton>
                    </div>
                    <div
                         sx={{
                            display: 'block',                           
                            padding: '15px 0',
                            fontFamily: 'body',
                            color: 'primary',
                            ":hover": {                      
                                color: '#00B707 ',
                                },
                            
                        }}
                    >
                        <ViberShareButton
                            sx={{outline: 'none'}}
                            url={`http://localhost:8000/for-childrens/${uri}`}
                            title={title}
                            
                            className="Demo__some-network__share-button"
                        >
                        Viber
                        </ViberShareButton>
                    </div>
                </div>
            </div>                                           
          </Modal>
        </div>
      )
    }
  }
  

  
 

  
  
  

  
  export default ShareModal