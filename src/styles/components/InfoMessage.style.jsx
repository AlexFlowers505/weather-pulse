export const infoMessageStyle = {
    wrapper: `
        w-full
        flex
        flex-col
        justify-start
        items-center
        animate-zoomIn
        opacity-0
        gap-4
        p-5
        
        md:p-6
        md:gap-5
    `,
    headWrapepr: `
        w-full
        flex
        flex-col
        justify-start
        items-center
        gap-3

        md:gap-5
    `,
    illustration: `
        font-semibold
        font-arial
        text-borderColor
        text-4xl
        
        md:text-5xl
    `,
    descWrapper: `
        flex
        flex-col
        justify-start
        items-center
        gap-0
    `,
    headingText: `
        font-semibold
        text-borderColor
        text-center
        text-2xl

        md:text-3xl
    `,
    descLine: `
        text-borderColor
        text-center
        text-base-mobile

        md:text-base
    `,
    DismissBtn: `
      !p-1
      md:!p-2

      absolute
      top-0 
      right-0
  
      hover:scale-125
      hover:-rotate-180
      hover:text-primary
      
      focus:-rotate-180
      focus:scale-125
      focus:text-primary
      
      active:rotate-90
      active:scale-110
      active:text-activeStateLight
    `,
}