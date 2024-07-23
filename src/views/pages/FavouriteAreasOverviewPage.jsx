import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import AreasForecastsList from '../sections/AreasForecastsList'
import TodayForecast from '../sections/TodayForecast'
import DiverseForecast from '../sections/DiverseForecast'
import { favouriteAreasOverviewPageStyle as tw } from '../../styles/pages/FavouriteAreasOverviewPage.style'

export default function FavouriteAreasOverviewPage() {
  return (
    <>
        <Navbar />
        <div className={tw.wrapper}>
            <ControlPanel />
            <AreasForecastsList />
            <TodayForecast />
        </div>
        <DiverseForecast />
    </>
  )
}