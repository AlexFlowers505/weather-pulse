import React from 'react'
import weatherPicturesNames from '../../constants/weatherPicturesNames'

export default function SearchResult() {
  return (
    <li>
        <div className="flex flex-row items-center justify-start">
            <p className="location-name">Москва</p>
            <div className='location-forecast'>
                <span className="location-temp">31°</span>
                <img className="location-temp-pic" src="/assets/images/weather-pictures/sunny.png" alt="" />
            </div>
            <span className="location-region">г Москва</span>
        </div>
    </li>
  )
}
