import React from 'react'
import Btn from '../Btn'
import svgSymbols from '../../../constants/svgSymbols'
import btnContentTypes from '../../../constants/btnContentTypes'

export default function CloseBtn({btnSize, btnStyle, extraBtnStyles}) {

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
        />  
    )
}
