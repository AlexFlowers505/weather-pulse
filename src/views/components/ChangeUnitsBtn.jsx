import React from 'react'
import SeparateSymbolBtn from './SeparateSymbolBtn'
import separateSymbolBtnTypes from '../../constants/separateSymbolBtnTypes'
import temperatureUnits from '../../constants/temperatureUnits'

const locateMeBtnData = {
  contentType: separateSymbolBtnTypes.icon,
  content: temperatureUnits.celsius.icon,
  extraStyles: {
    width: '200%',
    maxHeight: 'unset',
    maxWidth: 'unset',
    display: 'inlineBlock',
    height: '200%',
    position: 'absolute',
    left: '43%',
    transform: 'translate(-50%, -50%)',
    top: '50%',
  }
}
const {contentType, content} = locateMeBtnData

export default function ChangeUnitsBtn() {
  return (
    <SeparateSymbolBtn contentType={contentType} content={content} />
  )
}
