import { forwardRef } from 'react'
import SpriteSvg from './SpriteSvg'
import btnStyles from '../../styles/components/btn.style'
import btnContentTypes from '../../constants/btnContentTypes'
import CustomTooltip from './CustomTooltip'



const Btn = forwardRef(({
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
      {contentType === btnContentTypes.icon && 
        <SpriteSvg 
          id={content} 
          className={btnSize.icon} 
          extraSVGClass={extraSVGClass} 
        />
      }
      {contentType === btnContentTypes.text && content}
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