import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const mainLayoutStyle: tailwindStyleClassType = {
    mainLayout: `
      w-screen
      min-w-[348px]
      min-h-0
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
      min-h-0
      relative
      
      lg:flex-row
      max-w-[100rem]
      
      gap-baseXS
      
      h-fit
      lg:h-fit
      lg:max-h-[800px]
      
      xl:gap-base
    `,
  }