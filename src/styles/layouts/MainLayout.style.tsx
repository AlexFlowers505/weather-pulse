import { tailwindStyleClassType } from "../../types/overalls/utils"

export const mainLayoutStyle: tailwindStyleClassType = {
    mainLayout: `
      w-screen
      h-screen
      min-w-[348px]
      min-h-fit
      max-h-fit
      font-montserrat
      p-5
      bg-gradient-to-r 
      from-bgLinearStart 
      to-bgLinearEnd
    `,
    contentWrapper: `
      flex
      flex-row
      mx-auto
      justify-center
      items-top
      max-w-7xl
      w-full
      min-h-full
      gap-base
      relative
    `,
  }