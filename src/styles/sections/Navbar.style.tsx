import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const navbarStyle: tailwindStyleClassType = {
    navbar: `
        bg-bgPrimary
        w-full
        flex
        flex-row
        items-center
        justify-center
        gap-16
        p-3
        rounded-xl
        border-solid
        border-2
        border-transparent  
        
        md:w-fit
        md:grow-0
        md:rounded-2xl
        md:flex-col
        md:justify-start
        md:gap-12
        md:pt-6
    `,
    logoWrapper: `
        flex
        flex-row
        justify-center
        items-center

        transition-all
        ease-in-out
        duration-200

        hover:brightness-125
        hover:scale-110
    `,
    logo: `
        max-w-20 
    `
}