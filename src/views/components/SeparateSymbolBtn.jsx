import React from 'react'
import separateSymbolBtnTypes from '../../constants/separateSymbolBtnTypes'
import SpriteSvg from './SpriteSvg'
import btnStyles from '../../constants/separateSymbolBtnStyle'

const className = `
        flex
        flex-row
        justify-start
        items-center
        rounded-base
        box-content
        font-black
        font-montserrat
        transition-colors
        ease-in-out
        duration-200
    `

export default function SeparateSymbolBtn({contentType, content, extraSVGstyle, btnSize=btnStyles.size.base, btnStyle=btnStyles.style.filled}) {
    return (  
        <button className={`${className} ${btnSize} ${btnStyle}`}>
            { 
                contentType === separateSymbolBtnTypes.text ? content : 
                contentType === separateSymbolBtnTypes.icon ? <SpriteSvg id={content} extraSVGstyle={extraSVGstyle}/> : ''
            }
        </button>
    )
}
