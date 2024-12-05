import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const SearchResultsStyle: tailwindStyleClassType = {
    container: `
        z-10
        absolute
        w-full
        container-visuals--custom-p
        !bg-bgPrimaryTransparent
        backdrop-blur-lg
        p-2
        drop-shadow-base
        top-16
        
        md:p-3
        md:top-20
        hidden

        group-focus-within/search-block:block

        after:absolute 
        after:top-full
        after:left-0
        after:w-full
        after:h-3.5
        after:bg-transparent
        z-0
    `,
    list: `
        overflow-y-auto
        overflow-x-hidden
        max-h-[385px]
        flex
        flex-col
        gap-2
        border-transparent
        border-2
        border-solid
        rounded-xl

        transition 
        ease-in-out 
        duration-200

        focus:outline-none
        focus:border-text
    `,
    horLine: `
        border-lineColor 
        mx-2
    `
}

export const SearchResultStyleArbitrary = {
    list: {
        scrollbarGutter: 'stable',
        scrollbarWidth: 'thin' as 'auto' | 'thin' | 'none',
        scrollbarColor: '#3C5577 #141C27'
    }
}