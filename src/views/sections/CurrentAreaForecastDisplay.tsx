import React, { useEffect, useState } from 'react'
import FavouriteBtn from '../components/btns/FavouriteBtn'
import btnStyles from '../../styles/components/btn.style'
import weatherPicturesNames from '../../constants/weatherPicturesNames'
import { currentAreaForecastDisplayStyle as tw } from '../../styles/sections/CurrentAreaForecastDisplay.style'
import { symbolDegree } from '../../constants/symbols'
import { checkIfFavourite } from '../../utils/utils'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { FavouriteLocationsStateType } from '../../redux/slices/favouriteLocationsSlice'
import { fetchIcon } from '../../api/openWeatherMap'
const {names: imgNames, fileType: imgType, path: imgPath} = weatherPicturesNames

export default function CurrentAreaForecastDisplay({ locationData }: { locationData: any }): React.JSX.Element {
  const [name, setName] = useState('')
  const [temp, setTemp] = useState(0)
  const [iconUrl, setIconUrl] = useState('')

  const isFavourite = useSelector((state: RootState) => checkIfFavourite(state.favouriteLocations as FavouriteLocationsStateType, locationData.overalls?.lat, locationData.overalls?.lon))
  
  useEffect(() => {
    setName(locationData.overalls?.area || '')
    setTemp(locationData.weather?.main.temp ? Math.round(locationData.weather.main.temp) : 0)

    const loadIcon = async () => {
      try {
        const url = await fetchIcon(locationData.weather?.weather[0].icon)
        setIconUrl(url)
      } catch (error) {
        console.error('Error fetching icon:', error)
      }
    }

    loadIcon()
  }, [locationData])

  return (
    <section className={`${tw.wrapper}`}>
      <div className={`${tw.nameBlock}`}>
        <FavouriteBtn 
          btnSize={btnStyles.size.lg} 
          btnStyle={btnStyles.style.contentOnly} 
          isFavourite={isFavourite}
          lat={locationData.overalls?.lat}
          lon={locationData.overalls?.lon}  
        />
        <h6 className={`${tw.name}`}>{name}</h6>
      </div>
      <div className={`${tw.weatherDataWrapper}`}>
        <span className={`${tw.degrees}`}>{temp}{symbolDegree}</span>
        <img className={`${tw.pic}`} src={iconUrl} alt="" />
      </div>
      <img className={`${tw.bgPic}`} src={iconUrl} alt="" />
    </section>
  )
}