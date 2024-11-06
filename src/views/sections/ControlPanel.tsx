import React from 'react'
import ChangeUnitsBtn from '../components/btns/ChangeUnitsBtn'
import LocateMeBtn from '../components/btns/LocateMeBtn'
import Search from '../components/Search'
import btnStyles from '../../styles/components/btn.style'
import { controlPanelStyle as tw } from '../../styles/sections/ControlPanel.style'

export default function ControlPanel(): React.JSX.Element {
  return (
    <section className={`control-panel ${tw.base}`}>
        <Search hasUnitsBtn={false}/>
        <LocateMeBtn btnSize={btnStyles.size.md} btnStyle={btnStyles.style.filled} />
        <ChangeUnitsBtn  btnSize={btnStyles.size.md} btnStyle={btnStyles.style.filled} />
    </section>
  )
}
