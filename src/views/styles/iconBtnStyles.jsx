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
        md: `
            min-w-6
            min-h-6
            w-6
            h-6
            p-baseXS
            text-text
            text-2xl
        `
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