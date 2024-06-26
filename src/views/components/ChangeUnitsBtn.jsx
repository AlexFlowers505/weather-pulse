import React from 'react'
import SeparateSymbolBtn from './SeparateSymbolBtn'
import separateSymbolBtnTypes from '../../constants/separateSymbolBtnTypes'
import temperatureUnits from '../../constants/temperatureUnits'
import btnStyles from '../../constants/separateSymbolBtnStyle'

const locateMeBtnData = {
  contentType: separateSymbolBtnTypes.icon,
  content: temperatureUnits.celsius.icon,
  extraSVGstyle: {
    transform: 'scale(1.5) translateX(-2px)',
  }
}
const {contentType, content, extraSVGstyle} = locateMeBtnData

export default function ChangeUnitsBtn() {
  return (
    <SeparateSymbolBtn contentType={contentType} content={content} extraSVGstyle={extraSVGstyle} btnSize={btnStyles.size.base} btnStyle={btnStyles.style.filled} />
  )
}
