import React from 'react'
import SeparateSymbolBtn from './SeparateSymbolBtn'
import separateSymbolBtnTypes from '../../constants/separateSymbolBtnTypes'
import temperatureUnits from '../../constants/temperatureUnits'

const locateMeBtnData = {
  contentType: separateSymbolBtnTypes.icon,
  content: temperatureUnits.celsius.icon,
  extraStyles: {
    transform: 'scale(1.5) translateX(-2px)',
  }
}
const {contentType, content, extraStyles} = locateMeBtnData

export default function ChangeUnitsBtn() {
  return (
    <SeparateSymbolBtn contentType={contentType} content={content} extraStyles={extraStyles} />
  )
}
