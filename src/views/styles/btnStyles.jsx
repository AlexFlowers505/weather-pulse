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
        transition-all
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
        },
    },
    style: {
        filled: `
            bg-bgPrimary
            hover:bg-hoverState
            active:bg-activeState
        `,
        outlined: `
            border-text
            font-light
            text-base
            border-2
            border-solid
            bg-transparent
            hover:bg-hoverState
            active:bg-activeState
            active:border-transparent
        `,
        contentOnly: `
            border-0
            p-0
            font-light
            text-base
            bg-transparent
        `
    }
}