import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const forecastLayoutStyle: tailwindStyleClassType = {
    wrapper: `
        w-full
        flex
        flex-col
        justify-start
        gap-5
    `,
    header: `
        text-text
        text-left
        
        font-medium
        sm:font-semibold
        
        text-xl
        sm:text-2xl
    `,
}