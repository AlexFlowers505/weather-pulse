import { useEffect, useState, useRef } from "react"
import btnStyles from '../styles/btnStyles'
import DismissBtn from './btns/CloseBtn'
import SearchResults from './SearchResults'
import { fetchCitySuggestions } from "../../api/dadata"
import { fetchLocationsForecasts } from "../../api/openWeatherMap"
import { removeMultipleSpaces } from "../../utils/utils"
import options from "../../constants/fetchingSuggestionsOptions"

const twStyles = {
  searchBlockTW: `
    relative
    w-full
    h-full
  `,
  searchBarTW: `
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
  DismissBtnTW: `
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
const { searchBlockTW, searchBarTW, DismissBtnTW } = twStyles

const searchBarAttrs = {
  placeHolder: 'Начните вводить название города'
}

export default function Search({styles=''}) {

  const [request, setRequest] = useState('')
  const [loading, setLoading] = useState(true)
  const inputRef = useRef(null)

  const handleRequestChange = evt => {
    setRequest(evt.target.value)
    console.log(evt.target.value)
  }

  const handleDismissBtnClick = () => {
    setRequest('')
    setLoading(false)
    inputRef.current.focus()
  }

  useEffect( () => {
    const formattedRequest = removeMultipleSpaces(request)

    const debounceFetch = setTimeout( () => {
      if (formattedRequest.length > options.minRequestSymbolsQnt) {
        setLoading(true)

        fetchCitySuggestions(formattedRequest)
          .then(data => fetchLocationsForecasts(data))
          .catch(error => { console.error(error) })
          .finally( () => setLoading(false))
      } else {
        setLoading(false)
      }
    }, options.debounceTimeInMilisec)

    return () => clearTimeout(debounceFetch)

  }, [request])



  return (
    <div className={`search-block ${searchBlockTW} ${styles}`}>
      <div className="relative">
        <input 
          className={`search-bar ${searchBarTW}`} 
          ref={inputRef}
          type="text" 
          value={request}
          onChange={ handleRequestChange }
          placeholder={searchBarAttrs.placeHolder} />
          <DismissBtn
            extraBtnStyles={DismissBtnTW}
            btnSize={btnStyles.size.md}
            btnStyle={btnStyles.style.contentOnly}
            onClick={ handleDismissBtnClick }
          />
      </div>
      <SearchResults loading={loading} />
    </div>
  )
}
