import React from 'react'
import CityShortForecastItem from '../components/CityShortForecastItem'

const className = `
  flex
  flex-col
  justify-start
  items-start
  w-full
  gap-baseXS
`

export default function CitiesForecastsList() {
  return (
    <section className={className}>
        <CityShortForecastItem />
        <CityShortForecastItem />
        <CityShortForecastItem />
    </section>
  )
}
