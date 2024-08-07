import { type btnContent } from "../../constants/btnContent"

export interface Btn {
  extraSVGstyle?: string
  content: string
  contentType: btnContent
  btnSize?: string
  btnStyle?: string
  extraBtnClass?: string
  tooltipOffset?: [number, number]
  hasTooltip?: boolean
  tooltipContent?: string
  extraSVGClass?: string
  onClick?: () => void
  [key: string]: any
}