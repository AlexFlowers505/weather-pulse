import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const areasForecastsListStyle: tailwindStyleClassType = {
    base: `
    w-full
    h-max
    p-0
    overflow-y-auto
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