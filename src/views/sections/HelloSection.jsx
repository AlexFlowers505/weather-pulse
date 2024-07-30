import Search from '../components/Search'
import LogoMin from '../components/LogoMin'
import { helloSectionStyle as tw } from '../../styles/sections/HelloSection.style'
import GeolocationBlock from '../components/GeolocationBlock'


export default function HelloSection() {
  return (
    <section className={`section ${tw.section}`}>
        <div className={`logo-wrapper ${tw.logoWrapper}`}>
            <LogoMin styles={`${tw.logo}`} />
            <h2 className={`logotype ${tw.logotype}`}>Weather Pulse</h2>
        </div>
        <div className={`interaction-block ${tw.interactionBlock}`}>
            <Search styles={`${tw.search}`} />
            <GeolocationBlock />
        </div>
    </section>
  )
}
