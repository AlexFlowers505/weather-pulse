import React from 'react'
import { NavLink } from 'react-router-dom'

const className = {
    link_TW: `
        flex
        flex-col
        justify-start
        items-center
        gap-0
        text-sm
        text-text
        transition-colors
        ease-in-out
        duration-200
        bg-bgPrimary
        p-3
        w-full
        rounded-base
        hover:bg-hoverState
        active:bg-activeState
    `,
    active_link_TW: `
        bg-slate-600
    `,
    icon_TW: `
        w-10
        h-10
    `
}
const { link_TW, active_link_TW, icon_TW } = className

export default function NavbarLink({link}) {
    const { url, text, icon } = link
    const getIsActive = ({isActive}) => isActive && active_link_TW
    
    return (
        <NavLink className={({isActive}) => `${link_TW} ${getIsActive({isActive})}`} to={url}>
            <svg className={icon_TW}><use href={`#${icon}`}/></svg>
            <span>{text}</span>
        </NavLink>
    )
}
