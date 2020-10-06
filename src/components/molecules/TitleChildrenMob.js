/** @jsx jsx */
import React from "react";
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

import Sticky from 'react-stickynode';


const TitleChildrenMob = ({ title }) => {

   
    const titles = title.replace(/[<]br[^>]*[>]/gi,"")
    return (
        <Sticky activeClass="stick-mob"enabled = { true }  top = { 50 }   >

        <div
            sx={{
                display: 'flex',
                flexDirection: 'row'

            }}
        >
            <Link 
                to="/"
                    sx={{             
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      cursor: 'pointer'       
                    }}             
                  >
                      <span
                          sx={{
                            display: 'flex',
                            marginRight: '12px',
                          }}
                      >
                        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.20711 1.70711C7.59763 1.31658 7.59763 0.683418 7.20711 0.292893C6.81658 -0.0976311 6.18342 -0.0976311 5.79289 0.292893L0.292893 5.79289C-0.0976311 6.18342 -0.0976311 6.81658 0.292893 7.20711L5.79289 12.7071C6.18342 13.0976 6.81658 13.0976 7.20711 12.7071C7.59763 12.3166 7.59763 11.6834 7.20711 11.2929L3.41421 7.5H16C16.9567 7.5 17.8588 7.96666 18.3253 8.61033C18.5503 8.9208 18.6682 9.26162 18.6675 9.6181C18.6667 9.9727 18.5482 10.412 18.1863 10.9188C17.4599 11.9357 16.7878 12.9683 16.1298 13.9793L16.1295 13.9796C15.8072 14.4748 15.4882 14.9649 15.1679 15.4453C14.8616 15.9048 14.9858 16.5257 15.4453 16.8321C15.9048 17.1384 16.5257 17.0142 16.8321 16.5547C17.1786 16.0349 17.5102 15.5252 17.8384 15.0209C18.4816 14.0324 19.1114 13.0645 19.8137 12.0812C20.3817 11.286 20.6657 10.4493 20.6675 9.62232C20.6692 8.79718 20.3897 8.05074 19.9447 7.43671C19.0712 6.23136 17.5433 5.5 16 5.5H3.41421L7.20711 1.70711Z" fill="currentColor"/>
                        </svg>
                      </span>
                      
            </Link>
            <div dangerouslySetInnerHTML={{ __html: titles }} />
        </div>
        </Sticky>

    )
  
}

export default  TitleChildrenMob
