import { handleClearSearchBtnClick, repeatFetchRequest } from "../utils/utils"

export const searchMessages = {
    nothingFound: {
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
        emoticon: `( ⚆ _ ⚆ )`,
        heading: `Что-то пошло не так`,
        desc: [
            `Случилась ошибка на стороне сервера.`,
            `Попробуйте отправить запрос еще раз`,
            `или попробуйте отправить позднее.`,
        ],
        hasBtn: true,
        btnText: `Отправить еще раз`,
        handleBtnClick: repeatFetchRequest,
    }
}