import React from 'react'
import ChangeUnitsBtn from '../components/btns/ChangeUnitsBtn'
import LocateMeBtn from '../components/btns/LocateMeBtn'
import Search from '../components/Search'
import btnStyles from '../styles/btnStyles'

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
        <LocateMeBtn btnSize={btnStyles.size.base} btnStyle={btnStyles.style.filled} />
        <ChangeUnitsBtn  btnSize={btnStyles.size.base} btnStyle={btnStyles.style.filled} />
    </section>
  )
}
