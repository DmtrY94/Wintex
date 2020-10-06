/** @jsx jsx */
import React, { Component, Fragment } from 'react'
import { jsx, Styled } from 'theme-ui'
import { FormattedMessage } from 'react-intl'
import Modal from 'react-modal'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'



import '../../particles/all.sass'

Modal.setAppElement(`#___gatsby`)
const modalStyles = {
    overlay: {
      backgroundColor: "rgba(185, 185, 185, 0.79)",
    },
    content: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      border: '0px',
      background: '0',
      overflow: 'hidden',
      OverflowScrolling: 'touch',
      borderRadius: '10px',
      outline: 'none',
      padding: '0',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: 'auto',
      maxWidth: '1280px',
        
    },
  }


  class Lightbox extends Component {
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
      const { image } = this.props
      
      const { modalIsOpen, selectedImage } = this.state
      const modalCloseTimeout = 300

      if (!image) {
        return (<Styled.p sx={{textAlign: 'center', color: 'white', marginTop: '2em', marginBottom: ['initial', '3em', 'initial'], fontSize: ['20px', '14px', '20px']}}><FormattedMessage id="photonon" /></Styled.p>)
      }

      if (!image.length) {
        return (<p>Something went wrong or no data...</p>)
      }

      return (
        <Fragment>
          <div
            sx={{
                padding: ['0 2.0833vw 2.0833vw 2.0833vw', '0 2.0833vw 2.0833vw 2.0833vw', '0 2.0833vw 2.0833vw 2.0833vw'],
                position: 'relative',
                overflowX: ['initial', 'scroll', 'scroll', 'initial'],
                overflowY: ['initial', 'hidden', 'hidden', 'initial'],
                zIndex: ['initial', '999', '999', 'initial'],
                minHeight: ['initial', '20vh', '20vh', 'initial'],
                "::-webkit-scrollbar": { 
                  width: 0,
                },

            }}
        > 
            <div
                sx={{
                    display: 'flex',
                    flexFlow: ['row wrap', 'nowrap', 'nowrap', 'row wrap'],
                    justifyContent: 'flex-start',
                    position: ['initial', 'absolute', 'absolute', 'initial']
                }}
            >
            {image.map((images, i) => (
              <GalleryItem key={images.id}
              onClick={e => this.handleClick(e, i)}   
                
                sx={{
                  display: 'block',
                  height: ['14.0625vw', '14.8vh', '14.8vh', '14.0625vw'],
                  flexBasis: ['33.3%', '55.5%', '55.5%', '33.3%'],
                  position: 'relative',
                  padding: ['0.5208vw', '0 10px 0 0', '0 10px 0 0', '0.5208vw'],
                  width: ['100%', '200px', '200px', '100%']                            
              }}
              >
                <a href={images.imageFile.childImageSharp.fluid.src} alt="Car Image" onClick={e => this.handleClick(e, i)}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw']
                  }}
                >
                  <StyledImg fluid={images.imageFile.childImageSharp.fluid}
                   
                  />
                </a>
              </GalleryItem>
            ))}
          </div> 
        </div>
  
        <Modal
             isOpen={modalIsOpen}
             style={modalStyles}
             onRequestClose={this.closeModal}
             closeTimeoutMS={modalCloseTimeout}

             onKeyUp={e => this.handleKeyDown(e)}
          >   
            <Styled.root>
              <Img 
                sx={{overflow: 'hidden', borderRadius: '10px'}}
              fluid={image[selectedImage].imageFile.childImageSharp.fluid} />
              <div 
                sx={{ 
                  textAlign: 'center',
                  marginTop: '15px',
                  color: 'rgba(255, 255, 255, 0.65)',
                    
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: image[selectedImage].description }} />
              </div>
              <div
                sx={{
                  position: 'absolute',
                  top: '3.5vh',
                  right: '3.5vh'
                }}
              >               
              </div>                             
              <Controls>
                <LeftRight>
                  <Button onClick={this.goBack} disabled={selectedImage === 0}>
                    <span
                      sx={{
                        display: 'flex'                                 
                      }}
                    >
                    <svg width="14" height="30" viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.7176 0.303525C19.1022 0.699834 19.0928 1.33293 18.6965 1.71758L2.4358 17.5L18.6965 33.2824C19.0928 33.6671 19.1022 34.3002 18.7176 34.6965C18.3329 35.0928 17.6998 35.1022 17.3035 34.7176L0.303525 18.2176C0.109497 18.0293 0 17.7704 0 17.5C0 17.2296 0.109497 16.9707 0.303525 16.7824L17.3035 0.28242C17.6998 -0.102233 18.3329 -0.0927836 18.7176 0.303525Z" fill="currentColor"/>
                    </svg>
                    </span>
                  </Button>
                  <Button onClick={this.goForward} disabled={selectedImage === image.length - 1}>
                    <span
                      sx={{           
                        transform: 'rotate(180deg)',
                        display: 'flex'

                      }}
                    >
                    <svg width="14" height="30" viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.7176 0.303525C19.1022 0.699834 19.0928 1.33293 18.6965 1.71758L2.4358 17.5L18.6965 33.2824C19.0928 33.6671 19.1022 34.3002 18.7176 34.6965C18.3329 35.0928 17.6998 35.1022 17.3035 34.7176L0.303525 18.2176C0.109497 18.0293 0 17.7704 0 17.5C0 17.2296 0.109497 16.9707 0.303525 16.7824L17.3035 0.28242C17.6998 -0.102233 18.3329 -0.0927836 18.7176 0.303525Z" fill="currentColor"/>
                    </svg>
                    </span>
                  </Button>
                </LeftRight>
              </Controls>
              </Styled.root>
              </Modal>
        </Fragment>
      )
    }
  }
  
  const StyledImg = styled(Img)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 100%; 
    overflow: hidden;
    border-radius: 10px;
    & > img {
      object-fit: cover !important; // or whatever
      object-position: 0% 0% !important; // or whatever
    }
  `
  
 
  
  const GalleryItem = styled.div`
    position: relative;
    &:nth-child(6n-1) {
      flex-basis: 66.6%
    }
    &:nth-child(6n+6) {
      flex-basis: 100%
    }
  `
  
  const Button = styled.button`
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.25);
    color: #fff;
    border: 0;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    outline: none;
    border-radius: 32px;
    transition: opacity 0.25s ease-out;
    &:hover {
      opacity: 1;
    }
  `
  
  const LightboxModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(33, 33, 33, 0.8);
    z-index: 999;
    transition: opacity 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    opacity: ${props => (props.visible ? '1' : '0')};
    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  `
  const LightboxContent = styled.div`
    margin: 15px;
    max-width: 1000px;
    width: 100%;
  `
  
  const Controls = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
  `
  
  const LeftRight = styled.div`
    display: flex;
    justify-content: space-between;
    button:first-child {
      margin-right: 10px;
    }
  `
  
  Lightbox.propTypes = {
    image: PropTypes.array.isRequired,
  }
  
  export default Lightbox