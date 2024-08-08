import detailsFlow from "../../constants/detailsFlow"

type InstructionItem = {
    isHeaderItem: boolean
    iconType?: string
    icon?: string
    heading: string
    detailsFlow?: detailsFlow
    details?: string[]
    hasBtn?: boolean
    btnContent?: string
    handleBtnClick?: () => void
    hasLink?: boolean
    link?: string
}

export type GeolocationAccessDeniedInstruction = {
    heading: string
    listItems: InstructionItem[]
}
