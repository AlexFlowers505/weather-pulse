import React from 'react'

import LogoMin from '../components/LogoMin'
import navLinksData from '../../data/navLinksData' 
import NavLink from '../components/NavLink'

const className = `
    flex
    w-fit
    flex-col
    justify-start
    items-center
    gap-5
    bg-bgPrimary
    p-2
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