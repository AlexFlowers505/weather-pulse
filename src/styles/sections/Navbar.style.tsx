import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const navbarStyle: tailwindStyleClassType = {
    base: `
        flex
        w-fit
        flex-col
        justify-start
        items-center
        gap-5
        bg-bgPrimary
        p-2
        rounded-base
    `,
    logo: `
        w-14 
        p-baseSM 
        pb-2
    `
}