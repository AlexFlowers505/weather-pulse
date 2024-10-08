import React from 'react'
import FavouriteBtn from '../components/btns/FavouriteBtn'
import btnStyles from '../../styles/components/btn.style'
import weatherPicturesNames from '../../constants/weatherPicturesNames'
import { currentAreaForecastDisplayStyle as tw } from '../../styles/sections/CurrentAreaForecastDisplay.style'

const {names: imgNames, fileType: imgType, path: imgPath} = weatherPicturesNames

export default function CurrentAreaForecastDisplay(): React.JSX.Element {
  return (
    <section className={`${tw.wrapper}`}>
        <div className={`${tw.nameBlock}`}>
            <FavouriteBtn btnSize={btnStyles.size.md} btnStyle={btnStyles.style.outlined}/>
            <h6 className={`${tw.name}`}>Москва</h6>
        </div>
        <div className={`${tw.weatherDataWrapper}`}>
          <span className={`${tw.degrees}`}>31°</span>
          <img className={`${tw.pic}`} src={`${imgPath}${imgNames.sunny}${imgType}`} alt="" />
        </div>
        <img className={`${tw.bgPic}`} src="/assets/images/weather-pictures/sunny.png" alt="" />
    </section>
  )
}
