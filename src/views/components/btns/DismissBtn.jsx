import Btn from '../Btn.tsx'
import svgSymbolsIDs from '../../../constants/svgSymbolsIDs.ts'
import { btnContentType } from '../../../constants/btnContentType.ts'

export default function DismissBtn({btnSize, btnStyle, extraBtnClass, onClick, hasTooltip=false, tooltipContent=''}) {

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
