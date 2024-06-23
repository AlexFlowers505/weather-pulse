import React from 'react'
import ChangeUnitsBtn from '../../components/ChangeUnitsBtn/ChangeUnitsBtn'
import LocateMeBtn from '../../components/LocateMeBtn/LocateMeBtn'
import Search from '../../components/Search/Search'

const className = `
    flex
    w-full
    h-fit
    flex-row
    justify-start
    items-center
    gap-baseSM
`

export default function ControlPanel() {
  return (
    <section className={className}>
        <Search />
        <LocateMeBtn />
        <ChangeUnitsBtn />
    </section>
  )
}
