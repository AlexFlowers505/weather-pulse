import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const areasForecastsListStyle: tailwindStyleClassType = {
    base: `
    w-full
    h-fit
    max-h-[600px]
    p-0
    overflow-hidden
    `,
    innerWrapper: `
      w-full
      flex
      flex-col
      gap-baseXS 
      justify-start
      items-start
      overflow-y-auto
      h-full
      p-baseXS
    `
}