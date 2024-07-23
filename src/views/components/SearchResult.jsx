import { useState, useEffect } from 'react'
import { searchResultStyle as tw } from '../../styles/components/SearchResult.style'
import { fetchIcon } from '../../api/openWeatherMap'

function handleHighlightMatchText(textWithMatch='', request) {
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


export default function SearchResult({...props}) { 
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
    };

    loadIcon()
  }, [locTempIcon])

  return (
    <li>
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
