import React from 'react'
import Btn from '../Btn'
import { locateMeBtnConfig as config } from '../../../config/locateMeBtn.config'
import { LocateMeBtnType } from '../../../types/components/locateMeBtn.type'

export default function LocateMeBtn({btnSize, btnStyle, onClick, tooltipContent = config.defaultTooltipContent}: LocateMeBtnType): React.JSX.Element {
  return (
    <Btn 
      content={config.content} 
      contentType={config.contentType} 
      btnSize={btnSize} 
      btnStyle={btnStyle} 
      onClick={onClick}
      hasTooltip={true}
      tooltipContent={tooltipContent}
    />
  )
}