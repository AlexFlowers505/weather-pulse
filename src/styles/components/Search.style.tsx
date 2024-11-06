import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const searchStyle: tailwindStyleClassType = {
    searchBlock: `
      relative
      w-full
      max-w-2xl
      h-full
      md:min-w-max

      group/search-block
    `,
    searchBar: `
      w-full
      h-full
      p-4
      pr-20
      md:pr-24
      rounded-2xl
      text-text
      bg-bgPrimary
      hover:bg-hoverState
      active:bg-activeState
      border-solid
      border-2
      border-transparent
      outline-none
      focus:border-primary
      focus:bg-bgPrimary
      transition-colors
      placeholder:text-ellipsis
      ease-in-out
      duration-200
      text-base-mobile

      md:text-base
      md:p-baseXS
      md:pr-14
      md:rounded-base
    `,
    searchBarNoUnitsBtn: `
      w-full
      h-full
      p-4
      pr-6
      rounded-xl
      text-text
      bg-bgPrimary
      hover:bg-hoverState
      active:bg-activeState
      border-solid
      border-2
      border-transparent
      outline-none
      focus:border-primary
      focus:bg-bgPrimary
      transition-colors
      placeholder:text-ellipsis
      ease-in-out
      duration-200
      text-base-mobile
      
      md:text-base
      md:p-baseXS
      md:pr-14
      md:rounded-base
    `,
    inputWrapper: `
      relative
    `,
    btnWrapper: `
      absolute
      right-3
      top-2/4
      -translate-y-2/4

      flex
      flex-row
      justify-end
      items-center
      gap-0
    `,
    DismissBtn: `
      !p-1
      md:!p-2
  
      hover:scale-125
      hover:-rotate-180
      hover:text-primary
      
      focus:-rotate-180
      focus:scale-125
      focus:text-primary
      
      active:rotate-90
      active:scale-110
      active:text-activeStateLight
    `,
    unitsBtn: `
      !p-1
      md:!p-2
      !text-[21px]
      md:!text-[25px]
    `
  }