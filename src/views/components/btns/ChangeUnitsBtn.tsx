import React, { useState } from 'react'
import Btn from '../Btn'
import temperatureUnits from '../../../constants/temperatureUnits'
import { btnContentType } from '../../../constants/btnContentType'
import { BtnBasedComponentType } from '../../../types/overalls/overalls'
import { useSelector, useDispatch } from 'react-redux'
import { StateType, switchWeatherUnits } from '../../../redux/features/weather-units/weatherUnitsSlice'

const { celsius, fahrenheit } = temperatureUnits


export default function ChangeUnitsBtn({ extraBtnClass, extraSVGstyle, btnSize, btnStyle }: BtnBasedComponentType): React.JSX.Element {


  const weatherUnits = useSelector( (state: StateType) => state.__type)
  const dispatch = useDispatch()

  const [units, setUnits] = useState(celsius.symbol)

  const getTooltipContent = (unitsFullName: string) => `Считать ${unitsFullName}`

  const handleChangeUnitsBtnClick = () => {
    switchWeatherUnits(weatherUnits)
    setUnits(prevUnits => prevUnits === celsius.symbol ? fahrenheit.symbol : celsius.symbol)
  }

  const tooltipUnits = units === celsius.symbol ? fahrenheit.fullName : celsius.fullName
  const tooltipContent = getTooltipContent(tooltipUnits)

  return (
    <Btn
      contentType={btnContentType.text}
      content={units}
      extraBtnClass={extraBtnClass}
      extraSVGstyle={extraSVGstyle}
      btnSize={btnSize}
      btnStyle={btnStyle}
      onClick={handleChangeUnitsBtnClick}
      hasTooltip={true}
      tooltipContent={tooltipContent}
      tooltipOffset={[10, 0]}
    />
  )
}