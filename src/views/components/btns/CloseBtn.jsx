import Btn from '../Btn'
import svgSymbols from '../../../constants/svgSymbols'
import btnContentTypes from '../../../constants/btnContentTypes'

export default function DismissBtn({btnSize, btnStyle, extraBtnClass, onClick, hasTooltip=false, tooltipContent=''}) {

    const closeBtnData = {
        content: svgSymbols.iconClose,
        contentType: btnContentTypes.icon,
    }

    const {content, contentType} = closeBtnData


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
