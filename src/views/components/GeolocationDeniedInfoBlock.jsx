import React from 'react'
import Btn from './Btn'
import btnContentTypes from '../../constants/btnContentTypes'
import btnStyles from '../../styles/components/btnStyles'

const tw = {
    contentWrapper: `
        flex
        flex-col
        justify-start
        items-start
        gap-0
    `,
    heading: `
        text-borderColor
        text-2xl
        font-semibold
        text-center
        w-full
    `,
    contentList: `
        flex
        flex-col
        justify-start
        items-start
        gap-8
    `,
    contentItem: `
        flex
        flex-col
        justify-start
        items-start
        gap-1
        w-full
    `,
    contentItemHeader: `
        flex
        flex-row
        justify-start
        items-start
        gap-3
    `,
    contentItemIcon: `
        mt-0.5
        w-7
        h-7
        text-text
    `,
    contentItemHeading: `
        text-borderColor
        text-2xl
        font-semibold
        text-center
        w-full
    `,
    contentItemDetails: `
        inline-flex
        flex-row
        justify-start
        items-start
        flex-wrap
        gap-0
    `,
    contentItemDetailWrapper: `
        inline-flex
        flex-row
        justify-start
        items-start
        flex-wrap
        gap-2
        w-full
        pl-2
    `,
    contentItemDetail: `
        text-borderColor
        text-base
    `,
    contentItemDetailBold: `
        font-semibold
    `,
    listItemSymbol: `
        text-borderColor
        text-base
        font-light
    `,


}
export default function GeolocationDeniedInfoBlock() {
  return (
    <div className={`content-wrapper ${tw.contentWrapper}`}>
        <h6 className={`heading ${tw.heading}`}>Что делать?</h6>
        <ul className={`content-list ${tw.contentList}`}>
            <li className={`content-item ${tw.contentItem}`}>
                <div className={`content-item-header ${tw.contentItemHeader}`}>
                    <svg className={`content-item-icon ${tw.contentItemIcon}`}><use href='#icon-restart'></use></svg>
                    <p className={`content-item-heading ${tw.contentItemHeading}`}>Перезагрузка страницы</p>
                </div>
                <div className={`content-item-details ${tw.contentItemDetails}`}>
                    <div className={`content-item-detail-wrapper ${tw.contentItemDetailWrapper}`}>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Перезагрузите страницу</span>
                    </div>
                    <div className={`content-item-detail-wrapper ${tw.contentItemDetailWrapper}`}>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Нажмите на кнопку определения местоположения</span>
                    </div>
                    <div className={`content-item-detail-wrapper ${tw.contentItemDetailWrapper}`}>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Разрешите сервису доступ к местоположению</span>
                    </div>
                </div>
                <Btn 
                    contentType={btnContentTypes.text}
                    content={`Перезагрузить страницу`}
                    btnStyle={btnStyles.style.outlined}
                    btnSize={btnStyles.size.sm}
                    extraBtnClass={`!py-2 !px-4 ml-2 mt-2 !rounded-xl`}
                />
            </li>
            <li className={`content-item ${tw.contentItem}`}>
                <p className={`content-item-detail ${tw.contentItemDetail} w-full text-center`}>Если перезагрузка не помогла, нужно дать доступ к местоположению в настройках:</p>
            </li>
            <li className={`content-item ${tw.contentItem}`}>
                <div className={`content-item-header ${tw.contentItemHeader}`}>
                    <img className={`content-item-icon ${tw.contentItemIcon}`} src={'./assets/images/browser-icons/icon-chrome.png'} />
                    <p className={`content-item-heading ${tw.contentItemHeading}`}>Chrome</p>
                </div>
                <div className={`content-item-details ${tw.contentItemDetailWrapper}`}>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Настройки</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Конфиденциальность и безопасность</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Настройки сайта</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Геоданные</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Weather Pulse</span>
                </div>
            </li>
            <li className={`content-item ${tw.contentItem}`}>
                <div className={`content-item-header ${tw.contentItemHeader}`}>
                    <img className={`content-item-icon ${tw.contentItemIcon}`} src={'./assets/images/browser-icons/icon-firefox.png'} />
                    <p className={`content-item-heading ${tw.contentItemHeading}`}>Firefox</p>
                </div>
                <div className={`content-item-details ${tw.contentItemDetailWrapper}`}>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Настройки</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Приватность и Защита</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Разрешения</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Местоположение</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Параметры</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Weather Pulse</span>
                </div>
            </li>
            <li className={`content-item ${tw.contentItem}`}>
                <div className={`content-item-header ${tw.contentItemHeader}`}>
                    <img className={`content-item-icon ${tw.contentItemIcon}`} src={'./assets/images/browser-icons/icon-safari.png'} />
                    <p className={`content-item-heading ${tw.contentItemHeading}`}>Firefox</p>
                </div>
                <div className={`content-item-details ${tw.contentItemDetailWrapper}`}>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Настройки</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Сайты</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Геопозиция</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Weather Pulse</span>
                </div>
            </li>
            <li className={`content-item ${tw.contentItem}`}>
                <div className={`content-item-header ${tw.contentItemHeader}`}>
                    <img className={`content-item-icon ${tw.contentItemIcon}`} src={'./assets/images/browser-icons/icon-edge.png'} />
                    <p className={`content-item-heading ${tw.contentItemHeading}`}>Firefox</p>
                </div>
                <div className={`content-item-details ${tw.contentItemDetailWrapper}`}>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Настройки</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Куки и разрешения</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Местоположение</span>
                        <span className={`list-item-symbol ${tw.listItemSymbol}`}>➔</span>
                        <span className={`content-item-detail ${tw.contentItemDetail}`}>Weather Pulse</span>
                </div>
            </li>
        </ul>
        <Btn 
            contentType={btnContentTypes.icon}
            content={`Перезагрузить страницу`}
            btnStyle={btnStyles.style.outlined}
            btnSize={btnStyles.size.sm}
            extraBtnClass={`!py-2 !px-4 ml-2 mt-2 !rounded-xl`}
        />
        <button><svg><use href="#icon-arrow-in-circle"></use></svg></button>
    </div>
  )
}
