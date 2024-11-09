import { handleClearSearchBtnClick, handleCloseLocationAccessMessage, handleRepeatSearchBtnClick } from "../utils/utils"
import {alignTypes} from "../constants/textLayouts"
import GeolocationDeniedInfoBlock from "../views/components/GeolocationDeniedInfoBlock"
import { emoticons } from "../constants/emoticons"
import { searchMessageType } from "../types/overalls/overalls"
import { AppDispatch } from "../redux/store/store"

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


export const geolocationMessages = () => ({
    accessDenied: {
        hasEmoticon: true,
        emoticon: emoticons.shrug,
        hasDismissBtn: true,
        descriptionLayout: alignTypes.left,
        dismissBtnTooltipContent: `Закрыть`,
        heading: `Вы не дали доступ к\u00A0местоположению`,
        hasDesc: false,
        hasCustomContent: true,
        hasBtn: false,
        customContent: <GeolocationDeniedInfoBlock />,
    },
    locationAccessNotSupported: {
        hasEmoticon: true,
        emoticon: emoticons.shrug,
        hasDismissBtn: false,
        descriptionLayout: alignTypes.center,
        heading: `Ваш браузер не поддерживает определение местоположения`,
        hasDesc: true,
        desc: [
            `К сожалению, Ваш браузер не поддерживает определение местоположения.`,
            `Пожалуйста, используйте другой браузер.`,
        ],
        hasBtn: true,
        btnText: `Закрыть`,
        hasCustomContent: false,
    },
    errorOccured: {
        hasEmoticon: true,
        emoticon: emoticons.awkward,
        hasDismissBtn: false,
        descriptionLayout: alignTypes.center,
        heading: `Что-то пошло не так`,
        hasDesc: true,
        desc: [
            `Произошла ошибка. Пожалуйста, повторите запрос.`,
            `Если ошибка повторится, используйте поиск по названию`,
            `или повторите запрос позднее.`,
        ],
        hasBtn: true,
        btnText: `Закрыть`,
        hasCustomContent: false,
    }
})