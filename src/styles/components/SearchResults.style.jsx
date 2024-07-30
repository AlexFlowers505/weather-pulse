export const SearchResultsStyle = {
    container: `
        z-10
        absolute
        w-full
        container-visuals--custom-p
        p-2
        shadow-md
        top-16
        
        md:p-3
        md:top-20
        hidden

        group-focus-within/search-block:block
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
        scrollbarWidth: 'thin',
        scrollbarColor: '#3C5577 #141C27'
    }
}