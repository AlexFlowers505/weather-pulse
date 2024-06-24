import React from 'react'

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
    icon_TW: `
        w-10
        h-10
    `
}
const { link_TW, icon_TW } = className

export default function NavLink({link}) {
    const { url, text, icon } = link
    
    return (
        <a className={link_TW} href={url}>
            <svg className={icon_TW}><use href={`#${icon}`}/></svg>
            <span>{text}</span>
        </a>
    )
}
