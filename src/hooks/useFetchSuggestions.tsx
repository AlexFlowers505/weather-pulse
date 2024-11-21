import { useEffect, useState } from 'react'
import { removeMultipleSpaces } from "../utils/utils"
import searchResultsStates from "../constants/searchResultsStates"
import { fetchTextBasedLocationSuggestions } from '../api/dadata/fetchTextBasedLocationSuggestions'
import { handleMultipleLocationsWeatherRequests } from '../api/openWeatherMap/handleMultipleLocationsWeatherRequests'
import { MappedSuggestions } from '../types/api/dadata/MappedSuggestions.type'
import { FetchWeatherCoordsBasedProps } from '../types/api/openWeatherMap/FetchWeather.type'
import { fetchSuggestionsConfig as config } from '../config/api/dadata/fetchSuggestions.config'
import { ForecastResponse, OpenWeatherMapResponse, WeatherResponse } from '../types/api/openWeatherMap/OpenWeatherMapResponse.type'
import { MappedLocationShortData } from '../types/api/openWeatherMap/MappedLocationShortData.type'

const { IDLE, LOADING, ERROR, SUCCESS, NO_RESULTS } = searchResultsStates

type fetchStateType = searchResultsStates

export default function useFetchSuggestions(request: string, repeatFetch: boolean, units: string) {
  const [fetchState, setFetchState] = useState<fetchStateType>(IDLE)
  const [suggestions, setSuggestions] = useState<any[]>([])
  let locationsInfo: MappedSuggestions[] = []
  let locationsWeather: MappedLocationShortData[] = []
  
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
        .then((data: MappedSuggestions[]) => {
          console.log('only locations info', data)
          if (!data) {
            setFetchState(NO_RESULTS)
            return
          }
          locationsInfo = data.map( (elm: MappedSuggestions): Omit<MappedSuggestions, 'settlementType'> => ({ 
            area: elm.area, 
            country: elm.country, 
            lat: elm.lat, 
            lon: elm.lon, 
            region: elm.region
          }))

          handleMultipleLocationsWeatherRequests({ data: locationsInfo, isForecast: false, units: units, isSuggestionsFetch: true })
            .then( (data: (OpenWeatherMapResponse | (OpenWeatherMapResponse & MappedSuggestions))[]) => {
              console.log('only weather', data)
                locationsWeather = data.map(elm => {
                  if ('coord' in elm && 'area' in elm) {
                    return {
                      id: elm.id,
                      lat: elm.coord.lat,
                      lon: elm.coord.lon,
                      weatherIcon: elm.weather[0].icon,
                      temperature: elm.main.temp,
                      area: elm.area,
                      region: elm.region,
                      country: elm.country,
                    } as MappedLocationShortData
                  }
                }).filter((elm): elm is MappedLocationShortData => elm !== null)
                console.log('mapped only weather', locationsWeather)
                console.log('locationsInfo', locationsInfo)
                console.log('locationsWeather', locationsWeather)
                setSuggestions(locationsWeather)
                setFetchState(locationsWeather.length ? SUCCESS : NO_RESULTS)
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

