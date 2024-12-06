import React from 'react'
import Search from '../components/Search'
import LogoMin from '../components/LogoMin'
import GeolocationBlock from '../components/GeolocationBlock'
import { landingContentBlockConfig as config } from '../../types/sections/landingContentBlock.config'
import { landingContentBlockStyle as tw } from '../../styles/sections/LandingContentBlock.style'


export default function LandingContentBlock(): React.JSX.Element {
  return (
    <section className={`section ${tw.section}`}>
        <div className={`logo-wrapper ${tw.logoWrapper}`}>
            <LogoMin styles={`${tw.logo}`} />
            <h2 className={`logotype ${tw.logotype}`}>Weather Pulse</h2>
        </div>
        <div className={`interaction-block ${tw.interactionBlock}`}>
            <Search styles={`${tw.search}`} hasUnitsBtn={true} isSearchFocusOnLoad={config.isSearchFocusOnLoad} />
            <GeolocationBlock />
        </div>
    </section>
  )
}
