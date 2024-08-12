import { tailwindStyleClassType } from "../../types/overalls/utils"

export const currentAreaForecastDisplayStyle: tailwindStyleClassType = {
    wrapper: `
    rounded-base
    bg-bgPrimary
    p-base
    flex
    flex-col
    justify-between
    items-start
    w-full
    h-full
    relative
    overflow-hidden
    z-10
  `,
  nameBlock: `
    flex
    flex-row
    justify-start
    items-center
    gap-baseXS
  `,
  name: `
    text-text
    text-4xl
    font-bold
  `,
  degrees: `
    text-text
    text-9xl
    font-light
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
    -top-40
    -right-48
    -z-10
    opacity-20
  `
}