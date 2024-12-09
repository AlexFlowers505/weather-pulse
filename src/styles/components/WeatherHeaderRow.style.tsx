import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const weatherHeaderRowStyle: tailwindStyleClassType = {
    wrapper: `
        hidden
        flex-row
        justify-between
        items-center
        px-4
        my-4

        lg:flex
    `,
    headerIconWrapper: `
        flex
        flex-row
        justify-start
        items-center
        w-7
        h-7
        text-white
    `
}