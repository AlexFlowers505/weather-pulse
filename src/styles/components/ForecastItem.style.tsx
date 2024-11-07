import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const forecastItemStyle: tailwindStyleClassType = {
    forecastItemVerticalLayout: `
        flex
        flex-col
        justify-start
        items-center
        w-full
        `,
    forecastItemLgVerticalLayout: `
        flex
        flex-col
        justify-start
        border-none
        items-center
        w-full

        md:flex-row
        md:justify-between
        md:border-t-2 
        md:border-borderColor
    `,
    forecastItemHorizontalLayout: `
        flex
        flex-row
        justify-between
        items-center
        w-full
        border-t-2 
        border-borderColor
    `,
    forecastItemTime: `
        text-text
        text-base
    `,
    forecastItemPic: `
        min-w-28
        w-28
        min-h-28
        h-28
        block
    `,
    forecastItemTemp: `
        text-text
        text-base
    `,
}