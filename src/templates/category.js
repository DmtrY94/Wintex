/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import Layout from '../components/particles/Layout'
import SEO from "../components/particles/SEO"
import CatListEntry from '../components/organisms/category/CatListEntry'
import Swiper from 'react-id-swiper';


import 'swiper/css/swiper.css';

const CreateCategory = props => {

  const { 
    name, 
    id, 
    categoryId, 
    data: {
      wordpress: { category },
    },
    seo
  
  } = props


  const params = {
    containerClass: 'container-swiper-list',
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


  return (
    <Layout>
      <SEO data={props.pageContext} /> 
      <div
        sx={{
          marginTop: '6vh',
          marginBottom: '12vh',
          position: 'relative',
          height: '100%'
        }}
      >
        <div
          
        >
          <Styled.h1
            sx={{
              color: 'white',
              paddingLeft: ['10vh', '30px', '5vh', '10vh'],
              margin: '15px 0',
              marginBottom: '4.51vh',
              textTransform: 'uppercase',
              fontSize: ['calc(16*0.25vw)', '1.75rem', 'calc(16*0.25vw)'],
            }}
          >{category.name}</Styled.h1>
          
        </div>

        <div

        >     
                <div
                sx={{
                    marginTop: '4vh',
                    borderTop: '2px solid rgba(0, 0, 0, 0.035)'
                }}
            >
                
                
                <div >
                    
                    
                <Swiper {...params}>
                  
                    {category.forChildrens.nodes &&
                    category.forChildrens.nodes.map(node => <div><CatListEntry node={node} key={node.id} /></div>)}
                  
                </Swiper>   


                   
                </div>
                
            </div>  
            </div>   
        
      </div>
    </Layout>
  )
}

export default CreateCategory

export const pageQuery = graphql`
  query GET_CATEGORY($id: ID!) {
    wordpress {
      category(id: $id) {
        id
        name
        slug
        forChildrens {
          nodes {
            title
            uri
            id
            PostTypeForChildrenFields {
              time
              age
              school
              flag  
            }
            featuredImage {
                sourceUrl(size: LARGE)
                altText
                imageFile {
                    childImageSharp {
                        fluid(maxWidth: 2500) {
                            aspectRatio
                            base64
                            sizes
                            src
                            srcSet
                        }
                    }
                }
            }
          }
        }
      }
    }
  }
`
