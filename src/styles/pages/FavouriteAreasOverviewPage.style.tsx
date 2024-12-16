import { TwStylesObject } from "../../types/overalls/overalls"

export const favouriteAreasOverviewPageStyle: TwStylesObject = {
    wrapper: `
        flex
        flex-col
        justify-between
        items-start
        w-full
        gap-baseXS
        min-h-0
        h-full
        max-h-[800px]

        xl:gap-base
    `,
    fewDaysForecast: `
        hidden
        lg:flex
    `,
}