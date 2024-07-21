import FavouriteBtn from '../components/btns/FavouriteBtn'
import btnStyles from '../../styles/components/btnStyles'
import weatherPicturesNames from '../../constants/weatherPicturesNames'
import { currentCityForecastDisplayStyle as tw } from '../../styles/sections/CurrentCityForecastDisplay.style'

const {names: imgNames, fileType: imgType, path: imgPath} = weatherPicturesNames

export default function CurrentCityForecastDisplay() {
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
