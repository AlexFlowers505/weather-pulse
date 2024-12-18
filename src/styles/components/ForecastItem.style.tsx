import { TwStylesObject } from "../../types/overalls/overalls"

export const forecastItemStyle: TwStylesObject = {
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

        lg:flex-row
        lg:justify-between
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
        min-w-20
        w-20
        min-h-20
        h-20
    `,
    forecastItemTemp: `
        text-text
        text-base
    `,
}