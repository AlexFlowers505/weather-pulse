import React from 'react'
import SpriteSvg from './SpriteSvg'
import iconBtnStyles from '../styles/iconBtnStyles'

export default function IconBtn({extraSVGstyle, content, btnSize=iconBtnStyles.size.md, btnStyle=iconBtnStyles.style.filled}) {
    return (  
        <button className={`${iconBtnStyles.base} ${btnSize} ${btnStyle}`}>
            <SpriteSvg id={content} extraSVGstyle={extraSVGstyle}/>
        </button>
    )
}