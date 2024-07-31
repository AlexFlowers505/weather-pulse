import browserIconsData from '../constants/browserIconsData'
import { capitalize, refreshPage } from '../utils/utils'
import iconTypes from '../constants/iconTypes'
import svgSymbols from '../constants/svgSymbols'
import detailsFlow from '../constants/detailsFlow'

export const geolocationAccessDeniedInstruction = {
    heading: 'Что делать?',
    listItems: [
        {
            isHeaderItem: false,
            iconType: iconTypes.svg,
            icon: svgSymbols.iconRestart,
            heading: 'Перезагрузка страницы',
            detailsFlow: detailsFlow.block,
            details: [
                'Перезагрузите страницу',
                'Нажмите кнопку определения местоположения еще раз',
                'Разрешите сервису доступ к местоположению',
            ],
            hasBtn: true,
            btnContent: 'Перезагрузить страницу',
            handleBtnClick: () => refreshPage()
        },
        {
            isHeaderItem: true,
            heading: 'Если перезагрузка не помогла, нужно дать доступ к\u00A0местоположению в настройках:'
        },
        {
            isHeaderItem: false,
            iconType: iconTypes.png,
            icon: `${browserIconsData.path}${browserIconsData.prefix}${browserIconsData.icons.chrome}${browserIconsData.ext}`,
            heading: `${capitalize(browserIconsData.icons.chrome)}`,
            detailsFlow: detailsFlow.inline,
            details: [
                'Настройки',
                'Конфиденциальность и безопасность',
                'Настройки сайта',
                'Геоданные',
                'Weather Pulse',
            ],
            hasLink: true,
            link: 'https://support.google.com/chrome/answer/114662?sjid=11052760922577547467-EU&visit_id=638580122014146423-2250087655&rd=1',
            hasBtn: false,
        },
        {
            isHeaderItem: false,
            iconType: iconTypes.png,
            icon: `${browserIconsData.path}${browserIconsData.prefix}${browserIconsData.icons.firefox}${browserIconsData.ext}`,
            heading: `${capitalize(browserIconsData.icons.firefox)}`,
            detailsFlow: detailsFlow.inline,
            details: [
                'Настройки',
                'Приватность и Защита',
                'Разрешения',
                'Местоположение',
                'Параметры',
                'Weather Pulse',
            ],
            hasLink: true,
            link: 'https://support.mozilla.org/ru/kb/pokazyvaet-li-firefox-moyo-mestopolozhenie-veb-saj',
            hasBtn: false,
        },
        {
            isHeaderItem: false,
            iconType: iconTypes.png,
            icon: `${browserIconsData.path}${browserIconsData.prefix}${browserIconsData.icons.safari}${browserIconsData.ext}`,
            heading: `${capitalize(browserIconsData.icons.safari)}`,
            detailsFlow: detailsFlow.inline,
            details: [
                'Настройки',
                'Сайты',
                'Геопозиция',
                'Weather Pulse',
            ],
            hasLink: true,
            link: 'https://support.apple.com/ru-ru/guide/iphone/iphb01fc3c85/ios',
            hasBtn: false,
        },
        {
            isHeaderItem: false,
            iconType: iconTypes.png,
            icon: `${browserIconsData.path}${browserIconsData.prefix}${browserIconsData.icons.edge}${browserIconsData.ext}`,
            heading: `${capitalize(browserIconsData.icons.edge)}`,
            detailsFlow: detailsFlow.inline,
            details: [
                'Параметры',
                'Файлы cookie и разрешения сайта',
                'Расположение',
                'Weather Pulse',
            ],
            hasLink: true,
            link: 'https://support.microsoft.com/ru-ru/microsoft-edge/%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BE-%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8-%D0%B8-%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%B2-microsoft-edge-31b5d154-0b1b-90ef-e389-7c7d4ffe7b04',
            hasBtn: false,
        },
    ]
}