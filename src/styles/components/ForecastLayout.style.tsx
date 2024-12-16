import { TwStylesObject } from "../../types/overalls/overalls"

export const forecastLayoutStyle: TwStylesObject = {
    wrapper: `
        w-full
        flex
        flex-col
        justify-start
        gap-5
        relative
    `,
    header: `
        text-text
        text-left
        
        font-medium
        sm:font-semibold
        
        text-xl
        sm:text-2xl
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