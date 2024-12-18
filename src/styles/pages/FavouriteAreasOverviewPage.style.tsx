import { TwStylesObject } from "../../types/overalls/overalls"

export const favouriteAreasOverviewPageStyle: TwStylesObject = {
    wrapper: `
        flex
        flex-col
        justify-between
        items-start
        min-w-0
        w-full
        gap-baseXS
        min-h-0
        h-full
        
        lg:max-h-full
        xl:gap-base
    `,
    fewDaysForecast: `
        hidden
        lg:flex
        lg:max-w-96


        transition-all
        ease-in-out
        duration-200
    `,
    fewDaysForecast__active: `
        hidden
        lg:flex
        !bg-activeState
    `,
}