import React from 'react'
import SeparateSymbolBtn from '../SeparateSymbolBtn/SeparateSymbolBtn'
import separateSymbolBtnTypes from '../../../constants/separateSymbolBtnTypes'
import temperatureUnits from '../../../constants/temperatureUnits'

const locateMeBtnData = {
  contentType: separateSymbolBtnTypes.text,
  content: temperatureUnits.celsius.symbol
}
const {contentType, content} = locateMeBtnData

export default function ChangeUnitsBtn() {
  return (
    <SeparateSymbolBtn contentType={contentType} content={content} />
  )
}
