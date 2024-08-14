import React from 'react'
import LogoMin from '../components/LogoMin'
import navLinksData from '../../data/navLinksData' 
import NavbarLink from '../components/NavbarLink'
import { helloSectionStyle as tw } from '../../styles/sections/HelloSection.style'

export default function Navbar(): React.JSX.Element {
  return (
        <nav className={tw.base}>
            <LogoMin styles={tw.logo} />
            { navLinksData.map( (linkData, i) => { return (
                <NavbarLink link={linkData} key={i}/> )}
            )}
        </nav>  
    )
}