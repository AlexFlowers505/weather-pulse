import React from 'react'
import iconExtentions from '../../constants/iconExtentions'
import detailsFlow from '../../constants/detailsFlow'
import { textSymbols } from '../../constants/textSymbols'
import { ContentRichInfoBlockStyle as tw } from '../../styles/components/ContentRichInfoBlock.style'
import Btn from './Btn'
import btnStyles from '../../styles/components/btn.style'
import { btnContentType } from '../../constants/btnContentType'
import { InstructionItemType } from '../../data/GeolocationAccessDeniedInstruction'

const {listItemsSeparator} = textSymbols

type ContentRichInfoBlockPropsType = {
    item: InstructionItemType
}

export default function ContentRichInfoBlock({item}: ContentRichInfoBlockPropsType): React.JSX.Element {
  return (
    <li className={`content-item ${tw.contentItem}`}>
        {
            item.isHeaderItem ? (
                <p className={`content-item-heading ${tw.contentItemHeading}`}>{item.heading}</p>
            ) : (
                <>
                    <div className={`content-item-header ${tw.contentItemHeader}`}>
                        {item.iconType === iconExtentions.svg ? <svg className={`content-item-icon ${tw.contentItemIcon}`}><use href={`#${item.icon}`}></use></svg> :
                        item.iconType === iconExtentions.png ? <img className={`content-item-icon ${tw.contentItemIcon}`} src={item.icon} /> : null}
                        <p className={`content-item-heading ${tw.contentItemHeading}`}>{item.heading}</p>
                    </div>

                    <div className={`content-item-details ${tw.contentItemDetails}`}>
                        {
                            item.detailsFlow === detailsFlow.block ? (
                                item.details?.map((detail: string, i: number): React.JSX.Element => {
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
                                        item.details?.map((detail: string, i: number, arr: string[]) => {
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
                            contentType={btnContentType.text}
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
