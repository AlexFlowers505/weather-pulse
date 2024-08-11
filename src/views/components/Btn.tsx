import React, { forwardRef } from 'react'
import SpriteSvg from './SpriteSvg.tsx'
import btnStyles, { BtnStyleSizeType } from '../../styles/components/btn.style.tsx'
import { btnContentType } from '../../constants/btnContentType.ts'
import CustomTooltip from './CustomTooltip.jsx'

type BtnType = {
  contentType: btnContentType
  content: string
  onClick: () => void
  
  extraSVGstyle?: React.CSSProperties
  btnSize?: BtnStyleSizeType
  btnStyle?: string
  extraBtnClass?: string
  tooltipOffset?: [number, number]
  hasTooltip?: boolean
  tooltipContent?: string
  extraSVGClass?: string
}

const Btn = forwardRef<HTMLButtonElement, BtnType>(({
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
      {contentType === btnContentType.icon && 
        <SpriteSvg 
          id={content} 
          baseStyle={btnSize.icon} 
          extraSVGClass={extraSVGClass} 
        />
      }
      {contentType === btnContentType.text && content}
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