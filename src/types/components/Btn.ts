import { btnContentType } from "../../constants/btnContentType.ts"
import type { BtnStyleSizeType } from "../../styles/components/btn.style.tsx"


export interface BtnType {
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