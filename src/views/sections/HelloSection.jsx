import Search from '../components/Search'
import LogoMin from '../components/LogoMin'
import Btn from '../components/Btn'
import {default as btnTypes} from '../../constants/btnContentTypes'
import btnStyles from '../../styles/components/btnStyles'
import { helloSectionStyle as tw } from '../../styles/sections/HelloSection.style'

export default function HelloSection() {
  return (
    <section className={`section ${tw.section}`}>
        <div className={`logo-wrapper ${tw.logoWrapper}`}>
            <LogoMin styles={`${tw.logo}`} />
            <h2 className={`logotype ${tw.logotype}`}>Weather Pulse</h2>
        </div>
        <div className={`interaction-block ${tw.interactionBlock}`}>
            <Search styles={`${tw.search}`} />
            <Btn 
                contentType={btnTypes.text} 
                content={`Определить автоматически`}
                btnSize={btnStyles.size.md}
                btnStyle={btnStyles.style.outlined}
            />
        </div>
    </section>
  )
}
