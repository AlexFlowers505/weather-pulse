import { TwStylesObject } from "../../types/overalls/overalls"

export const areaOverviewPageStyle: TwStylesObject = {
  sectionsWrapper: `
    flex 
    flex-col 
    justify-between 
    min-h-full
    min-w-0
    grow
    
    gap-baseXS
    xl:gap-base
  `,
  FewDaysForecast: `
    lg:max-w-96
  `,
}