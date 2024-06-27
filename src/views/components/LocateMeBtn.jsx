import React from 'react'
import IconBtn from './IconBtn'
import svgSymbols from '../../constants/svgSymbols'

const locateMeBtnData = {
  content: svgSymbols.iconLocation
}
const {content} = locateMeBtnData

export default function LocateMeBtn({btnSize, btnStyle}) {
  return (
    <IconBtn content={content} btnSize={btnSize} btnStyle={btnStyle} />
  )
}
