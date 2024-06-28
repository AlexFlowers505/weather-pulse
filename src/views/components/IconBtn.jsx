import React from 'react'
import SpriteSvg from './SpriteSvg'
import iconBtnStyles from '../styles/iconBtnStyles'

export default function IconBtn({extraSVGstyle, content, btnSize=iconBtnStyles.size.md, btnStyle=iconBtnStyles.style.filled}) {
    return (  
        <button className={`${iconBtnStyles.base} ${btnSize.btn} ${btnStyle}`}>
            <SpriteSvg id={content} className={btnSize.icon} extraSVGstyle={extraSVGstyle}/>
        </button>
    )
}