import React, { useState, useEffect } from 'react'
import { searchResultStyle as tw } from '../../styles/components/SearchResult.style'
import { fetchIcon } from '../../api/openWeatherMap'
import FavouriteBtn from './btns/FavouriteBtn'
import btnStyles from '../../styles/components/btn.style'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store/store'
import { addLocation, removeLocation } from '../../redux/slices/favouriteLocationsSlice'
import { Link, Route } from 'react-router-dom'
import { symbolArrow, symbolDegree } from '../../constants/symbols'

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

type searchResultPropsType = {
  locName: string
  locRegion: string
  locCountry: string
  locTemp: number
  locTempIcon: string
  request: string
  isFavourite: boolean
  lon: number
  lat: number
}
export default function SearchResult({...props}: searchResultPropsType): React.JSX.Element { 
  const { locName='', locRegion='', locCountry='', locTemp=null, locTempIcon='', request='', lon=0, lat=0} = props
  const dispatch = useDispatch<AppDispatch>()

  const [iconUrl, setIconUrl] = useState('')
  const [isFavourite, setIsFavourite] = useState(props.isFavourite)

  useEffect( () => {
    const loadIcon = async () => {
      try {
        const url = await fetchIcon(locTempIcon)
        setIconUrl(url)
      } catch (error) {
        console.error('Error fetching icon:', error)
      }
    }

    loadIcon()
  }, [locTempIcon])

  const handleFavouriteClick = (lat: number, lon: number) => {
    if (isFavourite) {
      dispatch(removeLocation({ lat, lon }))
      setIsFavourite(false)
    } else {
      dispatch(addLocation({ lat, lon }))
      setIsFavourite(true)
    }
  }
  return (
    <li className={`${tw.externalWrapper}`}>
        <FavouriteBtn 
          btnSize={btnStyles.size.sm}
          btnStyle={btnStyles.style.contentOnly}
          extraBtnClass={`${tw.favouriteBtn}`}
          extraSVGClass={`${tw.favouriteBtnIcon}`}
          isFavourite={isFavourite}
          onClick={() => handleFavouriteClick(lat, lon)}
        />
        <Link className={`${tw.wrapper}`} tabIndex={0} to={`/forecast/${lat}_${lon}`}>
            <div className={`${tw.innerWrapper}`}>
              <div className={`location-name-wrapper ${tw.locationNameWrapper}`}>
                <span className={`location-name ${tw.name}`}>{handleHighlightMatchText(locName, request)}</span>
              </div>
              <div className={`location-forecast ${tw.forecastWrapper}`}>
                  <span className={`location-temp ${tw.temp}`}>{locTemp}{symbolDegree}</span>
                  <img className={`location-temp-pic ${tw.tempPic}`} src={iconUrl} alt="" />
              </div>
            </div>
            <span className={`location-info ${tw.locationInfo}`}>{!!locRegion.length && `${locRegion} ${symbolArrow} `}{locCountry}</span>
        </Link>
    </li>
  )
}
