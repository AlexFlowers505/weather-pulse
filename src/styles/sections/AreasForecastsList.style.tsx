import { TwStylesObject } from "../../types/overalls/overalls"

export const areasForecastsListStyle: TwStylesObject = {
    base: `
    w-full
    h-full
    min-h-0
    p-0
    overflow-hidden
    `,
    outerWrapper: `
    w-full
    h-full
    min-h-0
    overflow-y-auto
    `,
    innerWrapper: `
    w-full
    flex
    flex-col
    gap-baseXS 
    justify-start
    items-start
    h-fit
    max-h-unset
    p-baseXS
    `
}