import React from 'react'
import FavouriteBtn from './btns/FavouriteBtn'
import { default as picData } from '../../constants/weatherPicturesNames'
import { areaShortForecastItemStyle as tw } from '../../styles/components/AreaShortForecastItem.style'

type areaShortForecastItemPropsType = {
  city?: string
  temperature?: number
  iconName?: string
  // city: string
  // temperature: number
  // iconName: string
}

// Functional component with typed props
export default function AreaShortForecastItem({
  city,
  temperature,
  iconName
}: areaShortForecastItemPropsType): JSX.Element {
  return (
    <div className={`wrapper ${tw.wrapper}`}>
      <div className={`heading-wrapper ${tw.headingWrapper}`}>
        <FavouriteBtn isFavourite={false}/>
        <span className={`name ${tw.name}`}>{city}</span>
      </div>
      <div className={`temp-wrapper ${tw.tempWrapper}`}>
        <span className={`degrees ${tw.degrees}`}>{temperature}°</span>
        <img
          className={`temp-icon ${tw.tempIcon}`}
          src={`${picData.path}${iconName}${picData.fileType}`}
          alt=""
        />
      </div>
    </div>
  )
} 