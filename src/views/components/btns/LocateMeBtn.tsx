import React from 'react'
import Btn from '../Btn'
import { LocateMeBtnType } from '../../../types/components/locateMeBtn.type'
import { locateMeBtnConfig as config } from '../../../config/components/locateMeBtn.config'

export default function LocateMeBtn({btnSize, btnStyle, extraBtnClass, onClick, tooltipContent = config.defaultTooltipContent}: LocateMeBtnType): React.JSX.Element {
  return (
    <Btn 
      content={config.content} 
      contentType={config.contentType} 
      btnSize={btnSize} 
      btnStyle={btnStyle} 
      extraBtnClass={extraBtnClass}
      onClick={onClick}
      hasTooltip={true}
      tooltipContent={tooltipContent}
    />
  )
}