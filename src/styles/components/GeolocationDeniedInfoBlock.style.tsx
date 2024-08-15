import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const GeolocationDeniedInfoBlockStyle: tailwindStyleClassType = {
    contentWrapper: `
        flex
        flex-col
        justify-start
        items-start
        gap-5
        mt-4
        mb-20
    `,
    heading: `
        text-text
        text-xl
        font-semibold
        text-center
        w-full

        md:text-2xl
    `,
    contentList: `
        flex
        flex-col
        justify-start
        items-start
        gap-10
    `,
    btnWrapper: `
        flex
        justify-center
        w-full
        absolute
        left-1/2
        -translate-x-1/2
        bottom-5
    `,
    unravelBtn: `
        !p-0
    `,
    unravelBtnReversed: `
        rotate-180
    `,
    unravelBtnIcon: `
        !w-16 
        !h-16
    `,
    animateHeightComponent: `
        before:block 
        before:absolute 
        before:-inset-1
        before:bg-gradient-to-t
        before:from-bgPrimary
        before:to-transparent
        before:transition-all
        before:ease-in-out
        before:duration-200
        relative
    `,
    animateHeightComponentUnraveled: `
        before:hidden
    `
}