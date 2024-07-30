import { useEffect, useState } from 'react'
import { fetchAreasSuggestions } from "../api/dadata"
import { fetchLocationsForecasts } from "../api/openWeatherMap"
import { removeMultipleSpaces } from "../utils/utils"
import options from "../constants/fetchingSuggestionsOptions"
import searchResultsStates from "../constants/searchResultsStates"

const { IDLE, LOADING, ERROR, SUCCESS, NO_RESULTS } = searchResultsStates

export default function useFetchSuggestions(request, repeatFetch) {
  const [fetchState, setFetchState] = useState(IDLE)
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const formattedRequest = removeMultipleSpaces(request)

    const debounceFetch = setTimeout(() => {
      if (formattedRequest.length > options.minRequestSymbolsQnt) {
        setFetchState(LOADING)

        fetchAreasSuggestions(formattedRequest)
          .then(data => fetchLocationsForecasts(data))
          .then(data => { 
            setSuggestions(data)
            setFetchState(data.length ? SUCCESS : NO_RESULTS)
          })
          .catch(error => { 
            setFetchState(ERROR)
            console.error(error)
          });
      } else {
        setFetchState(IDLE)
        setSuggestions([])
      }
    }, options.debounceTimeInMilisec)

    return () => clearTimeout(debounceFetch)
  }, [request, repeatFetch])

  return { fetchState, suggestions, setFetchState }
}