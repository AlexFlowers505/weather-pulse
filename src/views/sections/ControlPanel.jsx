import ChangeUnitsBtn from '../components/btns/ChangeUnitsBtn'
import LocateMeBtn from '../components/btns/LocateMeBtn'
import Search from '../components/Search'
import btnStyles from '../../styles/components/btn.style.tsx'
import { controlPanelStyle as tw } from '../../styles/sections/ControlPanel.style'

export default function ControlPanel() {
  return (
    <section className={tw.base}>
        <Search />
        <LocateMeBtn btnSize={btnStyles.size.base} btnStyle={btnStyles.style.filled} />
        <ChangeUnitsBtn  btnSize={btnStyles.size.base} btnStyle={btnStyles.style.filled} />
    </section>
  )
}
