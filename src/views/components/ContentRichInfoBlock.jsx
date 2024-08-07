import React from 'react'
import iconTypes from '../../constants/iconTypes'
import detailsFlow from '../../constants/detailsFlow'
import { textSymbols } from '../../constants/textSymbols'
import { ContentRichInfoBlockStyle as tw } from '../../styles/components/ContentRichInfoBlock.style'
import Btn from './Btn'
import btnStyles from '../../styles/components/btn.style'
import btnContentTypes from '../../constants/btnContentTypes.ts'

const {listItemsSeparator} = textSymbols

export default function ContentRichInfoBlock({item}) {
  return (
    <li className={`content-item ${tw.contentItem}`}>
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
                            extraBtnClass={tw.itemBtn}
                            onClick={item.handleBtnClick}
                        />
                    )}
                </>
            )
        }
    </li>
  )
}
