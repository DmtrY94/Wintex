/** @jsx jsx */
import React, { Component, Fragment } from 'react'
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"
import PropTypes from 'prop-types'



import '../../particles/all.sass'


  class Lightbox extends Component {
    state = {
      showLightbox: false,
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
      this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
    }
  
    closeModal = () => {
      this.setState({ showLightbox: false })
    }
  
    goBack = () => {
      this.setState({ selectedImage: this.state.selectedImage - 1 })
    }
  
    goForward = () => {
      this.setState({ selectedImage: this.state.selectedImage + 1 })
    }
  
    handleKeyUp = e => {
      e.preventDefault()
      const { keyCode } = e
      if (this.state.showLightbox) {
        if (keyCode === 37) {
          // Left Arrow Key
          if (this.state.selectedImage > 0) {
            this.setState({ selectedImage: this.state.selectedImage - 1 })
          }
        }
        if (keyCode === 39) {
          // Right Arrow Key
          if (this.state.selectedImage < this.props.image.length - 1) {
            this.setState({ selectedImage: this.state.selectedImage + 1 })
          }
        }
        if (keyCode === 27) {
          // Escape key
          this.setState({ showLightbox: false })
        }
      }
    }
  
    render() {
      const { image } = this.props
      
      console.log(image)
      
      const { showLightbox, selectedImage } = this.state

      if (!image) {
        return (<Styled.p sx={{textAlign: 'center', color: 'white', marginTop: '2em', marginBottom: ['initial', '3em', 'initial'], fontSize: ['20px', '14px', '20px']}}>Тут скоро будуть фотографії з наших поїздок...</Styled.p>)
      }

      if (!image.length) {
        return (<p>Something went wrong or no data...</p>)
      }

      return (
        <Fragment>
          <div
            sx={{
                padding: ['0 40px 40px 40px', '0 30px 30px 30px', '0 40px 40px 40px'],
                position: 'relative',
                overflowX: ['initial', 'scroll', 'initial'],
                overflowY: ['initial', 'hidden', 'initial'],
                zIndex: ['initial', '999', 'initial'],
                minHeight: ['initial', '20vh', 'initial'],
                "::-webkit-scrollbar": { 
                  width: 0,
                },

            }}
        > 
            <div
                sx={{
                    display: 'flex',
                    flexFlow: ['row wrap', 'initial', 'row wrap'],
                    justifyContent: 'flex-start',
                    position: ['initial', 'absolute', 'initial']
                }}
            >
            {image.map((images, i) => (
              <GalleryItem key={images.id}
                
                sx={{
                  display: 'block',
                  height: ['27.8vh', '14.8vh', '27.8vh'],
                  flexBasis: ['33.3%', '55.5%', '33.3%'],
                  position: 'relative',
                  padding: ['10px', '0 10px 0 0', '10px'],
                  width: ['100%', '200px', '100%']                            
              }}
              >
                <a href={images.imageFile.childImageSharp.fluid.src} alt="Car Image" onClick={e => this.handleClick(e, i)}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: '10px'
                  }}
                >
                  <StyledImg fluid={images.imageFile.childImageSharp.fluid}
                   
                  />
                </a>
              </GalleryItem>
            ))}
          </div> 
        </div>
  
          <LightboxModal visible={showLightbox} onKeyUp={e => this.handleKeyDown(e)} >
            <LightboxContent>
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
                <Button onClick={this.closeModal}>
                  <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.6667 0.407868C2.27618 0.017344 1.64301 0.017344 1.25249 0.407868C0.861964 0.798392 0.861964 1.43156 1.25249 1.82208L7.54539 8.11498L1.25249 14.4079C0.861964 14.7984 0.861964 15.4316 1.25249 15.8221C1.64301 16.2126 2.27618 16.2126 2.6667 15.8221L8.9596 9.5292L15.2525 15.8221C15.643 16.2126 16.2762 16.2126 16.6667 15.8221C17.0572 15.4316 17.0572 14.7984 16.6667 14.4079L10.3738 8.11498L16.6667 1.8221C17.0572 1.43157 17.0572 0.798408 16.6667 0.407883C16.2762 0.0173588 15.643 0.0173587 15.2525 0.407883L8.9596 6.70077L2.6667 0.407868Z" fill="white"/>
                  </svg>
                </Button>
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
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.7176 0.303525C19.1022 0.699834 19.0928 1.33293 18.6965 1.71758L2.4358 17.5L18.6965 33.2824C19.0928 33.6671 19.1022 34.3002 18.7176 34.6965C18.3329 35.0928 17.6998 35.1022 17.3035 34.7176L0.303525 18.2176C0.109497 18.0293 0 17.7704 0 17.5C0 17.2296 0.109497 16.9707 0.303525 16.7824L17.3035 0.28242C17.6998 -0.102233 18.3329 -0.0927836 18.7176 0.303525Z" fill="white"/>
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
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.7176 0.303525C19.1022 0.699834 19.0928 1.33293 18.6965 1.71758L2.4358 17.5L18.6965 33.2824C19.0928 33.6671 19.1022 34.3002 18.7176 34.6965C18.3329 35.0928 17.6998 35.1022 17.3035 34.7176L0.303525 18.2176C0.109497 18.0293 0 17.7704 0 17.5C0 17.2296 0.109497 16.9707 0.303525 16.7824L17.3035 0.28242C17.6998 -0.102233 18.3329 -0.0927836 18.7176 0.303525Z" fill="white"/>
                    </svg>
                    </span>
                  </Button>
                </LeftRight>
              </Controls>
            </LightboxContent>
          </LightboxModal>
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
    background: none;
    border: 0;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    outline: none;
    opacity: 0.65;
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
    max-width: 600px;
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
    justify-content: space-around;
    button:first-child {
      margin-right: 10px;
    }
  `
  
  Lightbox.propTypes = {
    image: PropTypes.array.isRequired,
  }
  
  export default Lightbox