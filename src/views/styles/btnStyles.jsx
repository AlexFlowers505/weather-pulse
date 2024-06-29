export default {
    base: `
        flex
        flex-row
        justify-start
        items-center
        rounded-base
        box-content
        font-black
        font-montserrat
        transition-colors
        ease-in-out
        duration-200
    `,
    size: {
        md: {
            btn: `
                p-baseXS
                text-text
                text-2xl
            `,
            icon: `
                w-7
                h-7
            `
        }
    },
    style: {
        filled: `
            bg-bgPrimary
            hover:bg-hoverState
            active:bg-activeState
        `,
        outlined: `
            border-text
            border-2
            border-solid
            bg-transparent
            @apply hover:bg-hoverState
            active:bg-activeState
            active:border-transparent
        `
    }
}