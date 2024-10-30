import { tailwindStyleClassType } from "../../types/overalls/overalls"

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
    text-5xl
    font-bold
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
  `
}