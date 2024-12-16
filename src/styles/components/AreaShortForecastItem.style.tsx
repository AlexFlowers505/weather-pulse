import { TwStylesObject } from "../../types/overalls/overalls"

export const areaShortForecastItemStyle: TwStylesObject = {
    wrapper: `
      w-full 
      flex 
      flex-row 
      justify-between 
      items-center 
      rounded-base 
      bg-bgPrimaryDark 
      p-baseXS
    `,
    headingWrapper: `
      flex 
      flex-row 
      justify-start 
      items-center 
      gap-2
    `,
    name: `
      text-text 
      font-bold 
      text-4xl
    `,
    tempWrapper: `
      flex 
      flex-row 
      justify-start 
      items-center 
      gap-2
    `,
    degrees: `
      text-text 
      text-5xl 
      font-light
    `,
    tempIcon: `
      min-w-20 
      w-20 
      min-h-20 
      h-20 
      block
    `,
  }