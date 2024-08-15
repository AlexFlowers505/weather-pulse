import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const navbarLinkStyle: tailwindStyleClassType = {
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
        w-full
        rounded-base
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