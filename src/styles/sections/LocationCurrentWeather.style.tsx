import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const locationCurrentWeatherStyle: tailwindStyleClassType = {
    wrapper: `
    rounded-xl
    bg-bgPrimary
    flex
    flex-col
    justify-between
    gap-5
    items-start
    w-full
    h-full
    relative
    overflow-hidden
    z-10
    p-8
    
    md:rounded-base
    xl:p-base
  `,
  headingWrapper: `
    flex
    flex-col
    justify-start
    items-start
    gap-2
  `,
  nameBlock: `
    flex
    flex-row
    justify-start
    items-start
    gap-baseXS
  `,
  name: `
    text-text
    font-bold
    
    md:text-5xl
    lg:text-4xl
    xl:text-5xl
  `,
  specificLocation: `
    text-text
    text-3xl
    font-light
    bgLinearStart
    text-textInactive
    pl-1
  `,
  degrees: `
    text-text
    font-extralight

    
    md:text-9xl
    lg:text-8xl
    xl:text-9xl
  `,
  weatherDataWrapper: `
    flex
    flex-row
    justify-center
    items-center
    gap-0
  `,
  pic: `
    w-28
    relative
    -top-6
  `,
  bgPic: `
    absolute
    w-3/4
    -z-10
    opacity-20
    -top-32
    -right-24
    
    md:-top-20
    md:-right-20
    md:w-3/5
    lg:-top-62
    lg:-right-28
    xl:-top-40
    xl:-right-36
    2xl:w-3/5
  `,
  favouriteBtn: `
    relative
    -top-1
  `,
}