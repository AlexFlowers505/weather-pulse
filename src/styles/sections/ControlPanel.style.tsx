import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const controlPanelStyle: tailwindStyleClassType = {
    base: `
        flex
        w-full
        h-fit
        flex-row
        justify-start
        items-center
        z-20
        relative
        
        gap-baseXS
        xl:gap-baseSM
    `,
    changeUnitsBtn: `
        text-text
    `,
}