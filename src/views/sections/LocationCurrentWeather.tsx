import FavouriteBtn from '../components/btns/FavouriteBtn'
import btnStyles from '../../styles/components/btn.style'
import { locationCurrentWeatherStyle as tw } from '../../styles/sections/LocationCurrentWeather.style'
import { symbolDegree } from '../../constants/symbols'
import { useCheckStoreIfFavourite } from '../../hooks/useCheckStoreIfFavourite'
import { useEffect, useState } from 'react'
import { fetchIcon } from '../../api/openWeatherMap/fetchIcon'
import { WholeLocationData } from '../../types/overalls/wholeLocationData.type'

export default function LocationCurrentWeather({ ...locationData }: Omit<WholeLocationData, 'forecast'> ): React.JSX.Element {

  const isFavourite = useCheckStoreIfFavourite(locationData.id)  
  const [iconLocalUrl, setIconLocalUrl] = useState('')

  useEffect( () => {
    const loadIcon = async () => {
      try {
        const url = await fetchIcon(locationData.weatherIcon)
        setIconLocalUrl(url)
      } catch (error) {
        console.error('Error fetching icon:', error)
      }
    }
    loadIcon()
  }, [locationData.weatherIcon])
  
  return (
    <section className={`${tw.wrapper}`}>
      <div className={`${tw.nameBlock}`}>
        <FavouriteBtn 
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
          extraBtnClass={tw.favouriteBtn}
        />
        <div className={`heading-wrapper ${tw.headingWrapper}`}>
          <h6 className={`${tw.name}`}>{locationData.area}</h6>
          { 
            locationData.isSpecific && 
            <span className={`specific-location ${tw.specificLocation}`}>{locationData.specificLocation}</span>
          }
        </div>
      </div>
      <div className={`${tw.weatherDataWrapper}`}>
        <span className={`${tw.degrees}`}>{locationData.temperature}{symbolDegree}</span>
        <img className={`${tw.pic}`} src={iconLocalUrl} alt="" />
      </div>
      <img className={`${tw.bgPic}`} src={iconLocalUrl} alt="" />
    </section>
  )
}