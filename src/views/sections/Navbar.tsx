import React from 'react'
import LogoMin from '../components/LogoMin'
import NavbarLink from '../components/NavbarLink'
import { NavLink } from 'react-router-dom'
import { navbarStyle as tw } from '../../styles/sections/Navbar.style'
import CustomTooltip from '../components/CustomTooltip'
import { navbarLinkStyle as extraTw } from '../../styles/components/NavbarLink.style'
import { navbarConfig as config } from '../../config/components/navbar.config'
import { PATHS } from '../../constants/paths'

export default function Navbar(): React.JSX.Element {
  return (
        <nav className={tw.navbar}>
            <CustomTooltip title="На главную" placement="bottom">
                <NavLink className={`logo-wrapper ${tw.logoWrapper} ${extraTw.link}`} to={`/${PATHS.LANDING}`}><LogoMin styles={tw.logo} /></NavLink>
            </CustomTooltip>
            { config.map( (linkData, i) => { return (
                <NavbarLink link={linkData} key={i}/> )}
            )}
        </nav>  
    )
}