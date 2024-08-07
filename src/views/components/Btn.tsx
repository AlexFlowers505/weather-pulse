import React, { forwardRef } from 'react'
import SpriteSvg from './SpriteSvg.jsx'
import btnStyles from '../../styles/components/btn.style.jsx'
import { Btn } from '../../types/components/Btn.ts'
import { btnContent } from '../../constants/btnContent.js'
import CustomTooltip from './CustomTooltip.jsx'



const Btn = forwardRef<HTMLButtonElement, Btn>(({
  extraSVGstyle,
  content,
  contentType,
  btnSize = btnStyles.size.md,
  btnStyle = btnStyles.style.filled,
  extraBtnClass = '',
  tooltipOffset = [0, 0],
  hasTooltip = false,
  tooltipContent = '',
  extraSVGClass,
  onClick,
  ...props
}, ref) => {
  const button = (
    <button
      className={`${btnStyles.base} ${btnSize.btn} ${btnStyle} ${extraBtnClass}`}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {contentType === btnContent.icon && 
        <SpriteSvg 
          id={content} 
          className={btnSize.icon} 
          extraSVGClass={extraSVGClass} 
        />
      }
      {contentType === btnContent.text && content}
    </button>
  )

  return hasTooltip ? (
    <CustomTooltip
      title={tooltipContent}
      placement="top"
      PopperProps={{ modifiers: [{ name: 'offset', options: { offset: tooltipOffset } }] }}
    >
      <span>{button}</span>
    </CustomTooltip>
  ) : button
})

export default Btn