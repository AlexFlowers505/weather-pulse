import React from 'react'
import Btn from '../Btn'
import svgSymbols from '../../../constants/svgSymbols'
import btnContentTypes from '../../../constants/btnContentTypes'

const locateMeBtnData = {
  content: svgSymbols.iconLocation,
  contentType: btnContentTypes.icon
}
const {content, contentType} = locateMeBtnData

export default function LocateMeBtn({btnSize, btnStyle, onClick}) {
  return (
    <Btn 
      content={content} 
      contentType={contentType} 
      btnSize={btnSize} 
      btnStyle={btnStyle} 
      onClick={onClick}  
    />
  )
}
