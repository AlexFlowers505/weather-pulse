import React from 'react'
import AreaShortForecastItem from '../components/AreaShortForecastItem'
import { areasForecastsListStyle as tw } from '../../styles/sections/AreasForecastsList.style'


export default function AreasForecastsList(): React.JSX.Element {
  return (
    <section className={tw.base}>
        <AreaShortForecastItem />
        <AreaShortForecastItem />
        <AreaShortForecastItem />
    </section>
  )
}
