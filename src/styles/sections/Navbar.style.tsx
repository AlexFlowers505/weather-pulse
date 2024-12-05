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
        
        lg:w-fit
        lg:grow-0
        lg:rounded-2xl
        lg:flex-col
        lg:justify-start
        lg:gap-12
        lg:pt-6
    `,
    logoWrapper: `
        flex
        flex-row
        justify-center
        items-center
        w-full
        h-full
        min-h-0
        
        lg:h-auto
        transition-all
        ease-in-out
        duration-200

        hover:brightness-125
    `,
    logo: `
        max-w-20 
    `
}