import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const helloSectionStyle: tailwindStyleClassType = {
    section: `
        flex 
        flex-col 
        justify-start 
        items-center 
        gap-12
        pb-10
        
        mt-24
    `,
    logoWrapper: `
        flex 
        flex-col 
        justify-start 
        items-center 
        w-20
        max-w-full
        gap-6

        transition-all
        ease-in-out
        duration-200

        md:gap-12
        md:p-2
        md:w-xl

        hover:saturate-200
        hover:scale-110
    `,
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
    logotype: `
        text-text 
        font-bold 
        text-[2.3rem]
        text-center 
        w-max
        cursor-default

        sm:text-7xl 
        md:w-max
    `,
    interactionBlock: `
        flex 
        flex-col 
        gap-8
        w-full 
        max-w-2xl
        justify-start 
        items-center
    `,
    logo: `
        w-72
        max-w-full
        
        sm:w-96
    `,
    search: `
        w-full
        relative
    `,
}