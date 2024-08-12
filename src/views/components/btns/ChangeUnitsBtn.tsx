import React, { useState } from 'react'
import Btn from '../Btn.tsx'
import temperatureUnits from '../../../constants/temperatureUnits.ts'
import { btnContentType } from '../../../constants/btnContentType.ts'
import { BtnBasedComponentType } from '../../../types/overalls/utils.ts'

const { celsius, fahrenheit } = temperatureUnits


export default function ChangeUnitsBtn({ extraBtnClass, extraSVGstyle, btnSize, btnStyle }: BtnBasedComponentType): React.JSX.Element {
  const [units, setUnits] = useState(celsius.symbol)

  const getTooltipContent = (unitsFullName) => `Считать ${unitsFullName}`

  const handleChangeUnitsBtnClick = () => {
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