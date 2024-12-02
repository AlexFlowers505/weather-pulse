import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const forecastItemsStyle: tailwindStyleClassType = {
    horizontalLayout: `
        flex
        flex-row
        justify-between
        items-center
        overflow-x-auto
    `,
    verticalLayout: `
        flex
        flex-col
        justify-between
        items-start
    `,
    lgVerticalLayout: `
        flex
        justify-between
        overflow-x-auto

        flex-row
        items-center

        h-full

        md:flex-col
        md:items-start
    `,
    separator: `
        w-full
        min-h-px
        bg-borderColor
        hidden
        
        md:flex
    `
}