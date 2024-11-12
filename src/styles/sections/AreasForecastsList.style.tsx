import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const areasForecastsListStyle: tailwindStyleClassType = {
    base: `
    w-full
    max-h-96
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