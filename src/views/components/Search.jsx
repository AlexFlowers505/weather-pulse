import { useEffect, useState, useRef } from "react"
import btnStyles from '../styles/btnStyles'
import DismissBtn from './btns/CloseBtn'
import SearchResults from './SearchResults'
import { fetchCitySuggestions } from "../../api/dadata"
import { fetchLocationsForecasts } from "../../api/openWeatherMap"
import { removeMultipleSpaces } from "../../utils/utils"
import options from "../../constants/fetchingSuggestionsOptions"
import searchResultsStates from "../../constants/searchResultsStates"
import { handleClearSearchBtnClick } from "../../utils/utils"

const {IDLE, LOADING, ERROR, SUCCESS, NO_RESULTS } = searchResultsStates

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
  const [fetchState, setFetchState] = useState(IDLE)
  const [suggestions, setSuggestions] = useState([])
  const inputRef = useRef(null)

  const handleRequestChange = evt => {
    setRequest(evt.target.value)
  }

  // page loaded handler
  useEffect( () => {
    inputRef.current.focus()
  }, [])
  // request handler
  useEffect( () => {
    const formattedRequest = removeMultipleSpaces(request)

    const debounceFetch = setTimeout( () => {
      if (formattedRequest.length > options.minRequestSymbolsQnt) {
        setFetchState(LOADING)

        fetchCitySuggestions(formattedRequest)
          .then(data => fetchLocationsForecasts(data))
          .then( data => { 
            setSuggestions(data) 
            setFetchState(data.length ? SUCCESS : NO_RESULTS)
          })
          .catch(error => { 
            setFetchState(ERROR)
            console.error(error) 
          })
      } else {
        setFetchState(IDLE)
        setSuggestions([])
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
          {!!request.length && <DismissBtn
            extraBtnStyles={DismissBtnTW}
            btnSize={btnStyles.size.md}
            btnStyle={btnStyles.style.contentOnly}
            onClick={ ()=> handleClearSearchBtnClick(inputRef, setFetchState, setRequest) }
          />}
      </div>
      <SearchResults 
        suggestions={suggestions} 
        fetchState={fetchState} 
        request={request}
        inputRef={inputRef}
        setFetchState={setFetchState}
        setRequest={setRequest}
      />
    </div>
  )
}
