import ForecastLayout from '../components/ForecastLayout'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes'


const props = {
  heading: 'Прогноз на сегодня',
  layout: forecastLayoutTypes.horizontal
}

export default function TodayForecast() {
  return (
    <ForecastLayout heading={props.heading} layout={props.layout}/>
  )
}
