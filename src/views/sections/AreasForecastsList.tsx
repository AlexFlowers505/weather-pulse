import React from 'react'
import AreaShortForecastItem from '../components/AreaShortForecastItem'
import { areasForecastsListStyle as tw } from '../../styles/sections/AreasForecastsList.style'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import LocationCurrentWeather from './LocationCurrentWeather'
import { FavouriteLocationType } from '../../redux/slices/favouriteLocationsSlice'


export default function AreasForecastsList(): React.JSX.Element {

  const favouriteLocations: FavouriteLocationType[] | null | undefined = useSelector((state: RootState) => state.favouriteLocations.value)


  return (
    <section className={`container-visuals ${tw.base}`}>
      <div className={`favourites-inner-wrapper ${tw.innerWrapper}`}>
        {/* {favouriteLocations.length > 0 ?
          favouriteLocations.map(location => {
            return <LocationCurrentWeather {...location} />
          })
        : <div></div> } */}
      </div>
    </section>
  )
}
