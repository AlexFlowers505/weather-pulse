import React from 'react'
import { NavLink } from 'react-router-dom'
import { navbarLinkStyle as tw } from '../../styles/components/NavbarLink.style'


type navbarLinkPropsType = {
    link: {
        url: string
        text: string
        icon: string
    }
}

export default function NavbarLink({link}: navbarLinkPropsType): React.JSX.Element {
    const { url, text, icon } = link

    type getFinalLinkTWstylePropsType = {
        isActive: boolean
    }
    const getFinalLinkTWstyle = ({isActive}: getFinalLinkTWstylePropsType): string => isActive ? `${tw.link} ${tw.activeLink}` : tw.link
    
    return (
        <NavLink className={getFinalLinkTWstyle} to={url}>
            <svg className={tw.icon}><use href={`#${icon}`}/></svg>
            <span>{text}</span>
        </NavLink>
    )
}