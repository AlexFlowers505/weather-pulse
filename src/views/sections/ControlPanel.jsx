import React from 'react'
import ChangeUnitsBtn from '../components/ChangeUnitsBtn'
import LocateMeBtn from '../components/LocateMeBtn'
import Search from '../components/Search'
import iconBtnStyles from '../styles/iconBtnStyles'

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
        <LocateMeBtn btnSize={iconBtnStyles.size.base} btnStyle={iconBtnStyles.style.filled} />
        <ChangeUnitsBtn  btnSize={iconBtnStyles.size.base} btnStyle={iconBtnStyles.style.filled} />
    </section>
  )
}
