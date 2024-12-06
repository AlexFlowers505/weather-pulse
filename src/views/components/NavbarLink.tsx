import React from 'react'
import { NavLink } from 'react-router-dom'
import { navbarLinkStyle as tw } from '../../styles/components/NavbarLink.style'

type NavbarLinkPropsType = {
    link: {
        url: string
        text: string
        icon: string
    }
}

export default function NavbarLink({ link }: NavbarLinkPropsType): React.JSX.Element {

    const getLinkStyle = ({ isActive }: { isActive: boolean }): string => isActive ? `${tw.link} ${tw.activeLink}` : tw.link

    return (
        <NavLink className={getLinkStyle} to={link.url}>
            <svg className={tw.icon}><use href={`#${link.icon}`} /></svg>
            <span>{link.text}</span>
        </NavLink>
    )
}