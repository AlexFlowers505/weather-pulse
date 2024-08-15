import { useEffect, useState } from 'react'
import { fetchAreasSuggestions } from "../api/dadata"
import { fetchLocationsForecasts } from "../api/openWeatherMap"
import { removeMultipleSpaces } from "../utils/utils"
import {default as options} from "../constants/fetchingSuggestionsSettings"
import searchResultsStates from "../constants/searchResultsStates"
import { dadataMappedSuggestionsType } from '../types/overalls/overalls'

const { IDLE, LOADING, ERROR, SUCCESS, NO_RESULTS } = searchResultsStates

type fetchStateType = searchResultsStates

export default function useFetchSuggestions(request: string, repeatFetch: boolean) {
  const [fetchState, setFetchState] = useState<fetchStateType>(IDLE)
  const [suggestions, setSuggestions] = useState<dadataMappedSuggestionsType[]>([])

  useEffect(() => {
    const formattedRequest = removeMultipleSpaces(request)

    const debounceFetch = setTimeout(() => {
      if (formattedRequest.length > options.minRequestSymbolsQnt) {
        setFetchState(LOADING)

        fetchAreasSuggestions(formattedRequest)
          .then(data => fetchLocationsForecasts(data))
          .then(data => { 
            setSuggestions(data)
            console.log('data',data)
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