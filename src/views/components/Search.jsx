import { useEffect, useState, useRef } from "react"
import btnStyles from '../../styles/components/btnStyles'
import DismissBtn from './btns/CloseBtn'
import SearchResults from './SearchResults'
import { fetchCitySuggestions } from "../../api/dadata"
import { fetchLocationsForecasts } from "../../api/openWeatherMap"
import { removeMultipleSpaces } from "../../utils/utils"
import options from "../../constants/fetchingSuggestionsOptions"
import searchResultsStates from "../../constants/searchResultsStates"
import { handleClearSearchBtnClick } from "../../utils/utils"
import { searchStyle as tw } from "../../styles/components/Search.style"

const {IDLE, LOADING, ERROR, SUCCESS, NO_RESULTS } = searchResultsStates

const searchBarAttrs = {
  placeHolder: 'Начните вводить название города'
}

export default function Search({styles=''}) {

  const [request, setRequest] = useState('')
  const [fetchState, setFetchState] = useState(IDLE)
  const [repeatFetch, setRepeatFetch] = useState(false)
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

  }, [request, repeatFetch])

  return (
    <div className={`search-block ${tw.searchBlock} ${styles}`}>
      <div className={`input-wrapper ${tw.inputWrapper}`}>
        <input 
          className={`search-bar ${tw.searchBar}`} 
          ref={inputRef}
          type="text" 
          value={request}
          onChange={ handleRequestChange }
          placeholder={searchBarAttrs.placeHolder} />
          {!!request.length && <DismissBtn
            extraBtnStyles={tw.DismissBtn}
            btnSize={btnStyles.size.md}
            btnStyle={btnStyles.style.contentOnly}
            onClick={ ()=> handleClearSearchBtnClick(inputRef, setFetchState, null, setRequest) }
          />}
      </div>
      <SearchResults 
        suggestions={suggestions} 
        fetchState={fetchState} 
        request={request}
        inputRef={inputRef}
        setFetchState={setFetchState}
        setRequest={setRequest}
        setRepeatFetch={setRepeatFetch}
      />
    </div>
  )
}
