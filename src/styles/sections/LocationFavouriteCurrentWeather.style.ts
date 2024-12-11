import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const locationFavouriteCurrentWeatherStyle: tailwindStyleClassType = {
    wrapper: `
    rounded-xl
    bg-bgPrimaryDark
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
    p-5
    
    sm:p-8
    
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
    
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-4xl
    xl:text-5xl
  `,
  specificLocation: `
    text-text
    font-light
    bgLinearStart
    text-textInactive
    p-0
    
    
    md:pl-1
    text-2xl
    md:text-3xl
  `,
  degrees: `
    text-text
    font-extralight
    text-8xl
    
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
    -z-10
    opacity-20
    
    w-[400px]
    -right-24
    -bottom-32
    
    md:-bottom-40
    md:w-[540px]
  `,
  favouriteBtn: `
    relative
    -top-1
  `,
}