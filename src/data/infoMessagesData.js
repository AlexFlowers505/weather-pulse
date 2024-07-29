import { handleClearSearchBtnClick, handleRepeatSearchBtnClick, test } from "../utils/utils"
import textLayouts from "../constants/textLayouts"

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
        customContent: null,
        desc: [
            `Для предоставления информации о погоде в Вашем населенном пункте сервису нужен доступ к Вашему местоположению.`,
            `Как теперь дать доступ к местоположению:`,
            `Перезагрузить страницу.`,
            `Если перезагрузка не помогла, нужно дать доступ к местоположению в настройках:`,
            `Chrome:`, 
            `Настройки → Конфиденциальность и безопасность → Настройки сайта → Геоданные → Weather Pulse`,
            `Firefox:`,
            `Настройки → Приватность и Защита → Разрешения → Местоположение → Параметры → Weather Pulse`,
            `Edge:`,
            `Настройки → Куки и разрешения → Местоположение → Weather Pulse`,
            `Safari:`,
            `Настройки → Сайты → Геопозиция → Weather Pulse`,
        ],
        hasBtn: true,
        btnText: `Очистить поле поиска`,
        handleBtnClick: test,
    },
}