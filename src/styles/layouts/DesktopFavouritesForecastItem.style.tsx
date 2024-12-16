import { TwStylesObject } from "../../types/overalls/overalls"

export const desktopFavouritesForecastItemStyle: TwStylesObject = {
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
        -mr-3

        !text-xl
        xl:!text-2xl
        `,
    forecastItemTime: `
        grow
        !text-textInactive

        !text-xl
        xl:!text-2xl
    `,
    forecastItemWeatherWrapper: `
        flex
        flex-col
        justify-start
        items-center

        lg:flex-row
    `,
    forecastItemPic: `
        min-w-20
        w-20
        min-h-20
        h-20
        block

        lg:min-w-28
        lg:w-28
        lg:min-h-28
        lg:h-28
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
