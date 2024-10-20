import React from 'react'
import Btn from '../Btn'
import { temperatureUnits } from '../../../constants/temperatureUnits'
import { btnContentType } from '../../../constants/btnContentType'
import { BtnBasedComponentType } from '../../../types/overalls/overalls'
import { useSelector, useDispatch } from 'react-redux'
import { switchWeatherUnits } from '../../../redux/slices/weather-units/weatherUnitsSlice'
import { AppDispatch, RootState } from '../../../redux/store/store'

const { celsius, fahrenheit } = temperatureUnits


export default function ChangeUnitsBtn({ extraBtnClass, extraSVGstyle, btnSize, btnStyle }: BtnBasedComponentType): React.JSX.Element {

  const dispatch = useDispatch<AppDispatch>()

  const getTooltipContent = (unitsFullName: string) => `Считать ${unitsFullName}`

  const handleChangeUnitsBtnClick = () => {
    dispatch(switchWeatherUnits())
  }
  const units = useSelector((state: RootState) => state.weatherUnits.symbol)


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