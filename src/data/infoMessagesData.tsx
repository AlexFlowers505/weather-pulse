import React from "react"
import { handleClearSearchBtnClick, handleRepeatSearchBtnClick } from "../utils/utils.js"
import {alignTypes} from "../constants/textLayouts.ts"
import GeolocationDeniedInfoBlock from "../views/components/GeolocationDeniedInfoBlock.tsx"
import { emoticons, emoticonsType } from "../constants/emoticons.ts"

type searchMessagesType = {
    [key: string]: {
        hasEmoticon: boolean
        emoticon: emoticonsType[keyof emoticonsType]
        heading: string
        desc: string[]
        hasBtn: boolean
        btnText?: string
        handleBtnClick: () => void
    }
}

export const searchMessages: searchMessagesType = {
    nothingFound: {
        hasEmoticon: true,
        emoticon: emoticons.shrug,
        heading: `Ничего не найдено`,
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

type geolocationMessagesType = {
    [key: string]: {
        hasEmoticon: boolean
        emoticon: emoticonsType[keyof emoticonsType]
        heading: string
        hasBtn: boolean
        btnText?: string
        handleBtnClick?: () => void
        hasDismissBtn: boolean
        descriptionLayout: alignTypes
        dismissBtnTooltipContent?: string
        hasDesc: boolean
        desc?: string[]
        hasCustomContent: boolean
        customContent?: React.JSX.Element 
    }
}
export const geolocationMessages: geolocationMessagesType = {
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