export default {
    base: `
        flex
        flex-row
        justify-start
        items-center
        rounded-base
        box-content
        font-black
        text-text
        font-montserrat
        transition-all
        ease-in-out
        duration-200
        outline-none
        focus:outline-none
    `,
    size: {
        md: {
            btn: `
                p-baseXS
                text-2xl
            `,
            icon: `
                w-7
                h-7
            `,
        },
        sm: {
            btn: `
                px-4
                py-3
                rounded-2xl
            `,
        }
    },
    style: {
        filled: `
            bg-bgPrimary
            hover:bg-hoverState
            focus:bg-hoverState
            active:bg-activeState
        `,
        outlined: `
            border-text
            font-light
            text-base
            border-2
            border-solid
            bg-transparent
            focus:bg-hoverState
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