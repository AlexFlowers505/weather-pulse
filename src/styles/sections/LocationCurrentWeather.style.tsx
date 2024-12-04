import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const locationCurrentWeatherStyle: tailwindStyleClassType = {
    wrapper: `
    rounded-xl
    bg-bgPrimary
    p-base
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
    
    md:rounded-base
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
    text-5xl
    font-bold
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
    text-9xl
    font-extralight
  `,
  weatherDataWrapper: `
    flex
    flex-row
    justify-start
    items-start
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
    -top-48
    -right-32
    -z-10
    opacity-20
  `,
  favouriteBtn: `
    relative
    -top-1
  `,
}