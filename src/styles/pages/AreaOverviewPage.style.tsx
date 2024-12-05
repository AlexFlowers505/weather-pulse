import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const areaOverviewPageStyle: tailwindStyleClassType = {
  sectionsWrapper: `
    flex 
    flex-col 
    justify-between 
    min-h-full
    min-w-0
    grow
    
    md:gap-baseXS
    xl:gap-base
  `,
  FewDaysForecast: `
    lg:max-w-96
  `,
}