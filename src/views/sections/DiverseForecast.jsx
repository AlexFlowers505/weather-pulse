import ForecastItems from '../components/ForecastItems'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import {default as picData} from '../../constants/weatherPicturesNames'
import Btn from '../components/Btn'
import btnContentTypes from '../../constants/btnContentTypes.ts'
import svgSymbols from '../../constants/svgSymbols'
import btnStyles from '../../styles/components/btn.style'
import { diverseForecastStyle as tw } from '../../styles/sections/DiverseForecast.style'

export default function DiverseForecast() {
  return (
    <section className={`forecast container-visuals ${tw.wrapper}`}>
        <Btn 
            extraBtnClass={tw.expandBtn}
            contentType={btnContentTypes.icon}
            content={svgSymbols.iconExpand}
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