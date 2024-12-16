import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const weatherHeaderRowStyle: tailwindStyleClassType = {
    wrapper: `
        hidden
        flex-row
        justify-between
        items-center
        px-4
        pr-5
        my-4

        lg:flex
    `,
    headerIconWrapper: `
        flex
        flex-row
        justify-start
        items-center
        w-8
        h-8
        text-white
    `
}