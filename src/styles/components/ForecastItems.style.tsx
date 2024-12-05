import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const forecastItemsStyle: tailwindStyleClassType = {
    horizontalLayout: `
        flex
        flex-row
        justify-between
        items-center
        overflow-x-auto

        pb-4
        2xl:p-0
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
        pb-4
        
        flex-row
        items-center

        h-full

        lg:flex-col
        lg:items-start
        lg:p-0
    `,
    separator: `
        w-full
        min-h-px
        bg-borderColor
        hidden
        
        lg:flex
    `
}