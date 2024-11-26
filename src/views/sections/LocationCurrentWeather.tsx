import FavouriteBtn from '../components/btns/FavouriteBtn'
import btnStyles from '../../styles/components/btn.style'
import { locationCurrentWeatherStyle as tw } from '../../styles/sections/LocationCurrentWeather.style'
import { symbolDegree } from '../../constants/symbols'
import { useCheckStoreIfFavourite } from '../../hooks/useCheckStoreIfFavourite'
import { useEffect, useState } from 'react'
import { fetchIcon } from '../../api/openWeatherMap/fetchIcon'

export default function LocationCurrentWeather({ locationData }: any ): React.JSX.Element {
  const lat = locationData.lat
  const lon = locationData.lon
  const id = locationData.id
  const area = locationData.area
  const region = locationData.region
  const country = locationData.country
  const temp = locationData.temperature
  const iconUrl = locationData.weatherIcon

  const isFavourite = useCheckStoreIfFavourite(lat, lon)  
  const [iconLocalUrl, setIconLocalUrl] = useState('')

  useEffect( () => {
    const loadIcon = async () => {
      try {
        const url = await fetchIcon(iconUrl)
        setIconLocalUrl(url)
      } catch (error) {
        console.error('Error fetching icon:', error)
      }
    }
    loadIcon()
  }, [iconUrl])
  
  return (
    <section className={`${tw.wrapper}`}>
      <div className={`${tw.nameBlock}`}>
        <FavouriteBtn 
          btnSize={btnStyles.size.lg} 
          btnStyle={btnStyles.style.contentOnly}
          isFavourite={isFavourite}
          lat={lat}
          lon={lon}  
          id={id}
          area={area}
          region={region}
          country={country}
        />
        <h6 className={`${tw.name}`}>{area}</h6>
      </div>
      <div className={`${tw.weatherDataWrapper}`}>
        <span className={`${tw.degrees}`}>{temp}{symbolDegree}</span>
        <img className={`${tw.pic}`} src={iconLocalUrl} alt="" />
      </div>
      <img className={`${tw.bgPic}`} src={iconLocalUrl} alt="" />
    </section>
  )
}