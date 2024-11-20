import React, { useState, useEffect } from 'react'
import { searchResultStyle as tw } from '../../styles/components/SearchResult.style'
import FavouriteBtn from './btns/FavouriteBtn'
import btnStyles from '../../styles/components/btn.style'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { Link } from 'react-router-dom'
import { symbolArrow, symbolDegree } from '../../constants/symbols'
import { checkIfFavourite } from '../../utils/utils'
import { FavouriteLocationsStateType } from '../../redux/slices/favouriteLocationsSlice'
import { fetchIcon } from '../../api/openWeatherMap/fetchIcon'
import { MappedLocationShortData } from '../../types/api/openWeatherMap/MappedLocationShortData.type'

function handleHighlightMatchText(textWithMatch: string = '', request: string): string | React.JSX.Element {
  if (request.length) {
    const regex = new RegExp(`(${request})`, 'gi')
    const parts = textWithMatch.split(regex)

    return (
      <>
        {parts.map((part: string, i: number): React.JSX.Element | string => {
          if (part.toLowerCase() === request.toLowerCase()) {
            return <span key={i} className={`location-name ${tw.name} ${tw.nameMatch}`}>{part}</span>
          }
          return part
        })}
      </>
    )
  }
  return textWithMatch
}

export default function SearchResult(props: MappedLocationShortData & { request: string }): React.JSX.Element {
  const { 
    area = '', 
    region = '', 
    country = '', 
    temperature = null, 
    weatherIcon = '', 
    request = '', 
    lon = 0, 
    lat = 0, 
    id=NaN
  } = props

  const [iconUrl, setIconUrl] = useState('')
  const isFavourite = useSelector((state: RootState) => checkIfFavourite(state.favouriteLocations as FavouriteLocationsStateType, lat, lon))

  useEffect( () => {
    const loadIcon = async () => {
      try {
        const url = await fetchIcon(weatherIcon)
        setIconUrl(url)
      } catch (error) {
        console.error('Error fetching icon:', error)
      }
    }

    loadIcon()
  }, [weatherIcon])
  // console.log('weather icon', weatherIcon)
  return (
    <li className={`${tw.externalWrapper}`}>
        <FavouriteBtn 
          btnSize={btnStyles.size.sm}
          btnStyle={btnStyles.style.contentOnly}
          extraBtnClass={`${tw.favouriteBtn}`}
          extraSVGClass={`${tw.favouriteBtnIcon}`}
          isFavourite={isFavourite}
          lat={lat}
          lon={lon}
          id={id}
        />
        <Link className={`${tw.wrapper}`} tabIndex={0} to={`/forecast/${lat}_${lon}`}>
            <div className={`${tw.innerWrapper}`}>
              <div className={`location-name-wrapper ${tw.locationNameWrapper}`}>
                <span className={`location-name ${tw.name}`}>{handleHighlightMatchText(area, request)}</span>
              </div>
              <div className={`location-forecast ${tw.forecastWrapper}`}>
                  <span className={`location-temp ${tw.temp}`}>{temperature}{symbolDegree}</span>
                  <img className={`location-temp-pic ${tw.tempPic}`} src={iconUrl} alt="" />
              </div>
            </div>
            <span className={`location-info ${tw.locationInfo}`}>{!!region.length && `${region} ${symbolArrow} `}{country}</span>
        </Link>
    </li>
  )
}
