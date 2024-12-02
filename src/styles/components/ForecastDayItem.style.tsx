import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const forecastDayItemStyle: tailwindStyleClassType = {
    forecastItemWeatherOuterWrapper: `
        flex
        flex-row
        justify-between
        items-center
        grow
        `,
    forecastDayItem: `
        flex-row
        gap-3
        min-w-32

        md:min-w-fit
        md:gap-0
    `,
    forecastItemTemp: `
        order-last

        md:order-none
    `,
    forecastItemTime: `
        grow
    `,
    forecastItemWeatherWrapper: `
        flex
        flex-col
        justify-start
        items-center

        md:flex-row
    `,
    forecastItemPic: `
        min-w-12
        w-12
        min-h-12
        h-12
        block

        md:min-w-16
        md:w-16
        md:min-h-16
        md:h-16
    `,
    innerSeparator: `
        min-w-px
        min-h-24
        bg-borderColor
        flex
        
        md:hidden
    `,
    headerIconWrapper: `
        flex
        flex-row
        justify-center
        items-center
        text-borderColor
        w-6
        min-w-6
        h-6
        min-h-6
        mb-2

        md:hidden
    `,
}