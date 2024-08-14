import React from "react"
import { handleClearSearchBtnClick, handleRepeatSearchBtnClick } from "../utils/utils"
import {alignTypes} from "../constants/textLayouts"
import GeolocationDeniedInfoBlock from "../views/components/GeolocationDeniedInfoBlock"
import { emoticons, emoticonsType } from "../constants/emoticons"

export type basicMessageType = {
    [key: string]: {
        hasEmoticon: boolean
        emoticon?: emoticonsType[keyof emoticonsType]
        heading: string
        hasDesc: boolean
        desc?: string[]
        hasBtn: boolean
        btnText?: string
        handleBtnClick?: React.MouseEventHandler<HTMLButtonElement>
    }
}
export type searchMessageType = basicMessageType

export const searchMessages: searchMessageType = {
    nothingFound: {
        hasEmoticon: true,
        emoticon: emoticons.shrug,
        heading: `Ничего не найдено`,
        hasDesc: true,
        desc: [
            `Попробуйте изменить запрос`,
        ],
        hasBtn: true,
        btnText: `Очистить поле поиска`,
        handleBtnClick: handleClearSearchBtnClick,
    },
    fetchError: {
        hasEmoticon: true,
        emoticon: emoticons.awkward,
        heading: `Что-то пошло не так`,
        hasDesc: true,
        desc: [
            `Случилась ошибка на стороне сервера.`,
            `Попробуйте повторить запрос.`,
            `Или отправьте запрос позднее.`,
        ],
        hasBtn: true,
        btnText: `Отправить еще раз`,
        handleBtnClick: handleRepeatSearchBtnClick,
    }
}

export type geolocationMessageType = searchMessageType & {
    [key: string]: {
        hasDismissBtn: boolean
        descriptionLayout: alignTypes
        dismissBtnTooltipContent?: string
        hasCustomContent: boolean
        customContent?: React.JSX.Element
    }
}

export const geolocationMessages: geolocationMessageType = {
    accessDenied: {
        hasEmoticon: true,
        emoticon: emoticons.shrug,
        hasDismissBtn: false,
        descriptionLayout: alignTypes.left,
        dismissBtnTooltipContent: `Закрыть`,
        heading: `Вы не дали доступ к\u00A0местоположению`,
        hasDesc: false,
        hasCustomContent: true,
        hasBtn: false,
        customContent: <GeolocationDeniedInfoBlock />,
    },
}