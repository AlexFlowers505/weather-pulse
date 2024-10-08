import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const forecastLayoutStyle: tailwindStyleClassType = {
    wrapper: `
        w-full
        h-fit
        flex
        flex-col
        justify-start
        gap-baseSM
    `,
    header: `
        text-xl
        font-medium
        text-text
    `,
}