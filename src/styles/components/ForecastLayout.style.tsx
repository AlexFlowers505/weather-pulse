import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const forecastLayoutStyle: tailwindStyleClassType = {
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
    `,
    subHeading: `
        text-text
        font-light
        text-xl
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