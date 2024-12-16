import { TwStylesObject } from "../../types/overalls/overalls"

export const navbarLinkStyle: TwStylesObject = {
    link: `
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
        min-w-24
        rounded-base
        w-full
        
        hover:bg-hoverState
        active:bg-activeState
    `,
    activeLink: `
        bg-slate-600
    `,
    icon: `
        w-10
        h-10
    `
}