import React from 'react'
import LogoMin from '../components/LogoMin.tsx'
import navLinksData from '../../data/navLinksData.ts' 
import NavbarLink from '../components/NavbarLink.tsx'
import { helloSectionStyle as tw } from '../../styles/sections/HelloSection.style.tsx'

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