import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const helloSectionStyle: tailwindStyleClassType = {
    section: `
        flex 
        flex-col 
        justify-start 
        items-center 
        gap-12
        pb-10
        w-full
        mt-24
    `,
    logoWrapper: `
        flex 
        flex-col 
        justify-start 
        items-center 
        w-fit
        gap-6

        md:gap-12
        md:p-2
        md:w-xl
    `,
    logotype: `
        text-text 
        font-bold 
        text-center 
        w-max
        cursor-default
        text-4xl
        
        sm:text-5xl
        md:text-7xl 
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
        max-w-52
        md:max-w-60
    `,
    search: `
        w-full
        relative
    `,
}