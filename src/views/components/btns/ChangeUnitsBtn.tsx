import React from 'react'
import Btn from '../Btn'
import { temperatureUnits } from '../../../constants/temperatureUnits'
import { btnContentType } from '../../../constants/btnContentType'
import { BtnBasedComponentType } from '../../../types/overalls/overalls'
import { useSelector, useDispatch } from 'react-redux'
import { switchTemperatureUnits } from '../../../redux/slices/temperatureUnits/temperatureUnitsSlice'
import { AppDispatch, RootState } from '../../../redux/store/store'

const { celsius, fahrenheit } = temperatureUnits


export default function ChangeUnitsBtn({ extraBtnClass, extraSVGstyle, btnSize, btnStyle }: BtnBasedComponentType): React.JSX.Element {

  const dispatch = useDispatch<AppDispatch>()

  const getTooltipContent = (unitsFullName: string) => `Считать ${unitsFullName}`

  const handleChangeUnitsBtnClick = () => {
    dispatch(switchTemperatureUnits())
  }
  const units = useSelector((state: RootState) => state.temperatureUnits.symbol)


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