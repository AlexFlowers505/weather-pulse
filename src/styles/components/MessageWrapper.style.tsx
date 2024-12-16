import { TwStylesObject } from "../../types/overalls/overalls"

export const messageWrapperStyle: TwStylesObject = {
  outerWrapper: `
    absolute
    top-0
    left-0
    w-screen
    min-h-screen
    h-fit
    bg-black/40
    backdrop-blur-sm
    z-20
    flex
    justify-center
    items-center
    cursor-pointer
    p-baseXS
    
    md:p-base
  `,
  wrapper: `
    flex
    flex-col
    justify-start
    items-center
    w-full
    p-1
    sm:p-3
    max-w-3xl

    rounded-3xl
    transition-all
    ease-in-out
    duration-200
    outline-none
    focus:outline-none

    bg-bgPrimary
    //bg-bgPrimary/60
    
    border-text
    border-2
    border-solid
    cursor-default
    `,
}