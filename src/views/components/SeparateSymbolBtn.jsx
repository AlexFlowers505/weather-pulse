import React from 'react'
import separateSymbolBtnTypes from '../../constants/separateSymbolBtnTypes'
import SpriteSvg from './SpriteSvg'

const className = `
    flex
    min-w-6
    min-h-6
    w-6
    h-6
    flex-row
    justify-start
    items-center
    rounded-base
    bg-bgPrimary
    p-baseXS
    text-text
    box-content
    font-black
    text-2xl
    font-montserrat
`
export default function SeparateSymbolBtn(btnData) {
    const {contentType, content} = btnData
    return (  
        <button className={className}>
            { 
                contentType == separateSymbolBtnTypes.text ? content : 
                contentType == separateSymbolBtnTypes.icon ? <SpriteSvg id={content}/> : ''
            }
        </button>
    )
}
