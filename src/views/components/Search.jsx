import { useEffect, useState } from "react"
import btnStyles from '../styles/btnStyles'
import CloseBtn from './btns/CloseBtn'
import SearchResults from './SearchResults'
import { fetchCitySuggestions } from "../../api/dadata"
import { fetchWeather } from "../../api/openWeatherMap"
import { removeMultipleSpaces } from "../../utils/utils"

const className = {
  searchBlock: `
    relative
    w-full
    h-full
  `,
  searchBar: `
    p-baseXS
    w-full
    h-full
    text-text
    bg-bgPrimary
    rounded-base
    hover:bg-hoverState
    active:bg-activeState
    border-solid
    border-2
    border-transparent
    outline-none
    focus:border-primary
    focus:bg-bgPrimary
    transition-colors
    ease-in-out
    duration-200
  `,
  closeBtn: `
    absolute
    right-0
    top-2/4
    -translate-y-2/4

    hover:scale-125
    hover:-rotate-180
    hover:text-primary
    
    focus:-rotate-180
    focus:scale-125
    focus:text-primary
    
    active:rotate-90
    active:scale-110
    active:text-activeStateLight
  `,
}
const { searchBlock, searchBar, closeBtn } = className

const searchBarAttrs = {
  placeHolder: 'Начните вводить название города'
}

export default function Search({styles=''}) {

  const [request, setRequest] = useState('')
  const [loading, setLoading] = useState(true)
  const handleRequestChange = evt => {
    setRequest(evt.target.value)
    console.log(evt.target.value)
  }

  useEffect( () => {
    const cleanRequest = removeMultipleSpaces(request)

    if (cleanRequest) {
      setLoading(true)
      const getCitySuggestions = async () => {
        try {
          const cityRawSuggestions = await fetchCitySuggestions(cleanRequest)
          return cityRawSuggestions
        } catch (error) {
          console.error('Error:', error)
          return []
        }
      }

      const fetchWeatherData = async locations => {
        try {
          const forecastsArray = await Promise.all(
            locations.map(async elm => {
              const forecast = await fetchWeather(elm.lat, elm.lon)
              return { ...elm, forecast }
            })
          );
          console.log(forecastsArray)
          // setWeatherData(forecastsArray)
        } catch (error) {
          console.error('Error fetching weather data:', error)
        } finally {
          setLoading(false)
        }
      }

      getCitySuggestions()
        .then(data => fetchWeatherData(data))
    } else {
      // setWeatherData([])
      return
    }
  }, [request])



  return (
    <div className={`search-block ${searchBlock} ${styles}`}>
      <div className="relative">
        <input 
          className={`search-bar ${searchBar}`} 
          type="text" 
          value={request}
          onChange={ handleRequestChange }
          placeholder={searchBarAttrs.placeHolder} />
          <CloseBtn
            extraBtnStyles={closeBtn}
            btnSize={btnStyles.size.md}
            btnStyle={btnStyles.style.contentOnly}
          />
      </div>
      <SearchResults loading={loading} />
    </div>
  )
}
