import React from 'react'
import Btn from '../Btn'
import svgSymbolsIDs from '../../../constants/svgSymbolsIDs'
import { btnContentType } from '../../../constants/btnContentType'
import { BtnBasedComponentType, BtnType } from '../../../types/overalls/utils'

const locateMeBtnData = {
  content: svgSymbolsIDs.iconLocation,
  contentType: btnContentType.icon
}
const {content, contentType} = locateMeBtnData

type locateMeBtnType = Omit<BtnBasedComponentType, 'onClick'> & {
  onClick?: () => void
  // onClick: () => void
}

export default function LocateMeBtn({btnSize, btnStyle, onClick}: locateMeBtnType): React.JSX.Element {
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
