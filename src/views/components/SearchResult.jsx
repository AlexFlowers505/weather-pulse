import weatherPicturesNames from '../../constants/weatherPicturesNames'

const twStyles = {
  wrapper: `
    flex 
    flex-col
    items-start 
    justify-start
    gap-0
    cursor-pointer
    transition-all
    ease-in-out
    duration-200
    rounded-md
    px-3
    py-1
    outline-none
    focus:outline-none
    hover:bg-hoverState
    focus:bg-hoverState
    active:bg-activeState
    group
  `,
  innerWrapper: `
    flex
    flex-row
    justify-start
    items-center
    gap-4
  `,
  locationNameWrapper: `

  `,
  forecastWrapper: `
    flex
    flex-row
    justify-start
    items-center
    gap-1
  `,
  name: `
    text-text
    text-base
    font-semibold
  `,
  nameMatch: `
    transition-all
    ease-in-out
    duration-200
    bg-primary/30
    group-hover:bg-primary/50
    group-active:bg-primary/50
    rounded-sm
    px-0.5
  `,
  region: `
    text-base
    text-borderColor
  `,
  temp: `
    text-text
    text-base
    font-light
  `,
  tempPic: `
    min-w-6
    w-6
    min-h-6
    h-6
    block
  `,
}

const { wrapper, innerWrapper, forecastWrapper, locationNameWrapper, name, nameMatch, region, temp, tempPic } = twStyles

function handleHighlightMatchText(textWithMatch, request) {
  if (request.length) {
    const regex = new RegExp(`(${request})`, 'gi')
    const parts = textWithMatch.split(regex)

    return parts.map( (part, i) => {
      if (part.toLowerCase() === request.toLowerCase()) {
        return <span key={i} className={`location-name ${name} ${nameMatch}`}>{part}</span>
      }
      return part
    })
  }
  return textWithMatch
}


export default function SearchResult({locName='', locRegion='', locTemp=null, request=''}) { 
  const suggText = handleHighlightMatchText(locName, request)
  return (
    <li>
        <a className={`${wrapper}`} tabIndex={0}>
          <div className={`${innerWrapper}`}>
            <div className={`location-name-wrapper ${locationNameWrapper}`}>
              <span className={`location-name ${name}`}>{handleHighlightMatchText(locName, request)}</span>
            </div>
            <div className={`location-forecast ${forecastWrapper}`}>
                <span className={`location-temp ${temp}`}>{locTemp}°</span>
                <img className={`location-temp-pic ${tempPic}`} src="/assets/images/weather-pictures/sunny.png" alt="" />
            </div>
          </div>
          <span className={`location-region ${region}`}>{locRegion}</span>
        </a>
    </li>
  )
}
