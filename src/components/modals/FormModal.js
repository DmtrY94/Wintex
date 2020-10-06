/** @jsx jsx */
import React, { Component } from 'react'
import { jsx, Styled } from "theme-ui"
import { navigate } from "gatsby"
import { FormattedMessage } from 'react-intl'
import Modal from 'react-modal'
import classNames from 'classnames'
import TextForm from '../modals/TextForm'
import motion from 'framer-motion'



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



class FormModal extends Component {
    state = {
        modalIsOpen: false,
        isActive: false
    }
    

    openModal = () => {
        this.setState({ modalIsOpen: true })
      }

    closeModal = () => {
      this.setState({ modalIsOpen: false })
    }
  
    handleClick = () => {
        this.setState(state => ({ isActive: !state.isActive }));
      }

  
    render() {
     

        const { modalIsOpen } = this.state
        const modalCloseTimeout = 300

        const inputClass = classNames({
            menu: true,
            active: this.state.isActive
        })

      return (
        <div
            sx={{
                display: ['block', 'none', 'block']       
            }}
        >                 
            <button 
                onClick={this.openModal}
                sx={{
                    background: 'linear-gradient(39.9deg, #0B6CFE 22.83%, #458FFF 79.5%)',
                    border: 0,
                    borderRadius: '100px',
                    padding: ['0.9375vw 1.40625vw', '18px 27px', '18px 27px', '0.9375vw 1.40625vw'],
                    fontFamily: '"Oswald", sans-serif',
                    textTransform: 'uppercase',
                    color: 'white',
                    fontSize: ['0.833vw', '16px', '16px', '0.833vw'],
                    fontWeight: '700',
                    cursor: 'pointer',
                    outline: 'none',
                    display: 'flex',
                    boxShadow: '0 7px 14px rgba(11, 108, 254, 0.2), 0 3px 6px rgba(11, 108, 254, 0.2)',
                    alignItems: 'center',
                    willChange: 'box-shadow',
                    transition: 'transform 0.25s ease-out, box-shadow 0.35s ease-out',
                    ":focus": {
                        background: 'linear-gradient(39.9deg, #0B6CFE 22.83%, #458FFF 79.5%)',
                        boxShadow: '0px 10px 30px rgba(11, 128, 254, 0.71)', 
                        color: 'white', 
                        transform: 'scale(1.05)',   
                    },                                
                    ":hover": {   
                        background: 'linear-gradient(39.9deg, #0B6CFE 22.83%, #458FFF 79.5%)',                       
                        boxShadow: '0px 10px 30px rgba(11, 128, 254, 0.71)', 
                        color: 'white',  
                        transform: 'scale(1.05)',                 
                    }, 
                    ":active": {
                        transform: 'scale(.94)',
                    }
                }}
            >
                    <FormattedMessage id="buttonconslt" /> 
                <span
                    sx={{
                        display: 'flex',
                        marginLeft: '12px'
                    }}
                >
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.633174 0.993821C0.24265 1.38435 0.24265 2.01751 0.633174 2.40803L5.89975 7.67461L0.633174 12.9412C0.24265 13.3317 0.24265 13.9649 0.633174 14.3554C1.0237 14.7459 1.65686 14.7459 2.04739 14.3554L8.02107 8.38172C8.4116 7.99119 8.4116 7.35803 8.02107 6.96751L2.04739 0.993821C1.65686 0.603297 1.0237 0.603297 0.633174 0.993821Z" fill="currentColor"/>
                    </svg>
                </span>
            </button>
    
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
                    <Styled.h2 sx={{color: 'black', marginBottom: '4vh'}}><FormattedMessage id="buttonconslt" /></Styled.h2>
                    
                    
                    
                    <TextForm />
                    
                    
                   
                    
                </div>
            </div>                                           
          </Modal>
        </div>
      )
    }
  }
  

  
 

  
  
  

  
  export default FormModal