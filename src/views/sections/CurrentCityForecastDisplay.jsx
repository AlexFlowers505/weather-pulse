import React from 'react'
import FavouriteBtn from '../components/FavouriteBtn'
import btnStyles from '../styles/btnStyles'
import weatherPicturesNames from '../../constants/weatherPicturesNames'

const {names: imgNames, fileType: imgType, path: imgPath} = weatherPicturesNames

const className = {
  wrapperTW: `
    rounded-base
    bg-bgPrimary
    p-base
    flex
    flex-col
    justify-between
    items-start
    w-full
    h-full
    relative
    overflow-hidden
    z-10
  `,
  nameBlockTW: `
    flex
    flex-row
    justify-start
    items-center
    gap-baseXS
  `,
  nameTW: `
    text-text
    text-4xl
    font-bold
  `,
  degreesTW: `
    text-text
    text-9xl
    font-light
  `,
  weatherDataWrapper: `
    flex
    flex-row
    justify-start
    items-start
    gap-0
  `,
  picTW: `
    w-28
    relative
    -top-6
  `,
  bgPicTW: `
  absolute
  -top-40
  -right-48
  -z-10
  opacity-20
  `
}

const {wrapperTW, nameBlockTW, nameTW, degreesTW, picTW, bgPicTW, weatherDataWrapper} = className

export default function CurrentCityForecastDisplay() {
  return (
    <section className={`${wrapperTW}`}>
        <div className={`${nameBlockTW}`}>
            <FavouriteBtn btnSize={btnStyles.size.md} btnStyle={btnStyles.style.outlined}/>
            <h6 className={`${nameTW}`}>Москва</h6>
        </div>
        <div className={`${weatherDataWrapper}`}>
          <span className={`${degreesTW}`}>31°</span>
          <img className={`${picTW}`} src={`${imgPath}${imgNames.sunny}${imgType}`} alt="" />
        </div>
        <img className={`${bgPicTW}`} src="/assets/images/weather-pictures/sunny.png" alt="" />
    </section>
  )
}
