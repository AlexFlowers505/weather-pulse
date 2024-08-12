import React from 'react'
import Btn from '../Btn.tsx'
import svgSymbolsIDs from '../../../constants/svgSymbolsIDs.ts'
import { btnContentType } from '../../../constants/btnContentType.ts'
import { BtnType } from '../../../types/overalls/utils.ts'

const locateMeBtnData = {
  content: svgSymbolsIDs.iconLocation,
  contentType: btnContentType.icon
}
const {content, contentType} = locateMeBtnData

export default function LocateMeBtn({btnSize, btnStyle, onClick}: BtnType): React.JSX.Element {
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
