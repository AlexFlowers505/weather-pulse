import React from 'react'

const className = {
  mainLayout: `
    w-screen
    min-h-screen
    bg-gradient-to-r
    from-bgLinearStart
    to-bgLinearEnd
    font-montserrat
    p-5
  `,
  contentWrapper: `
    flex
    flex-row
    mx-auto
    justify-center
    items-top
    max-w-7xl
    gap-base
  `,
}

const {mainLayout, contentWrapper} = className

export default function MainLayout({children}) {
  return (
    <div className={`main-layout ${mainLayout}`}>
      <div className={`content-wrapper ${contentWrapper}`}>{children}</div>
    </div>
  )
}
