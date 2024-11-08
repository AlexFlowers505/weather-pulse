import React from 'react'
import Btn from '../Btn'
import svgSymbolsIDs from '../../../constants/svgSymbolsIDs'
import { btnContentType } from '../../../constants/btnContentType'
import { BtnBasedComponentType } from '../../../types/overalls/overalls'

const locateMeBtnData = {
  content: svgSymbolsIDs.iconLocation,
  contentType: btnContentType.icon
}

const defaultTooltipContent = 'Определить местоположение автоматически'
const {content, contentType} = locateMeBtnData

type locateMeBtnType = Omit<BtnBasedComponentType, 'onClick'> & {
  onClick?: () => void
}

export default function LocateMeBtn({btnSize, btnStyle, onClick, tooltipContent = defaultTooltipContent, isTooltipOpen = undefined}: locateMeBtnType): React.JSX.Element {
  return (
    <Btn 
      content={content} 
      contentType={contentType} 
      btnSize={btnSize} 
      btnStyle={btnStyle} 
      onClick={onClick}
      hasTooltip={true}
      tooltipContent={tooltipContent}
      isTooltipOpen={isTooltipOpen}
    />
  )
}