import React from 'react'
import FavouriteBtn from '../components/FavouriteBtn'
import iconBtnStyles from '../styles/iconBtnStyles'
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
    text-8xl
    font-light
  `,
  picTW: `
  
  `,
  bgPicTW: `
  
  `
}

const {wrapperTW, nameBlockTW, nameTW, degreesTW, picTW, bgPicTW} = className

export default function CurrentCityForecastDisplay() {
  return (
    <section className={`${wrapperTW}`}>
        <div className={`${nameBlockTW}`}>
            <FavouriteBtn btnSize={iconBtnStyles.size.md} btnStyle={iconBtnStyles.style.outlined}/>
            <h6 className={`${nameTW}`}>Москва</h6>
        </div>
        <div className="">
          <span className={`${degreesTW}`}>31°</span>
          <img className={`${picTW}`} src={`${imgPath}${imgNames.sunny}${imgType}`} alt="" />
        </div>
        <img className={`${bgPicTW}`} src="/assets/images/weather-pictures/sunny.png" alt="" />
    </section>
  )
}
