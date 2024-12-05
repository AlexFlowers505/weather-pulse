import React from 'react'
import LogoMin from '../components/LogoMin'
import navLinksData from '../../data/navLinksData' 
import NavbarLink from '../components/NavbarLink'
import { NavLink } from 'react-router-dom'
import { links } from '../../constants/links'
import { navbarStyle as tw } from '../../styles/sections/Navbar.style'
import CustomTooltip from '../components/CustomTooltip'

export default function Navbar(): React.JSX.Element {
  return (
        <nav className={tw.navbar}>
            <CustomTooltip title="На главную" placement="bottom">
                <NavLink className={`logo-wrapper ${tw.logoWrapper}`} to={`${links.landing}`}><LogoMin styles={tw.logo} /></NavLink>
            </CustomTooltip>
            { navLinksData.map( (linkData, i) => { return (
                <NavbarLink link={linkData} key={i}/> )}
            )}
        </nav>  
    )
}