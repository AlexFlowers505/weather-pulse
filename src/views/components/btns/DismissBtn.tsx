import React from 'react'
import Btn from '../Btn'
import svgSymbolsIDs from '../../../constants/svgSymbolsIDs'
import { btnContentType } from '../../../constants/btnContentType'
import { BtnBasedComponentType } from '../../../types/overalls/overalls'

export default function DismissBtn({btnSize, btnStyle, extraBtnClass, onClick, hasTooltip=false, tooltipContent=''}: BtnBasedComponentType): React.JSX.Element {

    const dismissBtnData = {
        content: svgSymbolsIDs.iconClose,
        contentType: btnContentType.icon,
    }

    const {content, contentType} = dismissBtnData


    return (
        <Btn 
            content={content} 
            contentType={contentType} 
            extraBtnClass={extraBtnClass} 
            btnSize={btnSize} 
            btnStyle={btnStyle} 
            onClick={onClick}
            hasTooltip={hasTooltip}
            tooltipContent={tooltipContent}
        />  
    )
}
