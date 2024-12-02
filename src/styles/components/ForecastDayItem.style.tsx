import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const forecastDayItemStyle: tailwindStyleClassType = {
    forecastItemWeatherOuterWrapper: `
        flex
        flex-row
        justify-start
        items-center

        md:flex-col
        `,
    forecastDayItem: `
        flex-row
    `,
    forecastItemWeatherWrapper: `
        flex
        flex-col
        justify-start
        items-center

        md:flex-row
    `,
    forecastItemPic: `
        min-w-16
        w-16
        min-h-16
        h-16
        block
    `,
}