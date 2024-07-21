import React from 'react'
import SpriteSvg from './SpriteSvg'
import btnStyles from '../../styles/components/btnStyles'
import btnContentTypes from '../../constants/btnContentTypes'

export default function Btn({extraSVGstyle, content, contentType, btnSize=btnStyles.size.md, btnStyle=btnStyles.style.filled, extraBtnStyles='', onClick}) {
    return (  
        <button 
            className={`${btnStyles.base} ${btnSize.btn} ${btnStyle} ${extraBtnStyles}`}
            onClick={onClick}
        >
            { contentType === btnContentTypes.icon && <SpriteSvg id={content} className={btnSize.icon} extraSVGstyle={extraSVGstyle}/> }
            { contentType === btnContentTypes.text && content }
        </button>
    )
}