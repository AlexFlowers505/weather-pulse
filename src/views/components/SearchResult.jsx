import weatherPicturesNames from '../../constants/weatherPicturesNames'
import { searchResultStyle as tw } from '../../styles/components/SearchResult.style'


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
  const { locName='', locRegion='', locCountry='', locTemp = null, request='' } = props
  return (
    <li>
        <a className={`${tw.wrapper}`} tabIndex={0}>
          <div className={`${tw.innerWrapper}`}>
            <div className={`location-name-wrapper ${tw.locationNameWrapper}`}>
              <span className={`location-name ${tw.name}`}>{handleHighlightMatchText(locName, request)}</span>
            </div>
            <div className={`location-forecast ${tw.forecastWrapper}`}>
                <span className={`location-temp ${tw.temp}`}>{locTemp}°</span>
                <img className={`location-temp-pic ${tw.tempPic}`} src="/assets/images/weather-pictures/sunny.png" alt="" />
            </div>
          </div>
          <span className={`location-info ${tw.locationInfo}`}>{!!locRegion.length && `${locRegion} ➔ `}{locCountry}</span>
        </a>
    </li>
  )
}
