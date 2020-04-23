/** @jsx jsx */
import React, { Component } from 'react'
import { jsx, Styled } from "theme-ui"
import { navigate } from "gatsby"
import Modal from 'react-modal'
import classNames from 'classnames'
import Plane from "../../images/plane.svg"

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
            
        >           
            <div onClick={this.openModal}
                sx={{             
                    cursor: 'pointer',
                    marginTop: '7px'  
                }}
            >
                   
                <span
                    sx={{
                        display: 'flex',
                        transform: 'rotate(60deg)'                       
                    }}
                >
                    <Plane />
                </span>
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
                    <Styled.h2 sx={{color: 'black', marginBottom: '4vh'}}>Отримати консультацію</Styled.h2>
                    <form>
                    <label
                        className={inputClass} onClick={this.handleClick}
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #EEECEC',
                            backgroundColor: 'rgba(196, 196, 196, 0.15)',
                            borderRadius: '10px',
                            marginBottom: '40px',
                            ":active>p": {
                                top: '-30px',
                                position: 'relative',
                                background: 'white',
                                padding: '0 10px',  
                                color: '#0B6CFE'
                            }, 
                            ":active": {
                                border: '1px solid #0B6CFE', 
                                backgroundColor: 'white'
                            }, 
                        }}
                    >
                        <p
                            sx={{marginLeft: '15px', color: '#C4C4C4', fontFamily: 'body'}}
                        >Ім'я</p>
                        <input 
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: '100%',                            
                                border: 0,
                                background: 'transparent',
                                padding: '0 15px',
                                outline: 'none',
                            }}
                        type="text" name="name" />
                    </label>
                    <label
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #EEECEC',
                            backgroundColor: 'rgba(196, 196, 196, 0.15)',
                            borderRadius: '10px',
                            marginBottom: '40px'
                        }}
                    >
                        <p
                            sx={{marginLeft: '15px', color: '#C4C4C4', fontFamily: 'body'}}
                        >Номер телефону</p>
                        <input 
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: '100%',
                                border: 0,
                                background: 'transparent',
                                padding: '0 15px',
                                outline: 'none',
                            }}
                        type="text" name="name" />
                    </label>
                    <label
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid #EEECEC',
                            backgroundColor: 'rgba(196, 196, 196, 0.15)',
                            borderRadius: '10px',
                            marginBottom: '40px'
                        }}
                    >
                        <p
                            sx={{marginLeft: '15px', color: '#C4C4C4', fontFamily: 'body'}}
                        >email</p>
                        <input 
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                width: '100%',
                                border: 0,
                                background: 'transparent',
                                padding: '0 15px',
                                outline: 'none',
                            }}
                        type="text" name="name" />
                    </label>
                    
                    
                    <button onClick={this.openModal}
                        sx={{
                            bg: 'primary',
                            border: 0,
                            borderRadius: '100px',
                            padding: '18px 27px',
                            fontFamily: '"Oswald", sans-serif',
                            textTransform: 'uppercase',
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            outline: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: '0px 10px 30px rgba(11, 128, 254, 0.71)',
                            willChange: 'box-shadow',
                            transition: 'box-shadow 0.25s ease-out',
                            margin: '0 auto',
                            ":focus": {
                                background: 'linear-gradient(272.6deg, #56B8E9 12.03%, #0B6CFE 72.88%)',
                                boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.05);',   
                            },                                
                            ":hover": {  
                                background: 'linear-gradient(272.6deg, #56B8E9 12.03%, #0B6CFE 72.88%)',                         
                                boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.05);',                   
                            }, 
                        }}
                    >
                            Відправити
                        
                    </button>
                    
                    </form>
                    
                </div>
            </div>                                           
          </Modal>
        </div>
      )
    }
  }
  

  
 

  
  
  

  
  export default FormModal