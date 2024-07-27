import { forwardRef } from 'react'
import SpriteSvg from './SpriteSvg'
import btnStyles from '../../styles/components/btnStyles'
import btnContentTypes from '../../constants/btnContentTypes'
import CustomTooltip from './Tooltip'



const Btn = forwardRef(({
  extraSVGstyle,
  content,
  contentType,
  btnSize = btnStyles.size.md,
  btnStyle = btnStyles.style.filled,
  extraBtnStyles = '',
  tooltipOffset = [0, 0],
  hasTooltip = false,
  tooltipContent = '',
  onClick,
  ...props
}, ref) => {
  const button = (
    <button
      className={`${btnStyles.base} ${btnSize.btn} ${btnStyle} ${extraBtnStyles}`}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {contentType === btnContentTypes.icon && <SpriteSvg id={content} className={btnSize.icon} extraSVGstyle={extraSVGstyle} />}
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