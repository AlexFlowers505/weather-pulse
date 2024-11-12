import React, { useState } from 'react'
import FavouriteBtn from './btns/FavouriteBtn'
import { default as picData } from '../../constants/weatherPicturesNames'
import { areaShortForecastItemStyle as tw } from '../../styles/components/AreaShortForecastItem.style'
import BtnStyles from '../../styles/components/btn.style'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { checkIfFavourite } from '../../utils/utils'
import { FavouriteLocationsStateType } from '../../redux/slices/favouriteLocationsSlice'

type areaShortForecastItemPropsType = {
  city?: string
  temperature?: number
  iconName?: string
  locationData?: any
  // city: string
  // temperature: number
  // iconName: string
}


export default function AreaShortForecastItem({
  temperature,
  iconName,
  locationData,
}: areaShortForecastItemPropsType): JSX.Element {
  const [name, setName] = useState('')
  const [temp, setTemp] = useState(0)
  const [iconUrl, setIconUrl] = useState('')
  const isFavourite = useSelector((state: RootState) => checkIfFavourite(state.favouriteLocations as FavouriteLocationsStateType, locationData.overalls?.lat, locationData.overalls?.lon))
  return (
    <div className={`wrapper ${tw.wrapper}`}>
      <div className={`heading-wrapper ${tw.headingWrapper}`}>
        <FavouriteBtn 
            btnSize={BtnStyles.size.lg} 
            btnStyle={BtnStyles.style.contentOnly} 
            isFavourite={isFavourite}
            lat={locationData.overalls?.lat}
            lon={locationData.overalls?.lon}  
          />
        <span className={`name ${tw.name}`}>Москва</span>
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