import { NavLink } from 'react-router-dom'
import { navbarLinkStyle as tw } from '../../styles/components/NavbarLink.style'


export default function NavbarLink({link}) {
    const { url, text, icon } = link
    const getFinalLinkTWstyle = ({isActive}) => isActive ? `${tw.link} ${tw.activeLink}` : tw.link
    
    return (
        <NavLink className={getFinalLinkTWstyle} to={url}>
            <svg className={tw.icon}><use href={`#${icon}`}/></svg>
            <span>{text}</span>
        </NavLink>
    )
}
