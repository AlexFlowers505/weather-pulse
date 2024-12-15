import React from 'react'
import Navbar from '../sections/Navbar'
import ControlPanel from '../sections/ControlPanel'
import AreasForecastsList from '../sections/AreasForecastsList'
import { favouriteAreasOverviewPageStyle as tw } from '../../styles/pages/FavouriteAreasOverviewPage.style'
import FewDaysForecast from '../sections/FewDaysForecast'

export default function FavouriteAreasOverviewPage(): React.JSX.Element {
  return (
    <>
        <Navbar />
        <div className={`ctrls-n-areas-list-wrapper ${tw.wrapper}`}>
            <ControlPanel isSearchFocusOnLoad={false}/>
            <AreasForecastsList />
        </div>
        <FewDaysForecast locationData={null} extraStyles={`few-days-forecast ${tw.FewDaysForecast}`} />
    </>
  )
}