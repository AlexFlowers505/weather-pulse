export type BtnStyleSizeType = {
    btn: string
    icon: string
  }
  
export type BtnStyleType = {
    base: string
    size: {
        lg: BtnStyleSizeType
        md: BtnStyleSizeType
        sm: BtnStyleSizeType
    }
    style: {
        filled: string
        outlined: string
        contentOnly: string
    }
}

const BtnStyles: BtnStyleType = {
    base: `
        flex
        flex-row
        justify-start
        items-center
        rounded-base
        box-content
        font-semibold
        font-montserrat
        transition-all
        ease-in-out
        duration-200
        outline-none
        focus:outline-none
    `,
    size: {
        lg: {
            btn: `
                p-1
                rounded-2xl

                md:text-xl
            `,
            icon: `
                w-12
                h-12
            `,
        },
        md: {
            btn: `
                rounded-xl
                p-4

                md:rounded-2xl
                md:text-2xl
                md:p-baseXS
            `,
            icon: `
                w-6
                h-6
                md:w-7
                md:h-7
            `,
        },
        sm: {
            btn: `
                px-4
                py-3
                rounded-xl

                md:rounded-2xl
            `,
            icon: `
                w-5
                h-5
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
            border-2
            border-solid
            bg-transparent
            focus:bg-hoverState
            hover:bg-hoverState
            active:bg-activeState
            active:border-transparent
            text-base-mobile

            md:text-base
        `,
        contentOnly: `
            border-0
            p-0
            font-light
            bg-transparent
            text-base-mobile

            md:text-base

            transition 
            ease-in-out 
            duration-200

            hover:scale-125
            focus:scale-125

            active:scale-105
        `
    }
}

export default BtnStyles