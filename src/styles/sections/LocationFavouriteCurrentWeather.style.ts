import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const locationFavouriteCurrentWeatherStyle: tailwindStyleClassType = {
    wrapper: `
    rounded-xl
    bg-bgPrimaryDark
    flex
    flex-row
    justify-between
    gap-5
    items-center
    w-full
    h-full
    relative
    overflow-hidden
    z-10
    h-fit
    
    md:rounded-base

    px-3
    
    sm:px-4
    sm:py-0.5

    md:px-6
    md:py-3

    lg:px-4
    lg:py-10

    xl:px-5
    xl:py-12
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
  `,
  name: `
    text-text
    font-bold
    
    text-xl
    sm:text-2xl
    md:text-3xl
    lg:text-xl
    xl:text-2xl
  `,
  specificLocation: `
    text-text
    font-light
    bgLinearStart
    text-textInactive
    p-0
    
    
    text-xl
    sm:text-2xl
    lg:text-xl
    xl:text-2xl
  `,
  degrees: `
    text-text
    font-extralight
    
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-4xl
    xl:text-5xl
  `,
  weatherDataWrapper: `
    flex
    flex-row
    justify-center
    items-center
    gap-0
    relative
  `,
  pic: `
    relative

    w-20
    -ml-4

    sm:w-24
    sm:-ml-3
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
    text-favourite
    
    max-w-7
    max-h-7
    -top-1.5
    
    sm:max-w-8
    sm:max-h-8
    sm:-top-1

    md:max-w-9
    md:max-h-9
    md:-top-1

    lg:max-w-7
    lg:max-h-7
    
    lg:-top-1.5
    
    xl:max-w-8
    xl:max-h-8
    xl:-top-1
  `,
}