import FavouriteBtn from './btns/FavouriteBtn'
import {default as picData}  from '../../constants/weatherPicturesNames'
import { cityShortForecastItemStyle as tw } from '../../styles/components/CityShortForecastItem.style'

export default function CityShortForecastItem() {
  return (
    <div className={`wrapper ${tw.wrapper}`}>
        <div className={`heading-wrapper ${tw.headingWrapper}`}>
            <FavouriteBtn />
            <span className={`name ${tw.name}`}>Москва</span>
        </div>
        <div className={`temp-wrapper ${tw.tempWrapper}`}>
            <span className={`degrees ${tw.degrees}`}>31°</span>
            <img 
              className={`temp-icon ${tw.tempIcon}`} 
              src={`${picData.path}${picData.names.sunny}${picData.fileType}`} 
              alt="" 
            />
        </div>
    </div>
  )
}
