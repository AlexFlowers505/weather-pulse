import React from 'react'
import SeparateSymbolBtn from './SeparateSymbolBtn'
import separateSymbolBtnTypes from '../../constants/separateSymbolBtnTypes'
import svgSymbols from '../../constants/svgSymbols'
import btnStyles from '../../constants/separateSymbolBtnStyle'

const locateMeBtnData = {
  contentType: separateSymbolBtnTypes.icon,
  content: svgSymbols.iconLocation
}
const {contentType, content} = locateMeBtnData

export default function LocateMeBtn() {
  return (
    <SeparateSymbolBtn contentType={contentType} content={content} btnSize={btnStyles.size.base} btnStyle={btnStyles.style.filled} />
  )
}
