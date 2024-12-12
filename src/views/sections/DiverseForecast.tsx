import React from 'react'
import ForecastItems from '../components/ForecastItems'
import FORECAST_LAYOUTS from '../../constants/forecastLayouts'
import {default as picData} from '../../constants/weatherPicturesNames'
import Btn from '../components/Btn'
import { btnContentType } from '../../constants/btnContentType'
import svgSymbolsIDs from '../../constants/svgSymbolsIDs'
import btnStyles from '../../styles/components/btn.style'
import { diverseForecastStyle as tw } from '../../styles/sections/DiverseForecast.style'

export default function DiverseForecast(): React.JSX.Element {
  return (
    <section className={`forecast container-visuals ${tw.wrapper}`}>
        <Btn 
            extraBtnClass={tw.expandBtn}
            contentType={btnContentType.icon}
            content={svgSymbolsIDs.iconExpand}
            btnSize={btnStyles.size.md}
        />
        <div className={`current-weather-info-wrapper ${tw.currentWeatherInfoWrapper}`}>
            <div className={`${tw.wrapper}`}>
                <h6 className={`location-name ${tw.locationName}`}>Москва</h6>
                <span className={`degrees ${tw.degrees}`}>31°</span>
            </div>
            <img className={tw.forecastPic} src={`${picData.path}${picData.names.sunny}${picData.fileType}`} alt="" />
        </div>
        <hr />
        <div className={`block-wrapper ${tw.wrapper}`}>
            <h6 className={tw.header}>Краткий прогноз</h6>
            {/* <ForecastItems layout={FORECAST_LAYOUTS.horizontal} /> */}
        </div>
        <hr />
        <div className={`block-wrapper ${tw.wrapper}`}>
            <h6 className={tw.header}>Прогноз на 3 дня</h6>
            {/* <ForecastItems layout={FORECAST_LAYOUTS.vertical} /> */}
        </div>
    </section>  
    )
}