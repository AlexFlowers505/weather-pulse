import { TwStylesObject } from "../../types/overalls/overalls"

export const favouritesForecastsLayoutStyle: TwStylesObject = {
    wrapper: `
        w-full
        flex
        flex-col
        justify-start
        gap-5
        relative
        container-visuals
    `,
    header: `
        text-text
        text-left
        pl-5
        
        font-light
        sm:font-medium
        
        text-lg
        sm:text-xl
        relative
        z-10
    `,
    subHeading: `
        text-text
        font-light
        text-xl
        relative
        z-10
    `,
    bgIcon: `
        absolute
        -bottom-20
        -right-20
        text-bgPrimaryDark
        w-96
        h-96
    `
}