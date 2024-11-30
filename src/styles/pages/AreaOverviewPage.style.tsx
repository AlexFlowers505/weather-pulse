import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const areaOverviewPageStyle: tailwindStyleClassType = {
    sectionsWrapper: `
      flex 
      flex-col 
      justify-between 
      min-h-full
      grow
      gap-baseXS
      md:gap-base
    `,
    FewDaysForecast: `
      md:min-w-96
    `,
  }