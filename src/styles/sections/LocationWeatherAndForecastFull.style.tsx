import { TwStylesObject } from "../../types/overalls/overalls"

export const LocationWeatherAndForecastFullStyle: TwStylesObject = {
  wrapper: `
    rounded-xl
    bg-bgPrimaryDark

    w-full
    min-h-max
    relative
    overflow-hidden
    z-10

    flex
    flex-row
    justify-start
    items-start
    
    gap-3
    md:gap-5

    md:rounded-base
  `,
  locationWeatherAndForecast: `
    flex
    flex-col
    justify-start
    items-start
    w-full
    gap-4
    px-baseXS
    -ml-3
    md:-ml-5
    box-content 
    
    cursor-pointer
    transition-all
    ease-in-out
    duration-200
    
    hover:bg-hoverState
    active:bg-activeState
  `,
  locationWeatherAndForecast__active: `
    bg-activeState
    hover:bg-activeState
    active:bg-hoverState
    pb-2
  `,
  locationCurrentWeather:`
    w-full
    pl-11
    py-1

    transition-all
    ease-in-out
    duration-200
    
    sm:pl-14
    sm:py-0.5
    
    md:pl-20
    md:-ml-5
    md:py-3

    lg:pl-16
    lg:py-1

    xl:pl-20
    xl:py-2
  `,
  locationCurrentWeather__active: `
    pr-11
  `,
  favouriteBtn: `
    absolute
    z-10
    text-borderColor
    
    max-w-7
    max-h-7
    -top-3
    mt-8
    left-4
    
    sm:max-w-8
    sm:max-h-8
    sm:-top-1
    sm:left-5
    
    md:max-w-9
    md:max-h-9
    md:top-1
    md:left-6
    
    lg:max-w-7
    lg:max-h-7
    lg:top-0
    lg:left-5
    
    xl:max-w-8
    xl:max-h-8
    xl:top-0.5
    xl:left-6
  `,
  forecastsWrapper: `
    flex
    flex-col
    gap-5
    justify-start
    items-start
    w-full
    -ml-5
    relative
    z-10
  `,
  fewDaysForecast: `
    p-0
    pb-2
    !bg-transparent
    lg:hidden
    w-full
  `,
  todayForecast: `
    p-0
    !bg-transparent
    w-full
  `,
  separator: `
    w-11/12
    min-h-px
    bg-borderColor    
    mx-auto
    `,
  separator__fewDaysForecast: `
    lg:hidden
  `,
}