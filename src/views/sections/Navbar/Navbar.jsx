import React from 'react'

import LogoMin from '../../components/LogoMin/LogoMin'
import navLinksData from '../../../data/navLinksData' 
import NavLink from '../../components/NavLink/NavLink'

const className = `
    flex
    w-fit
    flex-col
    justify-start
    items-center
    gap-12
    bg-bgPrimary
    px-baseSM
    py-baseSM
    rounded-base
`

export default function Navbar() {
  return (
        <nav className={className}>
            <LogoMin />
            { navLinksData.map( (linkData, i) => { return (
                <NavLink link={linkData} key={i}/> )}
            )}
        </nav>  
    )
}