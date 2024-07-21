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
    `,
    headWrapepr: `
        w-full
        flex
        flex-col
        justify-start
        items-center
        gap-5
        animate-zoomIn
        opacity-0
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
    messageText: `
        text-borderColor
        text-base
    `,
    dismissBtn: `
    
    `,
}
export default function InfoMessage({inputRef, setFetchState, setRequest, message}) {
    const { emoticon, heading, desc, handleBtnClick } = message
  return (
    <div className={`wrapper ${tw.wrapper}`}>
        <div className={`head-wrapper ${tw.headWrapepr}`}>
            <span className={`illustration ${tw.illustration}`}>{emoticon}</span>
            <span className={`heading-text ${tw.headingText}`}>{heading}</span>
        </div>
        <div className={`${tw.descWrapper}`}>
            {desc.map( line => (
                <span className={`message-text ${tw.messageText}`}>{line}</span>
            ))}
        </div>
        <Btn 
            btnSize={btnStyles.size.sm}
            btnStyle={btnStyles.style.outlined}
            contentType={btnContentTypes.text}
            content='Очистить поле поиска'
            onClick={() => handleBtnClick(inputRef, setFetchState, setRequest)}
        />
    </div>
  )
}
