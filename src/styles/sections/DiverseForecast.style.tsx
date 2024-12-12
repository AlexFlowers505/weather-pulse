import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const diverseForecastStyle: tailwindStyleClassType = {
    wrapper: `
        w-full
        flex
        flex-col
        justify-start
        gap-baseSM
        relative

        w-full
        flex
        flex-col
        justify-start
        gap-5
        few-days-forecast 
        lg:max-w-96
    `,
    header: `
        text-xl
        font-medium
        text-text
    `,
    degrees: `
        text-text
        font-light
        text-8xl
    `,
    forecastPic: `
        min-w-28
        w-28
        min-h-28
        h-28
        block
    `,
    expandBtn: `
        w-fit 
        absolute 
        right-5 
        top-5 
        p-2.5 
        rounded-xl
    `,
    currentWeatherInfoWrapper: `
        flex 
        flex-row 
        justify-between 
        items-center
    `,
    locationName: `
        font-bold 
        text-4xl 
        text-text
    `,
}