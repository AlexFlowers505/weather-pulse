import ForecastLayout from '../components/ForecastLayout.tsx'
import forecastLayoutTypes from '../../constants/forecastLayoutTypes.ts'


const props = {
  heading: 'Прогноз на сегодня',
  layout: forecastLayoutTypes.horizontal
}

export default function TodayForecast() {
  return (
    <ForecastLayout heading={props.heading} layout={props.layout}/>
  )
}
