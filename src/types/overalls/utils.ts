import { BtnStyleSizeType } from '../../styles/components/btn.style'
import { btnContentType } from '../../constants/btnContentType'

export type dadataMappedSuggestionsType = {
    area: string
    country: string
    lat: string
    lon: string
    region: string
    settlementType: string
}

export type tailwindStyleClassType = { [key: string]: string }

export type setStateType<T> = React.Dispatch<React.SetStateAction<T>>

export type BtnType = {
    contentType: btnContentType
    content: string
    onClick?: () => void

    extraSVGstyle?: React.CSSProperties
    btnSize?: BtnStyleSizeType
    btnStyle?: string
    extraBtnClass?: string
    tooltipOffset?: [number, number]
    hasTooltip?: boolean
    tooltipContent?: string
    extraSVGClass?: string
}
export type BtnBasedComponentType = Omit<BtnType, 'contentType' | 'content' | 'onClick'> & {
    onClick?: () => void
}