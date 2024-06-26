import React from 'react'
import SeparateSymbolBtn from './SeparateSymbolBtn'
import separateSymbolBtnTypes from '../../constants/separateSymbolBtnTypes'

const btnData = {
  contentType: separateSymbolBtnTypes.icon,
  content: 'icon-add-to-favourite'
}

const {contentType, content} = btnData

export default function FavouriteBtn() {
  return (
    <SeparateSymbolBtn contentType={contentType} content={content} />
  )
}
