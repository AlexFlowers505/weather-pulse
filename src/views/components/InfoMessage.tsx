import React from "react"
import Btn from "./Btn"
import btnStyles from "../../styles/components/btn.style"
import { btnContentType } from "../../constants/btnContentType"
import { infoMessageStyle as tw } from "../../styles/components/InfoMessage.style"
import DismissBtn from "./btns/DismissBtn"
import textLayouts from "../../constants/textLayouts"
import { setStateType } from "../../types/overalls/overalls"
import searchResultsStates from "../../constants/searchResultsStates"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store/store"
import { initialState, toggleDialog } from "../../redux/slices/dialogSlice"

type InfoMessagePropsType = {
    setFetchState?: setStateType<searchResultsStates> | null
    inputRef?: React.RefObject<HTMLInputElement>
    setRequest?: setStateType<string> | null
    setRepeatFetch?: setStateType<boolean> | null
    request?: string | null
    message: any
}
export default function InfoMessage({
    inputRef, 
    setFetchState,
    setRequest,
    setRepeatFetch, 
    request='', 
    message}: InfoMessagePropsType): React.JSX.Element {
        
    const dispatch = useDispatch<AppDispatch>()
    const { 
        hasEmoticon, 
        emoticon='', 
        heading='', 
        hasDesc=true,
        desc=[], 
        hasCustomContent=false,
        customContent=null,
        handleBtnClick=null, 
        hasBtn, 
        btnText='',
        hasDismissBtn=null,
        dismissBtnTooltipContent=``,
        handleDismissBtnClick=null,
        descriptionLayout=textLayouts.align.center
    } = message

    const textLayout = 
        descriptionLayout === textLayouts.align.center ? '' :
        descriptionLayout === textLayouts.align.left ? '!items-start' : ''

  return (
    <div className={`wrapper ${tw.wrapper}`}>
        <div className={`head-wrapper ${tw.headWrapepr}`}>
            { hasDismissBtn && 
                <DismissBtn 
                    extraBtnClass={tw.DismissBtn}
                    hasTooltip={true}
                    tooltipContent={dismissBtnTooltipContent}
                    btnSize={btnStyles.size.md}
                    btnStyle={btnStyles.style.contentOnly}
                    onClick={() => dispatch(toggleDialog({isOpen: false, content: initialState.content}))}
                />
            }
            { hasEmoticon && <span className={`illustration ${tw.illustration}`}>{emoticon}</span> }
            <span className={`heading-text ${tw.headingText}`}>{heading}</span>
        </div>
        { hasDesc && (
            <div className={`${tw.descWrapper} ${textLayout}`}>
                {desc.map( (line: string, i: number) => <span className={`desc-line ${tw.descLine}`} key={i}>{line}</span>)}
            </div>
        )}
        { hasCustomContent && customContent }
        { hasBtn && <Btn 
                btnSize={btnStyles.size.sm}
                btnStyle={btnStyles.style.outlined}
                contentType={btnContentType.text}
                content={btnText}
                onClick={() => handleBtnClick(inputRef, setFetchState, setRepeatFetch, setRequest, request)}
            />
        }
    </div>
  )
}
