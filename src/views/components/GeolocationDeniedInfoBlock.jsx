import React from 'react'
import Btn from './Btn'
import btnContentTypes from '../../constants/btnContentTypes'
import btnStyles from '../../styles/components/btnStyles'
import svgSymbols from '../../constants/svgSymbols'
import {GeolocationDeniedInfoBlockStyle as tw} from '../../styles/components/GeolocationDeniedInfoBlock.style'
import iconTypes from '../../constants/iconTypes'
import detailsFlow from '../../constants/detailsFlow'
import browserIconsData from '../../constants/browserIconsData'
import { capitalize } from '../../utils/utils'

const data = [
    {
        isHeaderItem: false,
        iconType: iconTypes.svg,
        icon: svgSymbols.iconRestart,
        heading: 'Перезагрузка страницы',
        detailsFlow: detailsFlow.block,
        details: [
            'Перезагрузите страницу',
            'Нажмите на кнопку определения местоположения',
            'Разрешите сервису доступ к местоположению',
        ],
        hasBtn: true,
        btnContent: 'Перезагрузить страницу',
        handleBtnClick: console.log('hey')
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
        hasBtn: false,
    },
    {
        isHeaderItem: false,
        iconType: iconTypes.png,
        icon: `${browserIconsData.path}${browserIconsData.prefix}${browserIconsData.icons.edge}${browserIconsData.ext}`,
        heading: `${capitalize(browserIconsData.icons.edge)}`,
        detailsFlow: detailsFlow.inline,
        details: [
            'Настройки',
            'Куки и разрешения',
            'Местоположение',
            'Weather Pulse',
        ],
        hasBtn: false,
    },
]

const listItemSeparator = `➔`

export default function GeolocationDeniedInfoBlock() {
  return (
    <div className={`content-wrapper ${tw.contentWrapper}`}>
        <h6 className={`heading ${tw.heading}`}>Что делать?</h6>
        <ul className={`content-list ${tw.contentList}`}>

            { data.map( (item, i) => { 
                return (
                    <li key={i} className={`content-item ${tw.contentItem}`}>
                        {
                            item.isHeaderItem ? (
                                <p className={`content-item-heading ${tw.contentItemHeading}`}>{item.heading}</p>
                            ) : (
                                <>
                                    <div className={`content-item-header ${tw.contentItemHeader}`}>
                                        {item.iconType === iconTypes.svg ? <svg className={`content-item-icon ${tw.contentItemIcon}`}><use href={`#${item.icon}`}></use></svg> :
                                        item.iconType === iconTypes.png ? <img className={`content-item-icon ${tw.contentItemIcon}`} src={item.icon} /> : null}
                                        <p className={`content-item-heading ${tw.contentItemHeading}`}>{item.heading}</p>
                                    </div>

                                    <div className={`content-item-details ${tw.contentItemDetails}`}>
                                        {
                                            item.detailsFlow === detailsFlow.block ? (
                                                item.details.map((detail, i) => {
                                                    return (
                                                        <div className={`content-item-detail-wrapper ${tw.contentItemDetailsWrapper}`} key={i}>
                                                            <span className={`list-item-symbol ${tw.listItemSymbol}`}>{listItemSeparator}</span>
                                                            <span className={`content-item-detail ${tw.contentItemDetail}`}>{detail}</span>
                                                        </div>
                                                    )
                                                }))
                                            : item.detailsFlow === detailsFlow.inline ? (
                                                <div className={`content-item-details-wrapper ${tw.contentItemDetailsWrapper}`}>
                                                    {
                                                        item.details.map((detail, i, arr) => {
                                                            return (
                                                                <React.Fragment key={i}>
                                                                    <span className={`content-item-detail ${tw.contentItemDetail}`}>{detail}</span>
                                                                    {i < arr.length-1 && <span className={`list-item-symbol ${tw.listItemSymbol}`}>{listItemSeparator}</span>}
                                                                </React.Fragment>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            ) : null 
                                        }
                                    </div>

                                    {item.hasBtn &&(
                                        <Btn 
                                            contentType={btnContentTypes.text}
                                            content={item.btnContent}
                                            btnStyle={btnStyles.style.outlined}
                                            btnSize={btnStyles.size.sm}
                                            extraBtnClass={tw.refreshPageBtn}
                                            onClick={item.handleBtnClick}
                                        />
                                    )}
                                </>
                            )
                        }
                    </li>
                )
            })}
            <div className={`btn-wrapper ${tw.btnWrapper}`}>
                <Btn 
                    contentType={btnContentTypes.icon}
                    content={svgSymbols.iconArrowInCircle}
                    btnStyle={btnStyles.style.contentOnly}
                    btnSize={btnStyles.size.sm}
                    extraBtnClass={`!p-0`}
                    hasTooltip={true}
                    tooltipContent={'Свернуть'}
                    extraSVGClass={`!w-16 !h-16`}
                />
            </div>
        </ul>
    </div>
  )
}
