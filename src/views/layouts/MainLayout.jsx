import React from 'react'
import { Outlet } from 'react-router-dom'
import MainSVGsprite from '../../assets/svg-sprites/MainSVGsprite'


const className = {
  mainLayout: `
    w-screen
    h-screen
    min-w-fit
    min-h-fit
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

export default function MainLayout() {
  return (
    <>
      <MainSVGsprite />
      <div className={`main-layout ${mainLayout}`}>
        <div className={`content-wrapper ${contentWrapper}`}><Outlet /></div>
      </div>
    </>
  )
}
