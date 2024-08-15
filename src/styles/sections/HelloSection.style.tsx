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
        w-xl
        max-w-full
        gap-6

        md:gap-12
    `,
    logotype: `
        text-text 
        font-bold 
        text-[2.3rem]
        text-center 
        w-max
        cursor-default

        sm:text-7xl 
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