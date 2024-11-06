import React from 'react'
import LogoMin from '../components/LogoMin'
import navLinksData from '../../data/navLinksData' 
import NavbarLink from '../components/NavbarLink'
import { helloSectionStyle as tw } from '../../styles/sections/HelloSection.style'
import { NavLink } from 'react-router-dom'
import { links } from '../../constants/links'

export default function Navbar(): React.JSX.Element {
  return (
        <nav className={tw.navbar}>
            <NavLink className={`logo-wrapper ${tw.logoWrapper}`} to={`${links.landing}`}><LogoMin styles={tw.logo} /></NavLink>
            { navLinksData.map( (linkData, i) => { return (
                <NavbarLink link={linkData} key={i}/> )}
            )}
        </nav>  
    )
}