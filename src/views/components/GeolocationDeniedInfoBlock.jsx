import React from 'react'
import Btn from './Btn'
import btnContentTypes from '../../constants/btnContentTypes'
import btnStyles from '../../styles/components/btnStyles'
import svgSymbols from '../../constants/svgSymbols'
import {GeolocationDeniedInfoBlockStyle as tw} from '../../styles/components/GeolocationDeniedInfoBlock.style'
import iconTypes from '../../constants/iconTypes'
import detailsFlow from '../../constants/detailsFlow'
import {geolocationAccessDeniedInstruction as data} from '../../data/GeolocationAccessDeniedInstruction'
import { textSymbols } from '../../constants/textSymbols'

const {listItemsSeparator} = textSymbols

export default function GeolocationDeniedInfoBlock() {
  return (
    <div className={`content-wrapper ${tw.contentWrapper}`}>
        <h6 className={`heading ${tw.heading}`}>{data.heading}</h6>
        <ul className={`content-list ${tw.contentList}`}>

            { data.listItems.map( (item, i) => { 
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
                                                            <span className={`list-item-symbol ${tw.listItemSymbol}`}>{listItemsSeparator}</span>
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
                                                                    {i < arr.length-1 && <span className={`list-item-symbol ${tw.listItemSymbol}`}>{listItemsSeparator}</span>}
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
