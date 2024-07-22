export const searchStyle = {
    searchBlock: `
      relative
      w-full
      max-w-2xl
      h-full

      group/search-block
    `,
    searchBar: `
      w-full
      h-full
      p-4
      pr-10
      rounded-2xl
      text-text
      bg-bgPrimary
      hover:bg-hoverState
      active:bg-activeState
      border-solid
      border-2
      border-transparent
      outline-none
      focus:border-primary
      focus:bg-bgPrimary
      transition-colors
      placeholder:text-ellipsis
      ease-in-out
      duration-200
      text-base-mobile

      md:text-base
      md:p-baseXS
      md:pr-14
      md:rounded-base
    `,
    inputWrapper: `
      relative
    `,
    DismissBtn: `
      absolute
      right-0
      top-2/4
      -translate-y-2/4
  
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