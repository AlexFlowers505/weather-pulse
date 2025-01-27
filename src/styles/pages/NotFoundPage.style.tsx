import { TwStylesObject } from "../../types/overalls/overalls";

export const notFoundPageStyle: TwStylesObject = {
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
  notFoundBlock: `
    h-full
    flex
    flex-col
    justify-start
    items-center
    gap-24
    text-text

    lg:pt-32
    pt-16
    `,
    header: `
      flex
      flex-col
      justify-start
      items-center  
      gap-8
    `,
  heading: `
        text-9xl
        font-bold
    `,
  emoticon: `
        text-6xl
        font-arial
    `,
  desc: `
        text-2xl
        text-center
    `,
}
