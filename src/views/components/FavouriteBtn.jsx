import React from 'react'
import IconBtn from './IconBtn'
import svgSymbols from '../../constants/svgSymbols'

const btnData = {
  content: svgSymbols.iconAddToFavourite
}

const {content} = btnData

export default function FavouriteBtn({btnSize, btnStyle}) {
  return (
    <IconBtn content={content} btnSize={btnSize} btnStyle={btnStyle} />
  )
}

