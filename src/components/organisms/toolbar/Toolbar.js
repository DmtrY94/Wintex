/** @jsx jsx */
import React, {useState} from 'react'
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'
import { useRelative } from '../../particles/hooks/useRelative'
import { useSiteMenuData } from '../../particles/hooks/useSiteMenuData'
import FormModalM from '../../modals/FormModalM'

import './toolbar.css'


function Toolbar() {
    const menuData = useSiteMenuData()
    const toolbarData = menuData.nodes.find(menu => menu.slug == "toolbarmobile")
    

    return (


        <div
        sx={{
          display: ['none', 'block', 'block',  'none'],
          position: 'fixed',
          bottom: 0,
          left: 0, 
          right: 0,
          height: '55px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          zIndex: '998',
          background: 'linear-gradient(179.75deg, #8FD300 -42.46%, #00B707 161.52%)'

        }}
      >
         
        <nav
            sx={{
                display: 'flex',
                flexDirection: 'row',
                position: 'relative',               
                padding: '0 20px',
                width: '80%',
                height: '55px',
                justifyContent: 'space-between'
            }}
        >
        {toolbarData.menuItems.nodes.map(item => (
                            
            <ToolbarItem key={item.id} {...item} />
                         
                            
         ))}

       
        <FormModalM />
        
        </nav>

      </div>



        
    )
}



const ToolbarItem = ({ url, label, childItems }) => {
    const [menuOpen, toggleMenu] = useState(false)
    const relativeLink = useRelative(url)

    const childitems = childItems.nodes
    return (
    <div
        sx={{}}
        className="toolbar-icon"
    >
        {('#' !== url) ? (
        <Link 
        sx={{
            width: '29px',
            height: '55px',
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
        ) : ( 
            <div
                onClick={() => toggleMenu(!menuOpen)}
                sx={{
                    width: '29px',
                    height: '55px',                
                }}
            ></div>
        )}
        <div
            className={menuOpen ? `tolbar__menu--show` : undefined}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                left: '20px',
                right: '20px',     
                bottom: '70px',        
                bg: 'primary',
                borderRadius: '10px',
                zIndex: '4',
                boxShadow: '0px 18px 49px rgba(11, 108, 254, 0.37)',
                visibility: 'hidden',
                opacity: 0,
            }}
        >
             {childitems.map(childitem => (                          
                <MenuChildItem key={childitem.id} {...childitem} />                                          
            ))}   
        </div>   
    </div>
    )
}


const MenuChildItem = ({url, label}) => {
    const relativeChildLink = useRelative(url)

    return (
        <div
           
        >
            <Link 
            
            sx={{
                display: 'flex',
                alignItems: 'center',               
                padding: '15px',
                color: 'white',
                fontFamily: 'body',
                fontWeight: '300',
                fontSize: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
            }}
            to={relativeChildLink}
            activeStyle={{ color: "rgba(255, 255, 255, 0.6)" }}
            >{label}   
            </Link>
        </div>

    )
}






export default Toolbar