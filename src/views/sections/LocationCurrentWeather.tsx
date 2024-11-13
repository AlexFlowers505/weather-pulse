import FavouriteBtn from '../components/btns/FavouriteBtn'
import btnStyles from '../../styles/components/btn.style'
import { locationCurrentWeatherStyle as tw } from '../../styles/sections/LocationCurrentWeather.style'
import { symbolDegree } from '../../constants/symbols'
import { useCurrentWeatherInfo } from '../../hooks/useCurrentWeatherInfo'
import { useCheckStoreIfFavourite } from '../../hooks/useCheckStoreIfFavourite'

export default function LocationCurrentWeather({ locationData }: { locationData: any }): React.JSX.Element {
  const lat = locationData.overalls?.lat
  const lon = locationData.overalls?.lon
  const id = locationData.overalls?.id
  const { name, temp, iconUrl } = useCurrentWeatherInfo({ locationData })
  const isFavourite = useCheckStoreIfFavourite(lat, lon)
  
  
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