import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const LocationWeatherAndForecastFullStyle: tailwindStyleClassType = {
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
        flex-row
        justify-start
        items-start
        w-full
        -ml-3
        
        gap-3
        
        cursor-pointer
        transition-all
        ease-in-out
        duration-200
        
        hover:bg-hoverState
        active:bg-activeState
        
        pl-16
        pr-3
        
        sm:pl-20
        sm:pr-4
        sm:py-0.5
        
        md:-ml-5
        md:gap-5
        md:pl-20
        md:pr-6
        md:py-3

        lg:pl-16
        lg:pr-4
        lg:py-1

        xl:pl-20
        xl:pr-5
        xl:py-2
    `,
    activeFavouriteLocation: `
        bg-activeState
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
        md:top-0.5
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
}