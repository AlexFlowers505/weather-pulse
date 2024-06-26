import React from 'react'
import SeparateSymbolBtn from './SeparateSymbolBtn'
import separateSymbolBtnTypes from '../../constants/separateSymbolBtnTypes'
import svgSymbolsController from '../../constants/svgSymbols'

const btnData = {
  contentType: separateSymbolBtnTypes.icon,
  content: svgSymbolsController.iconAddToFavourite
}

const {contentType, content} = btnData

export default function FavouriteBtn() {
  return (
    <SeparateSymbolBtn contentType={contentType} content={content} />
  )
}

