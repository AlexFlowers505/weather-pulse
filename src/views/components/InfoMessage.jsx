import Btn from "./Btn"
import btnStyles from "../styles/btnStyles"
import btnContentTypes from "../../constants/btnContentTypes"
import searchResultsStates from "../../constants/searchResultsStates"
import { infoMessagesData } from "../../data/infoMessagesData"
import { handleClearSearchBtnClick } from "../../utils/utils"

const {IDLE} = searchResultsStates



const tw = {
    wrapper: `
        w-full
        flex
        flex-col
        justify-start
        items-center
        gap-5
        p-6
        animate-zoomIn
        opacity-0
    `,
    headWrapepr: `
        w-full
        flex
        flex-col
        justify-start
        items-center
        gap-5
    `,
    illustration: `
        text-5xl
        font-semibold
        font-arial
        text-borderColor
    `,
    descWrapper: `
        flex
        flex-col
        justify-start
        items-center
        gap-0
    `,
    headingText: `
        font-semibold
        text-3xl
        text-borderColor
    `,
    descLine: `
        text-borderColor
        text-base
    `,
    dismissBtn: `
    
    `,
}
export default function InfoMessage({inputRef, setFetchState, setRequest, setRepeatFetch=null, request, message}) {
    const { hasEmoticon, emoticon='', heading='', desc=[], handleBtnClick=null, hasBtn, btnText='' } = message
  return (
    <div className={`wrapper ${tw.wrapper}`}>
        <div className={`head-wrapper ${tw.headWrapepr}`}>
            { hasEmoticon && <span className={`illustration ${tw.illustration}`}>{emoticon}</span> }
            <span className={`heading-text ${tw.headingText}`}>{heading}</span>
        </div>
        <div className={`${tw.descWrapper}`}>
            {desc.map( (line, i) => (
                <span className={`desc-line ${tw.descLine}`} key={i}>{line}</span>
            ))}
        </div>
        { hasBtn && <Btn 
                btnSize={btnStyles.size.sm}
                btnStyle={btnStyles.style.outlined}
                contentType={btnContentTypes.text}
                content={btnText}
                onClick={() => handleBtnClick(inputRef, setFetchState, setRepeatFetch, setRequest, request)}
            />
        }
    </div>
  )
}
