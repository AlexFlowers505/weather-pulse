import { TwStylesObject } from "../../types/overalls/overalls"

export const searchResultStyle: TwStylesObject = {
    externalWrapper: `
      flex 
      flex-row 
      align-start 
      justify-start
      relative
    `,
    wrapper: `
      flex 
      flex-col
      items-start 
      justify-start
      gap-0
      cursor-pointer
      transition-all
      ease-in-out
      duration-200
      rounded-xl
      px-3
      py-1
      pl-8
      w-full
      outline-none
      focus:outline-none
      hover:bg-hoverState
      focus:bg-hoverState
      active:bg-activeState
      group
    `,
    innerWrapper: `
      flex
      flex-row
      justify-start
      items-center
      gap-4
    `,
    locationNameWrapper: `
  
    `,
    favouriteBtn: `
      !p-1.5
      !pt-4
      absolute 
      h-fit
      group/btn
      text-borderColor
    `,
    favouriteBtnIcon: `
      !w-5 
      !h-5 
    `,
    forecastWrapper: `
      flex
      flex-row
      justify-start
      items-center
      gap-1
    `,
    name: `
      text-text
      text-base
      font-semibold
    `,
    nameMatch: `
      transition-all
      ease-in-out
      duration-200
      bg-primary/30
      group-hover:bg-primary/50
      group-active:bg-primary/50
      rounded-sm
      px-0
    `,
    locationInfo: `
      text-base
      text-borderColor
    `,
    temp: `
      text-text
      text-base
      font-light
    `,
    tempPic: `
      min-w-12
      w-12
      min-h-12
      h-12
      block
    `,
  }