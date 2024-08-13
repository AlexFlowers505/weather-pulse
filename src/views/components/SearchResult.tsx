import React, { useState, useEffect } from 'react'
import { searchResultStyle as tw } from '../../styles/components/SearchResult.style.tsx'
import { fetchIcon } from '../../api/openWeatherMap.ts'
import FavouriteBtn from './btns/FavouriteBtn.tsx'
import btnStyles from '../../styles/components/btn.style.tsx'

function handleHighlightMatchText(textWithMatch: string ='', request): string | React.JSX.Element {
  if (request.length) {
    const regex = new RegExp(`(${request})`, 'gi')
    const parts = textWithMatch.split(regex)

    return parts.map( (part, i) => {
      if (part.toLowerCase() === request.toLowerCase()) {
        return <span key={i} className={`location-name ${tw.name} ${tw.nameMatch}`}>{part}</span>
      }
      return part
    })
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
}
export default function SearchResult({...props}: searchResultPropsType): React.JSX.Element { 
  const { locName='', locRegion='', locCountry='', locTemp=null, locTempIcon='', request='' } = props

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

  return (
    <li className={`${tw.externalWrapper}`}>
        <FavouriteBtn 
          btnSize={btnStyles.size.sm}
          btnStyle={btnStyles.style.contentOnly}
          extraBtnClass={`${tw.favouriteBtn}`}
          extraSVGClass={`${tw.favouriteBtnIcon}`}
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
