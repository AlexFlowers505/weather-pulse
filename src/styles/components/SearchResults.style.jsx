export const SearchResultsStyle = {
    container: `
        absolute
        w-full
        p-2
        shadow-md
        top-16
        
        md:p-3
        md:top-20
        block
        hidden/

        group-focus-within/search-block:block
    `,
    list: `
        overflow-y-auto
        max-h-[400px]
        flex
        flex-col
        gap-2
    `,
    horLine: `
        border-lineColor 
        mx-2
    `
}

export const SearchResultStyleArbitrary = {
    list: {
        scrollbarGutter: 'stable',
        scrollbarWidth: 'thin'
    }
}