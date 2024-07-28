export const helloSectionStyle = {
    section: `
        flex 
        flex-col 
        justify-start 
        items-center 
        gap-12

        absolute
        w-full
        left-1/2 
        -translate-x-1/2 
        top-1/3
        -translate-y-1/2 
        
        sm:top-1/4
        sm:-translate-y-1/3 
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