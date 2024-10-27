import React, { useEffect, useState } from 'react'
import FavouriteBtn from '../components/btns/FavouriteBtn'
import btnStyles from '../../styles/components/btn.style'
import weatherPicturesNames from '../../constants/weatherPicturesNames'
import { currentAreaForecastDisplayStyle as tw } from '../../styles/sections/CurrentAreaForecastDisplay.style'
import { symbolDegree } from '../../constants/symbols'

const {names: imgNames, fileType: imgType, path: imgPath} = weatherPicturesNames

export default function CurrentAreaForecastDisplay({ locationData }: { locationData: any }): React.JSX.Element {
  const [name, setName] = useState('')
  const [temp, setTemp] = useState(0)
  
  useEffect(() => {
    setName(locationData.overalls?.area || '')
    setTemp(locationData.weather?.main.temp ? Math.round(locationData.weather.main.temp) : 0)
  }, [locationData])

  return (
    <section className={`${tw.wrapper}`}>
      <div className={`${tw.nameBlock}`}>
        <FavouriteBtn btnSize={btnStyles.size.md} btnStyle={btnStyles.style.outlined} isFavourite={false}/>
        <h6 className={`${tw.name}`}>{name}</h6>
      </div>
      <div className={`${tw.weatherDataWrapper}`}>
        <span className={`${tw.degrees}`}>{temp}{symbolDegree}</span>
        <img className={`${tw.pic}`} src={`${imgPath}${imgNames.sunny}${imgType}`} alt="" />
      </div>
      <img className={`${tw.bgPic}`} src="/assets/images/weather-pictures/sunny.png" alt="" />
    </section>
  )
}