import React from 'react'
import FavouriteBtn from './btns/FavouriteBtn'
import {default as picData}  from '../../constants/weatherPicturesNames'

export default function   CityShortForecastItem() {
  return (
    <div className='w-full flex flex-row justify-between items-center rounded-base bg-bgPrimary p-3'>
        <div className="flex flex-row justify-start items-center gap-2">
            <FavouriteBtn />
            <span className='text-text font-bold text-4xl'>Москва</span>
        </div>
        <div className="flex flex-row justify-start items-center gap-2">
            <span className='text-text text-5xl font-light'>31°</span>
            <img className='min-w-20 w-20 min-h-20 h-20 block' src={`${picData.path}${picData.names.sunny}${picData.fileType}`} alt="" />
        </div>
    </div>
  )
}
