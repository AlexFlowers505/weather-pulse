import React from 'react'
import Search from '../components/Search'
import LogoMin from '../components/LogoMin'


const styles = {
    logoTW: `
        w-1/2
        max-w-7xl
    `,
    searchTW: `
        w-full
        relative
        bg-orange-600
        translate-x-2
    `
}
const {logoTW, searchTW} = styles

export default function HelloSection() {
  return (
    <section className='hello-section flex flex-col justify-start items-center gap-16 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-fit top-1/3'>
        <div className="logo-wrapper flex flex-col justify-start items-center gap-12">
            <LogoMin styles={logoTW} />
            <h2 className='text-text font-bold text-9xl text-center w-max'>Weather Pulse</h2>
        </div>
        <div className="flex flex-col gap-12 w-full justify-start items-center">
            <Search styles={searchTW} />
            <button className='text-text rounded-base border border-solid border-text py-baseXS px-baseSM text-base w-fit'>Определить автоматически</button>
        </div>
    </section>
  )
}
