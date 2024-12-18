import { TwStylesObject } from "../../types/overalls/overalls"

export const locationFavouriteCurrentWeatherStyle: TwStylesObject = {
    wrapper: `
    flex
    flex-row
    justify-between
    gap-5
    items-center
    w-full
    h-full
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
    -mr-3
    sm:-mr-8
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
    z-10
    opacity-20
    
    -right-28
    -bottom-32
    w-[300px]
    
    sm:w-[350px]

    md:w-[290px]
    md:-right-24
    md:-bottom-28
    md:w-64
  `,
}