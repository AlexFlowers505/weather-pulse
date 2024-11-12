import React from 'react'
import AreaShortForecastItem from '../components/AreaShortForecastItem'
import { areasForecastsListStyle as tw } from '../../styles/sections/AreasForecastsList.style'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import LocationCurrentWeather from './LocationCurrentWeather'


export default function AreasForecastsList(): React.JSX.Element {

  const favouriteLocations = useSelector((state: RootState) => state.favouriteLocations)

  return (
    <section className={`container-visuals ${tw.base}`}>
      {/* <div className={`favourites-inner-wrapper ${tw.innerWrapper}`}>
        { favouriteLocations.length > 0 ?
          favouriteLocations.map( location => {
            <LocationCurrentWeather locationData={location} />
          })
        }
      </div> */}
    </section>
  )
}
