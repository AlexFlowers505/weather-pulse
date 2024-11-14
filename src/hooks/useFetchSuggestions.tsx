import { useEffect, useState } from 'react'
import { removeMultipleSpaces } from "../utils/utils"
import searchResultsStates from "../constants/searchResultsStates"
import { fetchTextBasedLocationSuggestions } from '../api/dadata/fetchTextBasedLocationSuggestions'
import { handleMultipleLocationsWeatherRequests } from '../api/openWeatherMap/handleMultipleLocationsWeatherRequests'
import { MappedSuggestions } from '../types/api/dadata/MappedSuggestions.type'
import { FetchWeatherCoordsBasedProps } from '../types/api/openWeatherMap/FetchWeather.type'
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
          console.log('only locations info', data)
          if (!data) {
            setFetchState(NO_RESULTS)
            return
          }
          const mappedSuggestions = data
          const requestPropsOnly: FetchWeatherCoordsBasedProps[] = data.map(elm => ({ lat: elm.lat, lon: elm.lon, units }))

          handleMultipleLocationsWeatherRequests({ data: requestPropsOnly, isForecast: false, units: units })
            .then( data => {
              console.log('only weather', data)
              setSuggestions(data)
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

