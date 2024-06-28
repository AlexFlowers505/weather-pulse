import React from 'react'

import LogoMin from '../components/LogoMin'
import navLinksData from '../../data/navLinksData' 
import NavLink from '../components/NavLink'

const className = {
    navbarTW: `
        flex
        w-fit
        flex-col
        justify-start
        items-center
        gap-5
        bg-bgPrimary
        p-2
        rounded-base
    `,
    logoTW: `
        w-14 
        p-baseSM 
        pb-2
    `
}
const {navbarTW, logoTW} = className

export default function Navbar() {
  return (
        <nav className={navbarTW}>
            <LogoMin styles={logoTW} />
            { navLinksData.map( (linkData, i) => { return (
                <NavLink link={linkData} key={i}/> )}
            )}
        </nav>  
    )
}