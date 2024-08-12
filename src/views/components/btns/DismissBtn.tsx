import React from 'react'
import Btn from '../Btn.tsx'
import svgSymbolsIDs from '../../../constants/svgSymbolsIDs.ts'
import { btnContentType } from '../../../constants/btnContentType.ts'
import { BtnType } from '../../../types/overalls/utils.ts'

export default function DismissBtn({btnSize, btnStyle, extraBtnClass, onClick, hasTooltip=false, tooltipContent=''}: BtnType): React.JSX.Element {

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
