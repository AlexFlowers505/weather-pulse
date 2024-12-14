import { forwardRef } from 'react'
import SpriteSvg from './SpriteSvg'
import { btnStyles } from '../../styles/components/btn.style'
import { btnContentType } from '../../constants/btnContentType'
import CustomTooltip from './CustomTooltip'
import type { BtnType } from '../../types/overalls/overalls'


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
  isTooltipOpen = undefined,
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
      open={isTooltipOpen === true ? isTooltipOpen : undefined}
      PopperProps={{ modifiers: [{ name: 'offset', options: { offset: tooltipOffset } }] }}
    >
      <span>{button}</span>
    </CustomTooltip>
  ) : button
})

export default Btn