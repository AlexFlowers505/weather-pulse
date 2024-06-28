import React from 'react'
import IconBtn from './IconBtn'
import svgSymbols from '../../constants/svgSymbols'

const btnData = {
  content: svgSymbols.iconAddToFavourite,
  extraSVGstyle: {
    transform: 'scale(1.2)',
  }
}

const {content, extraSVGstyle} = btnData

export default function FavouriteBtn({btnSize, btnStyle}) {
  return (
    <IconBtn content={content} btnSize={btnSize} btnStyle={btnStyle} extraSVGstyle={extraSVGstyle} />
  )
}

