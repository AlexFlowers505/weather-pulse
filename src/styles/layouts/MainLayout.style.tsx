import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const mainLayoutStyle: tailwindStyleClassType = {
    mainLayout: `
      w-screen
      min-w-[348px]
      min-h-fit
      h-screen
      font-montserrat
      bg-gradient-to-r 
      from-bgLinearStart 
      to-bgLinearEnd
      overflow-x-hidden
      p-5

      sm:p-10
    `,
    contentWrapper: `
      flex
      flex-col
      mx-auto
      justify-center
      items-stretch
      w-full
      h-fit
      relative
      
      lg:flex-row
      max-w-[100rem]
      
      gap-baseXS
      xl:gap-base
    `,
  }