import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const locationFavouriteCurrentWeatherStyle: tailwindStyleClassType = {
    wrapper: `
    rounded-xl
    bg-bgPrimaryDark
    flex
    flex-row
    justify-between
    gap-5
    items-start
    w-full
    h-full
    relative
    overflow-hidden
    z-10
    p-5
    min-h-20
    h-fit
    
    sm:p-8
    
    md:rounded-base
    
    xl:p-3
  `,
  headingWrapper: `
    flex
    flex-col
    justify-start
    items-start
    gap-0.5
  `,
  nameBlock: `
    flex
    flex-row
    justify-start
    items-start
    gap-2
    relative
    top-3
  `,
  name: `
    text-text
    font-bold
    
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-4xl
    xl:text-2xl
  `,
  specificLocation: `
    text-text
    font-light
    bgLinearStart
    text-textInactive
    p-0
    
    
    text-2xl
    md:text-2xl
  `,
  degrees: `
    text-text
    font-extralight
    text-8xl
    
    md:text-9xl
    lg:text-8xl
    xl:text-5xl
  `,
  weatherDataWrapper: `
    flex
    flex-row
    justify-center
    items-center
    gap-0
    relative
    -top-5
  `,
  pic: `
    w-24
    relative
    -top-1
    -ml-3
  `,
  bgPic: `
    absolute
    -z-10
    opacity-20
    
    w-[400px]
    -right-24
    -bottom-32
    
    md:-bottom-16
    md:w-64
  `,
  favouriteBtn: `
    relative
    -top-1
    max-w-8
    max-h-8
  `,
}