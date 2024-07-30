import { handleClearSearchBtnClick, handleRepeatSearchBtnClick, test } from "../utils/utils"
import textLayouts from "../constants/textLayouts"
import GeolocationDeniedInfoBlock from "../views/components/GeolocationDeniedInfoBlock"

export const searchMessages = {
    nothingFound: {
        hasEmoticon: true,
        emoticon: `¯\\_(ツ)_/¯`,
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
        emoticon: `( ⚆ _ ⚆ )`,
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
    nothingFound: {
        hasEmoticon: true,
        emoticon: `¯\\_(ツ)_/¯`,
        hasDismissBtn: true,
        handleDismissBtnClick: null,
        descriptionLayout: textLayouts.align.left,
        dismissBtnTooltipContent: `Закрыть`,
        heading: `Вы не дали доступ к геолокации`,
        hasDesc: false,
        hasCustomContent: true,
        customContent: <GeolocationDeniedInfoBlock/>,
        hasBtn: true,
        btnText: `Очистить поле поиска`,
        handleBtnClick: test,
    },
}