import { handleClearSearchBtnClick, handleRepeatSearchBtnClick } from "../utils/utils"
import type { textLayouts } from "../constants/textLayouts.ts"
import GeolocationDeniedInfoBlock from "../views/components/GeolocationDeniedInfoBlock"
import { emoticons } from "../constants/emoticons.ts"

export const searchMessages = {
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

export const geolocationMessages = {
    accessDenied: {
        hasEmoticon: true,
        emoticon: emoticons.shrug,
        hasDismissBtn: false,
        descriptionLayout: textLayouts.align.left,
        dismissBtnTooltipContent: `Закрыть`,
        heading: `Вы не дали доступ к\u00A0местоположению`,
        hasDesc: false,
        hasCustomContent: true,
        customContent: <GeolocationDeniedInfoBlock />,
    },
}