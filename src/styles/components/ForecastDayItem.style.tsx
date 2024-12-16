import { TwStylesObject } from "../../types/overalls/overalls"

export const forecastDayItemStyle: TwStylesObject = {
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

        lg:min-w-fit
        lg:gap-0
    `,
    forecastItemTemp: `
        order-last

        lg:order-none
    `,
    forecastItemTime: `
        grow
    `,
    forecastItemWeatherWrapper: `
        flex
        flex-col
        justify-start
        items-center

        lg:flex-row
    `,
    forecastItemPic: `
        min-w-12
        w-12
        min-h-12
        h-12
        block

        lg:min-w-16
        lg:w-16
        lg:min-h-16
        lg:h-16
    `,
    innerSeparator: `
        min-w-px
        min-h-24
        bg-borderColor
        flex
        
        lg:hidden
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

        lg:hidden
    `,
}