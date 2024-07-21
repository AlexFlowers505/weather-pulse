export const searchStyle = {
    searchBlock: `
      relative
      w-full
      h-full
    `,
    searchBar: `
      p-baseXS
      w-full
      h-full
      text-text
      bg-bgPrimary
      rounded-base
      hover:bg-hoverState
      active:bg-activeState
      border-solid
      border-2
      border-transparent
      outline-none
      focus:border-primary
      focus:bg-bgPrimary
      transition-colors
      ease-in-out
      duration-200
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