export const searchResultStyle = {
    wrapper: `
      flex 
      flex-col
      items-start 
      justify-start
      gap-0
      cursor-pointer
      transition-all
      ease-in-out
      duration-200
      rounded-md
      px-3
      py-1
      outline-none
      focus:outline-none
      hover:bg-hoverState
      focus:bg-hoverState
      active:bg-activeState
      group
    `,
    innerWrapper: `
      flex
      flex-row
      justify-start
      items-center
      gap-4
    `,
    locationNameWrapper: `
  
    `,
    forecastWrapper: `
      flex
      flex-row
      justify-start
      items-center
      gap-1
    `,
    name: `
      text-text
      text-base
      font-semibold
    `,
    nameMatch: `
      transition-all
      ease-in-out
      duration-200
      bg-primary/30
      group-hover:bg-primary/50
      group-active:bg-primary/50
      rounded-sm
      px-0.5
    `,
    region: `
      text-base
      text-borderColor
    `,
    temp: `
      text-text
      text-base
      font-light
    `,
    tempPic: `
      min-w-6
      w-6
      min-h-6
      h-6
      block
    `,
  }