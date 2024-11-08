import { BtnStyleSizeType } from '../../styles/components/btn.style'
import { btnContentType } from '../../constants/btnContentType'
import { emoticonsType } from '../../constants/emoticons'
import { alignTypes } from '../../constants/textLayouts'

export type dadataMappedSuggestionsType = {
    area: string
    country: string
    lat: string
    lon: string
    region: string
    settlementType: string
}

export type tailwindStyleClassType = { 
    [key: string]: string
}

export type setStateType<T> = React.Dispatch<React.SetStateAction<T>>

export type BtnType = {
    contentType: btnContentType
    content: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>

    extraSVGstyle?: React.CSSProperties
    btnSize?: BtnStyleSizeType
    btnStyle?: string
    extraBtnClass?: string
    tooltipOffset?: [number, number]
    hasTooltip?: boolean
    tooltipContent?: string
    extraSVGClass?: string
    isTooltipOpen?: boolean | undefined
}
export type BtnBasedComponentType = Omit<BtnType, 'contentType' | 'content' | 'onClick'> & {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type basicMessageType = {
        hasEmoticon: boolean
        emoticon?: emoticonsType[keyof emoticonsType]
        heading: string
        hasDesc: boolean
        desc?: string[]
        hasBtn: boolean
        btnText?: string
        handleBtnClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type searchMessageType = {[key: string]: basicMessageType}

export type geolocationMessageType = {[key: string]:
    basicMessageType & {
        hasDismissBtn: boolean
        descriptionLayout: alignTypes
        dismissBtnTooltipContent?: string
        hasCustomContent: boolean
        customContent?: React.JSX.Element
    }
}