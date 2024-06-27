import React from 'react'
import FavouriteBtn from '../components/FavouriteBtn'
import iconBtnStyles from '../styles/iconBtnStyles'

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
  `
}

const {wrapperTW, nameBlockTW, nameTW} = className

export default function CurrentCityForecastDisplay() {
  return (
    <section className={`${wrapperTW}`}>
        <div className={`${nameBlockTW}`}>
            <FavouriteBtn btnSize={iconBtnStyles.size.md} btnStyle={iconBtnStyles.style.outlined}/>
            <h6 className={`${nameTW}`}>Москва</h6>
        </div>
        <div className="">
          <span>31°</span>
          <img src="" alt="" />
        </div>
        <img src="" alt="" />
    </section>
  )
}
