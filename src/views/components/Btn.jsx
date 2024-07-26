import { forwardRef } from 'react'
import SpriteSvg from './SpriteSvg'
import btnStyles from '../../styles/components/btnStyles'
import btnContentTypes from '../../constants/btnContentTypes'
import { Tooltip } from '@mui/material'

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
  tooltipClasses = '',
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
  console.log(tooltipOffset)

  return hasTooltip ? (
    <Tooltip
      title={tooltipContent}
      placement="top"
      PopperProps={{modifiers: [{ name: 'offset', options: { offset: tooltipOffset } }]}}
      classes={tooltipClasses}
    ><span>{button}</span>
    </Tooltip>
  ) : button
})

export default Btn