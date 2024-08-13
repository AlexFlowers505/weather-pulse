import React from 'react'
import ForecastItems from '../components/ForecastItems.tsx'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes.ts'
import {default as picData} from '../../constants/weatherPicturesNames.ts'
import Btn from '../components/Btn.tsx'
import { btnContentType } from '../../constants/btnContentType.ts'
import svgSymbolsIDs from '../../constants/svgSymbolsIDs.ts'
import btnStyles from '../../styles/components/btn.style.tsx'
import { diverseForecastStyle as tw } from '../../styles/sections/DiverseForecast.style.tsx'

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
            <ForecastItems layout={forecastLayoutTypes.horizontal} />
        </div>
        <hr />
        <div className={`block-wrapper ${tw.wrapper}`}>
            <h6 className={tw.header}>Прогноз на 3 дня</h6>
            <ForecastItems layout={forecastLayoutTypes.vertical} />
        </div>
    </section>  )
}