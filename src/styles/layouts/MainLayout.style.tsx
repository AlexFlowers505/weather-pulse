import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const mainLayoutStyle: tailwindStyleClassType = {
    mainLayout: `
      w-screen
      min-w-[348px]
      min-h-fit
      h-screen
      font-montserrat
      p-5
      bg-gradient-to-r 
      from-bgLinearStart 
      to-bgLinearEnd
      overflow-x-hidden
    `,
    contentWrapper: `
      flex
      flex-col
      mx-auto
      justify-center
      items-stretch
      w-full
      max-w-lg
      h-fit
      gap-baseXS
      relative
      
      md:flex-row
      md:gap-base
      md:max-w-7xl
    `,
  }