import React from 'react'
import SeparateSymbolBtn from '../SeparateSymbolBtn/SeparateSymbolBtn'
import separateSymbolBtnTypes from '../../../constants/separateSymbolBtnTypes'

const locateMeBtnData = {
  contentType: separateSymbolBtnTypes.icon,
  content: 'icon-location'
}
const {contentType, content} = locateMeBtnData

export default function LocateMeBtn() {
  return (
    <SeparateSymbolBtn contentType={contentType} content={content} />
  )
}
