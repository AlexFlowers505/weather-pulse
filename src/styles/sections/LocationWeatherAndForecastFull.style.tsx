import { tailwindStyleClassType } from "../../types/overalls/overalls";

export const LocationWeatherAndForecastFullStyle: tailwindStyleClassType = {
    wrapper: `
        rounded-xl
        bg-bgPrimaryDark

        w-full
        h-fit
        relative
        overflow-hidden
        z-10
        cursor-pointer
        transition-all
        ease-in-out
        duration-200

        flex
        flex-col
        justify-start
        items-start
        gap-5
        
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

        hover:bg-hoverState
        hover:scale-[1.025]

        active:scale-[1.013]
    `,
    locationCurrentWeatherWrapper: `
        flex
        flex-row
        justify-start
        items-start
        gap-5
    `,
    favouriteBtn: `
        relative
        text-borderColor
        
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