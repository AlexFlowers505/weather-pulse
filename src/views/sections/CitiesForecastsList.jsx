import React from 'react'
import CityShortForecastItem from '../components/CityShortForecastItem'
import { citiesForecastsListStyle as tw } from '../../styles/sections/CitiesForecastsList.style'


export default function CitiesForecastsList() {
  return (
    <section className={tw.base}>
        <CityShortForecastItem />
        <CityShortForecastItem />
        <CityShortForecastItem />
    </section>
  )
}
