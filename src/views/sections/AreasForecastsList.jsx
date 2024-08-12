import AreaShortForecastItem from '../components/AreaShortForecastItem'
import { areasForecastsListStyle as tw } from '../../styles/sections/AreasForecastsList.style.tsx'


export default function AreasForecastsList() {
  return (
    <section className={tw.base}>
        <AreaShortForecastItem />
        <AreaShortForecastItem />
        <AreaShortForecastItem />
    </section>
  )
}
