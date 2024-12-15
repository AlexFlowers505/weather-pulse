import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const areasForecastsListStyle: tailwindStyleClassType = {
    base: `
    w-full
    h-full
    min-h-0
    p-0
    overflow-hidden
    `,
    outerWrapper: `
    w-full
    max-h-[800px]
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
    h-full
    min-h-0
    max-h-full
    p-baseXS
    `
}