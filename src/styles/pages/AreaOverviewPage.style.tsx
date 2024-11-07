import { tailwindStyleClassType } from "../../types/overalls/overalls"
import FewDaysForecast from "../../views/sections/FewDaysForecast"

export const areaOverviewPageStyle: tailwindStyleClassType = {
    sectionsWrapper: `
      flex 
      flex-col 
      justify-between 
      min-h-full
      w-full 
      gap-baseXS

      md:gap-base
    `,
    FewDaysForecast: `
      md:min-w-72
    `,
  }