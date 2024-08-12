import { tailwindStyleClassType } from "../../types/overalls/utils"

export const messageWrapperStyle: tailwindStyleClassType = {
    wrapper: `
        flex
        flex-col
        justify-start
        items-center
        w-full
        p-1
        sm:p-3

        rounded-3xl
        transition-all
        ease-in-out
        duration-200
        outline-none
        focus:outline-none

        bg-bgPrimary
        //bg-bgPrimary/60
        
        border-text
        border-2
        border-solid
    `,
}