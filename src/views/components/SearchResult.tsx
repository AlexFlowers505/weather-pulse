import React, { useState, useEffect, useCallback } from 'react'
import { searchResultStyle as tw } from '../../styles/components/SearchResult.style'
import FavouriteBtn from './btns/FavouriteBtn'
import { btnStyles } from '../../styles/components/btn.style'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store/store'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { symbolArrow, symbolDegree } from '../../constants/symbols'
import { checkIfFavourite } from '../../utils/utils'
import { fetchIcon } from '../../api/openWeatherMap/fetchIcon'
import { MappedLocationShortData } from '../../types/api/openWeatherMap/MappedLocationShortData.type'
import { setCurrentAreaData } from '../../redux/slices/currentAreaSlice'
import { getHighlightSearchMatchText } from '../../utils/getHighlightSearchMatchText'
import { FavouriteLocationsState } from '../../types/components/favouriteLocationsState.type'

export default function SearchResult(props: MappedLocationShortData & { request: string }): React.JSX.Element {
  const { 
    area = '', 
    region = '', 
    country = '', 
    temperature = null, 
    weatherIcon = '', 
    request = '', 
    lon = 0, 
    lat = 0, 
    id = NaN
  } = props

  const [iconUrl, setIconUrl] = useState('')
  const isFavourite = useSelector((state: RootState) => checkIfFavourite(state.favouriteLocations as FavouriteLocationsState, id))

  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate()

  const handleSearchResultClick = useCallback(() => {
    dispatch(setCurrentAreaData({ id, isSpecific: false }))
    navigate(`/forecast?id=${id}&spec=0`)
  }, [dispatch, id, navigate])

  useEffect( () => {
    const loadIcon = async () => {
      try {
        // const url = await fetchIcon(weatherIcon)
        const url = `assets/images/weather-illustrations/${weatherIcon}.png`

        setIconUrl(url)
      } catch (error) {
        console.error('Error fetching icon:', error)
      }
    }

    loadIcon()
  }, [weatherIcon])

  return (
    <li className={`${tw.externalWrapper}`}>
        <FavouriteBtn 
          btnSize={btnStyles.size.sm}
          btnStyle={btnStyles.style.contentOnly}
          extraBtnClass={`${tw.favouriteBtn}`}
          extraSVGClass={`${tw.favouriteBtnIcon}`}
          isFavourite={isFavourite}
          isSpecific={false}
          specificLocation=''
          id={id}
          lat={lat}
          lon={lon}
          area={area}
          region={region}
          country={country}
        />
        <button className={`${tw.wrapper}`} tabIndex={0} type='button' onClick={handleSearchResultClick}>
            <div className={`${tw.innerWrapper}`}>
              <div className={`location-name-wrapper ${tw.locationNameWrapper}`}>
                <span className={`location-name ${tw.name}`}>{getHighlightSearchMatchText(area, request)}</span>
              </div>
              <div className={`location-forecast ${tw.forecastWrapper}`}>
                  <span className={`location-temp ${tw.temp}`}>{temperature}{symbolDegree}</span>
                  <img className={`location-temp-pic ${tw.tempPic}`} src={iconUrl} alt="" />
              </div>
            </div>
            <span className={`location-info ${tw.locationInfo}`}>{!!region.length && `${region} ${symbolArrow} `}{country}</span>
        </button>
    </li>
  )
}

