import React from 'react'
import ForecastItems from '../components/ForecastItems'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import {default as picData} from '../../constants/weatherPicturesNames'
import Btn from '../components/Btn'
import btnContentTypes from '../../constants/btnContentTypes'
import svgSymbols from '../../constants/svgSymbols'
import btnStyles from '../styles/btnStyles'

const className = {
    wrapper: `
        w-full
        h-fit
        flex
        flex-col
        justify-start
        gap-baseSM
    `,
    header: `
        text-xl
        font-medium
        text-text
    `,
    degrees: `
        text-text
        font-light
        text-8xl
    `,
    forecastPic: `
        min-w-28
        w-28
        min-h-28
        h-28
        block
    `,
}
const {wrapper, header, degrees, forecastPic} = className

export default function DiverseForecast() {
  return (
    <section className={`forecast container-visuals relative ${wrapper}`}>
        <Btn 
            extraBtnStyles='w-fit absolute right-5 top-5 p-2.5 rounded-xl'
            contentType={btnContentTypes.icon}
            content={svgSymbols.iconExpand}
            btnSize={btnStyles.size.md}
        />
        <div className={`block-wrapper flex flex-row justify-between items-center`}>
            <div className={`${wrapper}`}>
                <h6 className={`font-bold text-4xl text-text`}>Москва</h6>
                <span className={`degrees ${degrees}`}>31°</span>
            </div>
            <img className={forecastPic} src={`${picData.path}${picData.names.sunny}${picData.fileType}`} alt="" />
        </div>
        <hr />
        <div className={`block-wrapper ${wrapper}`}>
            <h6 className={header}>Краткий прогноз</h6>
            <ForecastItems layout={forecastLayoutTypes.horizontal} />
        </div>
        <hr />
        <div className={`block-wrapper ${wrapper}`}>
            <h6 className={header}>Прогноз на 3 дня</h6>
            <ForecastItems layout={forecastLayoutTypes.vertical} />
        </div>
    </section>  )
}