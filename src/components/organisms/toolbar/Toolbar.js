/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'
import { useRelative } from '../../particles/hooks/useRelative'
import { useSiteMenuData } from '../../particles/hooks/useSiteMenuData'

import './toolbar.css'


function Toolbar() {
    const menuData = useSiteMenuData()
    const toolbarData = menuData.nodes.find(menu => menu.slug == "toolbarmobile")

    return (


        <div
        sx={{
          display: ['none', 'block', 'none'],
          position: 'fixed',
          bottom: 0,
          left: 0, 
          right: 0,
          height: '55px',
          zIndex: '999',
          background: 'linear-gradient(191.87deg, #8FD300 27.55%, #00B707 132.85%)'

        }}
      >
        <div
            sx={{ 
                position: 'absolute', 
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <span
                sx={{
                    width: '44px',
                    height: '44px',
                    display: 'block',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '100px'
                }}
            >
            </span>
        </div>  
        <nav
            sx={{
                display: 'flex',
                flexDirection: 'row',
                position: 'relative',
                top: '50%', 
                transform: 'translateY(-50%)',
                padding: '0 30px',
                width: '100%',
                height: '33px'
            }}
        >
        {toolbarData.menuItems.nodes.map(item => (
                            
            <ToolbarItem key={item.id} {...item} />
                         
                            
         ))}
        </nav>

      </div>



        
    )
}



const ToolbarItem = ({ url, label, childItems }) => {
    const relativeLink = useRelative(url)


    return (
    <div
        sx={{position: 'absolute'}}
        className="menu-item toolbar-icon"
    >
        <Link 
        
        sx={{
            width: '33px',
            height: '33px',
            display: 'flex',
            alignItems: 'center',
            padding: '5px 15px',
            color: 'white',
            fontFamily: '"Oswald", sans-serif',
            fontWeight: '300',
            textTransform: 'uppercase',
            fontSize: '1rem',
            ":hover": {                      
                color: 'primary',
            },
        }}
        to={relativeLink}
        activeStyle={{ color: "#0B6CFE", fontWeight: '400' }}
        
        >               
        </Link>
        <div
            className="menu-nav"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                width: '250px',
                left: '50%',             
                transform: 'translateX(-50%)',
                bg: 'primary',
                borderRadius: '10px',
                zIndex: '4',
                boxShadow: '0px 18px 49px rgba(11, 108, 254, 0.37)',
                visibility: 'hidden',
                opacity: 0,
            }}
        >
            
        </div>   
    </div>
    )
}









export default Toolbar