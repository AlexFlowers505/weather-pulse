import { useEffect, useState } from 'react'
import { removeMultipleSpaces } from "../utils/utils"
import searchResultsStates from "../constants/searchResultsStates"
import { fetchTextBasedLocationSuggestions } from '../api/dadata/fetchTextBasedLocationSuggestions'
import { handleMultipleLocationsWeatherRequests } from '../api/openWeatherMap/handleMultipleLocationsWeatherRequests'
import { MappedSuggestions } from '../types/api/dadata/MappedSuggestions.type'
import { fetchSuggestionsConfig as config } from '../config/api/dadata/fetchSuggestions.config'

const { IDLE, LOADING, ERROR, SUCCESS, NO_RESULTS } = searchResultsStates

type fetchStateType = searchResultsStates

export default function useFetchSuggestions(request: string, repeatFetch: boolean, units: string) {
  const [fetchState, setFetchState] = useState<fetchStateType>(IDLE)
  const [suggestions, setSuggestions] = useState<MappedSuggestions[]>([])

  useEffect(() => {
    const formattedRequest = removeMultipleSpaces(request)

    if (!formattedRequest) {
      setFetchState(IDLE)
      setSuggestions([])
      return
    }

    const debounceFetch = setTimeout(() => {
      if (formattedRequest.length <= config.minRequestSymbolsQnt) {
        setFetchState(IDLE)
        setSuggestions([])
        return
      }

      setFetchState(LOADING)
      fetchTextBasedLocationSuggestions(formattedRequest)
        .then(data => {
          console.log('hey', data)
          if (!data) {
            setFetchState(NO_RESULTS)
            return
          }
          const mappedSuggestions = data
          const requestPropsOnly = data.map(elm => ({ lat: elm.lat, lon: elm.lon }))

          handleMultipleLocationsWeatherRequests({ data: requestPropsOnly, isForecast: false })
            .then(() => {
              setSuggestions(mappedSuggestions)
              setFetchState(mappedSuggestions.length ? SUCCESS : NO_RESULTS)
            })
            .catch(error => {
              setFetchState(ERROR)
              console.error(error)
            })
        })
        .catch(error => {
          setFetchState(ERROR)
          console.error(error)
        })
    }, config.debounceTimeInMilisec)
    return () => clearTimeout(debounceFetch)
  }, [request, repeatFetch, units])

  return { fetchState, suggestions, setFetchState }
}


