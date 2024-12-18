import FavouriteBtn from '../components/btns/FavouriteBtn'
import { btnStyles } from '../../styles/components/btn.style'
import { locationCurrentWeatherStyle as tw } from '../../styles/sections/LocationCurrentWeather.style'
import { symbolDegree } from '../../constants/symbols'
import { useCheckStoreIfFavourite } from '../../hooks/useCheckStoreIfFavourite'
import { useEffect, useState } from 'react'
import { fetchIcon } from '../../api/openWeatherMap/fetchIcon'
import { LocationCurrentWeatherProps as Props} from '../../types/components/locationCurrentWeather.type'

export default function LocationCurrentWeather({ outerStyles = {}, hasFavouriteBtn = true, ...locationData }: Props ): React.JSX.Element {

  const isFavourite = useCheckStoreIfFavourite(locationData.id)  
  const [iconLocalUrl, setIconLocalUrl] = useState('')
  
  const isOuterStyles = Object.keys(outerStyles).length
  const styles = isOuterStyles ? outerStyles : tw

  useEffect( () => {
    const loadIcon = async () => {
      try {
        // const url = await fetchIcon(locationData.weatherIcon)
        const url = `assets/images/weather-illustrations/${locationData.weatherIcon}.png`
        setIconLocalUrl(url)
      } catch (error) {
        console.error('Error fetching icon:', error)
      }
    }
    loadIcon()
  }, [locationData.weatherIcon])
  
  return (
    <section className={`${styles.wrapper}`}>
      <div className={`${styles.nameBlock}`}>
        { hasFavouriteBtn && <FavouriteBtn 
          btnSize={btnStyles.size.lg} 
          btnStyle={btnStyles.style.contentOnly}
          isFavourite={isFavourite}
          id={locationData.id}
          lat={locationData.lat}
          lon={locationData.lon}
          isSpecific={locationData.isSpecific}
          specificLocation={locationData.specificLocation}
          area={locationData.area}
          region={locationData.region}
          country={locationData.country}
          extraBtnClass={styles.favouriteBtn}
        />}
        <div className={`heading-wrapper ${styles.headingWrapper}`}>
          <h6 className={`${styles.name}`}>{locationData.area}</h6>
          { 
            locationData.isSpecific && 
            <span className={`specific-location ${styles.specificLocation}`}>{locationData.specificLocation}</span>
          }
        </div>
      </div>
      <div className={`${styles.weatherDataWrapper}`}>
        <span className={`${styles.degrees}`}>{locationData.temperature}{symbolDegree}</span>
        <img className={`${styles.pic}`} src={iconLocalUrl} alt="" />
      </div>
      <img className={`${styles.bgPic}`} src={iconLocalUrl} alt="" />
    </section>
  )
}