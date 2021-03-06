/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'
import { useRelative } from '../../particles/hooks/useRelative'
import { useSiteMenuData } from '../../particles/hooks/useSiteMenuData'
import { motion, AnimatePresence  } from "framer-motion"
import Logo from "../../molecules/Logo"
import SelLang from "../../molecules/SelLang"


import './header.css'


function Header(props) {
    const menuData = useSiteMenuData()
    const headerData = menuData.nodes.find(menu => menu.slug == "menu_main")


    return (
        <header
            sx={{
                padding: ['2.68vh 5.208vw 0 5.208vw', '20px 20px 0 20px', '2.68vh 5vh 0 5vh', '2.68vh 5.208vw 0 5.208vw' ],
                position: 'relative',
                zIndex: '4'
            }}
        >
            
            <div
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
            >
                 <Link 
                    className="logo"              
                    to="/"
                    sx={{
                        paddingRight: ['2.0453vw', 0, '2.0453vw'],
                        borderRight: ['2px solid rgba(0,0,0,0.035)', 0, '2px solid rgba(0,0,0,0.035)']
                    }}
                 >
                    <Logo />
                 </Link>
                <div
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%'
                      }}
                >
                    <nav
                        sx={{
                            display: ['flex', 'none', 'none', 'flex'],
                            marginLeft: '1.8758vw',
                            position: 'relative'
                        }}
                    
                    >
                        

                            {headerData.menuItems.nodes.map(item => (
                                
                            <MenuItem key={item.id} {...item} />
                            
                            
                            ))}

                      

                        
                        
                    </nav>
                    <div 
                        sx={{
                            marginLeft: 'auto',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'                           
                        }}
                    >
                        <SelLang langs={props.langs} />
                        <div
                            className="DropdownContent"
                            sx={{
                                position: 'relative'
                            }}
                        >
                            <a  
                            sx={{
                                display: ['flex', 'none', 'flex'],
                                alignItems: 'center',
                                color: '#0D2344',
                                fontFamily: 'heading',
                                fontWeight: '700',
                                fontSize: ['calc(3.5*0.25vw)', '1.25rem', 'calc(3.5*0.25vw)',],
                                border: '2px solid rgba(0,0,0,0.035)',
                                padding: '0.6375vw 1.40625vw',
                                borderRadius: '32px'
                            }}
                            href="#">
                                <span
                                    sx={{
                                        display: ['flex', 'none', 'flex'], marginRight: ['5px', '0', '5px'], marginTop: ['5px', '0', '5px'], 
                                        color: ['#0D2344', 'white','#0D2344'],
                                        padding: ['0', '9px', '0'],
                                        border: ['0', '1px solid rgba(255, 255, 255, 0.2)', '0'],
                                        borderRadius: ['inherit', '100%', 'inherit'],
                                        width: ['0.78125vw', '15px', '0.78125vw'],
                                                    
                                    }}
                                >
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.3859 11.967C14.4156 12.2104 14.3463 12.4227 14.1782 12.6025L12.2069 14.7C12.1179 14.8061 12.002 14.896 11.8588 14.97C11.7156 15.0443 11.5745 15.0917 11.4365 15.1131C11.4265 15.1131 11.3968 15.1157 11.3475 15.1213C11.2982 15.1264 11.234 15.1294 11.155 15.1294C10.9673 15.1294 10.6634 15.095 10.2435 15.0262C9.82331 14.9574 9.30959 14.7879 8.70203 14.5176C8.09447 14.2473 7.40518 13.8422 6.63445 13.3022C5.86372 12.7622 5.04365 12.0203 4.17424 11.0778C3.48252 10.3469 2.90947 9.64753 2.45509 8.98027C2.0004 8.31301 1.63502 7.69606 1.35833 7.12908C1.08165 6.56243 0.873982 6.04868 0.735942 5.58783C0.597598 5.12698 0.503755 4.72974 0.454412 4.39612C0.405068 4.06249 0.385089 3.80026 0.395078 3.60975C0.404765 3.41892 0.409912 3.31312 0.409912 3.29202C0.429589 3.14371 0.474088 2.9928 0.543411 2.83929C0.612734 2.68578 0.696588 2.56116 0.795275 2.46607L2.76598 0.351675C2.90433 0.203684 3.06235 0.129364 3.24035 0.129364C3.3687 0.129364 3.48252 0.168958 3.58121 0.248471C3.6799 0.327984 3.76405 0.425995 3.83307 0.542506L5.41903 3.76813C5.50803 3.93754 5.53255 4.12318 5.49319 4.32439C5.45384 4.52561 5.36968 4.69534 5.24133 4.83295L4.5151 5.61153C4.49543 5.63294 4.47787 5.66735 4.46334 5.71473C4.44851 5.76244 4.44094 5.80236 4.44094 5.83384C4.48029 6.05647 4.56929 6.31059 4.70763 6.59651C4.8263 6.85095 5.00914 7.16056 5.25616 7.526C5.50318 7.89143 5.85404 8.31236 6.30842 8.78911C6.75312 9.27658 7.14817 9.65499 7.49418 9.92533C7.83988 10.1954 8.12898 10.394 8.36117 10.5212C8.59335 10.6481 8.77135 10.725 8.89486 10.7516L9.08013 10.7912C9.0998 10.7912 9.1322 10.7831 9.17639 10.7675C9.22089 10.7516 9.25298 10.7331 9.27266 10.712L10.1176 9.79033C10.2956 9.62091 10.5029 9.53588 10.7399 9.53588C10.908 9.53588 11.0415 9.56769 11.1401 9.6313H11.155L14.0154 11.4429C14.2227 11.5805 14.3463 11.7551 14.3859 11.967Z" fill="currentColor"/>
                                    </svg>
                                </span>
                           
                                <span
                                    sx={{
                                        display: ['flex', 'none','flex']
                                    }}
                                >
                                    +38 063 982 56 82
                                </span>
                            </a>
                            <nav
                            sx={{
                                display: ['flex', 'none', 'flex'],
                                flexDirection: 'column',
                                padding: ['1.5625vw', '30px', '30px', '1.5625vw']  ,
                                bg: 'white',
                                borderRadius: ['0.5208vw', '10px', '10px', '0.5208vw'],
                                boxShadow: '0px 18px 47px rgba(11, 108, 254, 0.37)',
                                visibility: 'hidden',
                                opacity: 0,
                                position: 'absolute',                                
                                zIndex: '4',
                                width: ['11.4583vw', '220px', '11.4583vw'],
                                left: '50%',
                                transform: 'translateX(-50%)',
                                marginTop: '0.5vw'                             
                            }}
                            >
                            <a 
                                sx={{
                                    color: '#0D2344',
                                    fontFamily: 'heading',
                                    fontWeight: '700',
                                    fontSize: ['0.9375vw', '1.05rem', '1.05rem', '0.9375vw'],
                                    ':hover': { 
                                        color: 'primary' 
                                    },                                   
                                }}
                                href="tel:+380443376718">
                                    +38 044 337 67 18
                            </a>
                                <p
                                    sx={{
                                        marginTop: '10px',
                                        fontFamily: 'body',
                                        fontWeight: 'body',
                                        fontSize: ['0.7291vw', '14px', '14px', '0.7291vw'],
                                        paddingBottom: '20px',
                                        borderBottom: '1px solid #e5e5e5' 
                                    }}
                                
                                >
                                     г. Киев<br/> ул. Шота Руставели 30Б
                                </p>
                            <a 
                                 sx={{
                                    marginTop: '20px',
                                    color: '#0D2344',
                                    fontFamily: 'heading',
                                    fontWeight: '700',
                                    fontSize: ['0.9375vw', '1.05rem', '1.05rem', '0.9375vw'],
                                    ':hover': { 
                                        color: 'primary' 
                                    }, 
                                }}
                            href="tel:+380639825682">
                                +38 063 982 56 82
                            </a>
                            <p
                                sx={{
                                    marginTop: '10px',
                                    fontFamily: 'body',
                                    fontWeight: 'body',
                                    fontSize: ['0.7291vw', '14px', '14px', '0.7291vw'],
                                }}
                            
                            > г. Кривой Рог<br/> ул. Героев АТО 30в</p>
                            </nav>

                        
                       
                            <Link 
                                sx={{ display: ['none', 'block', 'none'] }}
                            to="/contact">    
                            <span
                                sx={{
                                    display: 'flex', marginRight: ['5px', '0', '5px'], marginTop: ['5px', '0', '5px'], 
                                    color: ['#0D2344', 'white','#0D2344'],
                                    padding: ['0', '9px', '0'],
                                    border: ['0', '1px solid rgba(255, 255, 255, 0.2)', '0'],
                                    borderRadius: ['inherit', '100%', 'inherit']                        
                                 }}
                            >
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3859 11.967C14.4156 12.2104 14.3463 12.4227 14.1782 12.6025L12.2069 14.7C12.1179 14.8061 12.002 14.896 11.8588 14.97C11.7156 15.0443 11.5745 15.0917 11.4365 15.1131C11.4265 15.1131 11.3968 15.1157 11.3475 15.1213C11.2982 15.1264 11.234 15.1294 11.155 15.1294C10.9673 15.1294 10.6634 15.095 10.2435 15.0262C9.82331 14.9574 9.30959 14.7879 8.70203 14.5176C8.09447 14.2473 7.40518 13.8422 6.63445 13.3022C5.86372 12.7622 5.04365 12.0203 4.17424 11.0778C3.48252 10.3469 2.90947 9.64753 2.45509 8.98027C2.0004 8.31301 1.63502 7.69606 1.35833 7.12908C1.08165 6.56243 0.873982 6.04868 0.735942 5.58783C0.597598 5.12698 0.503755 4.72974 0.454412 4.39612C0.405068 4.06249 0.385089 3.80026 0.395078 3.60975C0.404765 3.41892 0.409912 3.31312 0.409912 3.29202C0.429589 3.14371 0.474088 2.9928 0.543411 2.83929C0.612734 2.68578 0.696588 2.56116 0.795275 2.46607L2.76598 0.351675C2.90433 0.203684 3.06235 0.129364 3.24035 0.129364C3.3687 0.129364 3.48252 0.168958 3.58121 0.248471C3.6799 0.327984 3.76405 0.425995 3.83307 0.542506L5.41903 3.76813C5.50803 3.93754 5.53255 4.12318 5.49319 4.32439C5.45384 4.52561 5.36968 4.69534 5.24133 4.83295L4.5151 5.61153C4.49543 5.63294 4.47787 5.66735 4.46334 5.71473C4.44851 5.76244 4.44094 5.80236 4.44094 5.83384C4.48029 6.05647 4.56929 6.31059 4.70763 6.59651C4.8263 6.85095 5.00914 7.16056 5.25616 7.526C5.50318 7.89143 5.85404 8.31236 6.30842 8.78911C6.75312 9.27658 7.14817 9.65499 7.49418 9.92533C7.83988 10.1954 8.12898 10.394 8.36117 10.5212C8.59335 10.6481 8.77135 10.725 8.89486 10.7516L9.08013 10.7912C9.0998 10.7912 9.1322 10.7831 9.17639 10.7675C9.22089 10.7516 9.25298 10.7331 9.27266 10.712L10.1176 9.79033C10.2956 9.62091 10.5029 9.53588 10.7399 9.53588C10.908 9.53588 11.0415 9.56769 11.1401 9.6313H11.155L14.0154 11.4429C14.2227 11.5805 14.3463 11.7551 14.3859 11.967Z" fill="currentColor"/>
                                </svg>
                            </span>
                            </Link>
                       
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}



const MenuItem = ({ url, label, childItems }) => {
    const relativeLink = useRelative(url)

    const childitems = childItems.nodes

    return (
    <motion.div
        sx={{position: 'relative'}}
        className="menu-item" 
        whileHover={{ y: -7 }}
        transition={{ duration: 0.6}}
    >
        {('#' !== url) ? (
        <Link 
        sx={{
            display: 'flex',
            alignItems: 'center',
            padding: ['0.2604vw 0.8854vw', '5px 15px', '0.2604vw 0.8854vw'],
            color: 'white',
            fontFamily: '"Oswald", sans-serif',
            fontWeight: '700',
            textTransform: 'uppercase',
            fontSize: ['calc(3.5*0.25vw)', '1rem', 'calc(3.5*0.25vw)'],
        }}
        to={relativeLink}
        activeStyle={{ boxShadow: "0px 10px 30px rgba(41,57,74,0.33)", borderRadius: "5px" }}
        >{label}               
        </Link>
        ) : ( 
            <div      
                           
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: ['0.2604vw 0.8854vw', '5px 15px', '0.2604vw 0.8854vw'],
                    color: 'white',
                    fontWeight: '700',
                    fontFamily: '"Oswald", sans-serif',
                    textTransform: 'uppercase',
                    fontSize: ['calc(3.5*0.25vw)', '1rem', 'calc(3.5*0.25vw)'],
                    ":hover": {                      
                        color: 'primary',
                    },
                    ":active": {                      
                        color: 'primary',
                    },
                }}
            >
                {label}
            </div>
        )}    
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
                marginTop: '0.5vw',
            }}
        >
            {childitems.map(childitem => (                          
                <MenuChildItem key={childitem.id} {...childitem} />                                          
            ))}   
        </div>   
    </motion.div>
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
                padding: ['0.8854vw', '15px', '0.8854vw'],
                color: 'white',
                fontFamily: 'body',
                fontWeight: '300',
                fontSize: ['calc(3.5*0.25vw)', '1rem', 'calc(3.5*0.25vw)'],
                borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
            }}
            to={`${relativeChildLink}`}
            activeStyle={{ color: "rgba(255, 255, 255, 0.6)" }}
            >{label}   
            </Link>
        </div>

    )
}








export default Header