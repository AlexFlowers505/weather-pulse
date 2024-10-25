import React, { useState, useEffect } from 'react'
import { searchResultStyle as tw } from '../../styles/components/SearchResult.style'
import { fetchIcon } from '../../api/openWeatherMap'
import FavouriteBtn from './btns/FavouriteBtn'
import btnStyles from '../../styles/components/btn.style'

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
}
export default function SearchResult({...props}: searchResultPropsType): React.JSX.Element { 
  const { locName='', locRegion='', locCountry='', locTemp=null, locTempIcon='', request='', isFavourite=false} = props

  const [iconUrl, setIconUrl] = useState('')

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

  const handleFavouriteClick = () => {
    
  }
  return (
    <li className={`${tw.externalWrapper}`} is-favourite={isFavourite}>
        <FavouriteBtn 
          btnSize={btnStyles.size.sm}
          btnStyle={btnStyles.style.contentOnly}
          extraBtnClass={`${tw.favouriteBtn}`}
          extraSVGClass={`${tw.favouriteBtnIcon}`}
          isFavourite={isFavourite}
          onClick={() => console.log('favourite')}
        />
        <a className={`${tw.wrapper}`} tabIndex={0}>
          <div className={`${tw.innerWrapper}`}>
            <div className={`location-name-wrapper ${tw.locationNameWrapper}`}>
              <span className={`location-name ${tw.name}`}>{handleHighlightMatchText(locName, request)}</span>
            </div>
            <div className={`location-forecast ${tw.forecastWrapper}`}>
                <span className={`location-temp ${tw.temp}`}>{locTemp}°</span>
                <img className={`location-temp-pic ${tw.tempPic}`} src={iconUrl} alt="" />
            </div>
          </div>
          <span className={`location-info ${tw.locationInfo}`}>{!!locRegion.length && `${locRegion} ➔ `}{locCountry}</span>
        </a>
    </li>
  )
}
