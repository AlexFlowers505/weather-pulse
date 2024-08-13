import React from 'react'
import Search from '../components/Search.tsx'
import LogoMin from '../components/LogoMin.tsx'
import { helloSectionStyle as tw } from '../../styles/sections/HelloSection.style.tsx'
import GeolocationBlock from '../components/GeolocationBlock.tsx'


export default function HelloSection(): React.JSX.Element {
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
