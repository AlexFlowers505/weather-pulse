import React from 'react'
import ChangeUnitsBtn from '../components/btns/ChangeUnitsBtn'
import Search from '../components/Search'
import btnStyles from '../../styles/components/btn.style'
import { controlPanelStyle as tw } from '../../styles/sections/ControlPanel.style'
import GeolocationBlock from '../components/GeolocationBlock'

export default function ControlPanel(): React.JSX.Element {
  return (
    <section className={`control-panel ${tw.base}`}>
        <Search hasUnitsBtn={false}/>
        <GeolocationBlock portable={true} />
        <ChangeUnitsBtn  btnSize={btnStyles.size.md} btnStyle={btnStyles.style.filled} />
    </section>
  )
}
