import React from 'react'
import ChangeUnitsBtn from '../components/btns/ChangeUnitsBtn.tsx'
import LocateMeBtn from '../components/btns/LocateMeBtn.tsx'
import Search from '../components/Search.tsx'
import btnStyles from '../../styles/components/btn.style.tsx'
import { controlPanelStyle as tw } from '../../styles/sections/ControlPanel.style.tsx'

export default function ControlPanel(): React.JSX.Element {
  return (
    <section className={tw.base}>
        <Search />
        <LocateMeBtn btnSize={btnStyles.size.base} btnStyle={btnStyles.style.filled} />
        <ChangeUnitsBtn  btnSize={btnStyles.size.base} btnStyle={btnStyles.style.filled} />
    </section>
  )
}
