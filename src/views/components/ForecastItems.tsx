import React from 'react'
import ForecastItem from './ForecastItem'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'
import { forecastItemsStyle as tw } from '../../styles/components/ForecastItems.style'
import { locationWholeDataType } from '../pages/AreaOverviewPage'
import { locationWeatherElmDataType } from './ForecastLayout'

type forecastItemsPropType = {
    layout: forecastLayoutTypes
    locationData?: locationWeatherElmDataType[] | null
}
export default function ForecastItems({layout, locationData}: forecastItemsPropType): React.JSX.Element {
    const layoutStyles = layout === forecastLayoutTypes.vertical ? tw.verticalLayout : layout === forecastLayoutTypes.horizontal ? tw.horizontalLayout : ''
    console.log('locationData3', locationData)
    return (
        <div className={`forecast-items ${layoutStyles}`}>
            { locationData && 
                locationData.map((elm: any, i: number) => {
                    return (
                        <ForecastItem 
                            key={i} 
                            layout={layout}
                            weatherData={elm}
                        />
                    )
                })
            }
        </div>  
    )
}
