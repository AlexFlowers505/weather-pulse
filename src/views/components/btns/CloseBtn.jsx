import React from 'react'
import Btn from '../Btn'
import svgSymbols from '../../../constants/svgSymbols'
import btnContentTypes from '../../../constants/btnContentTypes'

export default function DismissBtn({btnSize, btnStyle, extraBtnStyles, onClick}) {

    const closeBtnData = {
        content: svgSymbols.iconClose,
        contentType: btnContentTypes.icon,
    }

    const {content, contentType} = closeBtnData


    return (
        <Btn 
            content={content} 
            contentType={contentType} 
            extraBtnStyles={extraBtnStyles} 
            btnSize={btnSize} 
            btnStyle={btnStyle} 
            onClick={onClick}
        />  
    )
}
