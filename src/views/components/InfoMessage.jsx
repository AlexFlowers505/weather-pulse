import Btn from "./Btn"
import btnStyles from "../../styles/components/btnStyles"
import btnContentTypes from "../../constants/btnContentTypes"
import searchResultsStates from "../../constants/searchResultsStates"
import { infoMessageStyle as tw } from "../../styles/components/InfoMessage.style"

const {IDLE} = searchResultsStates

export default function InfoMessage({inputRef, setFetchState, setRequest, setRepeatFetch=null, request, message}) {
    const { hasEmoticon, emoticon='', heading='', desc=[], handleBtnClick=null, hasBtn, btnText='' } = message
  return (
    <div className={`wrapper ${tw.wrapper}`}>
        <div className={`head-wrapper ${tw.headWrapepr}`}>
            { hasEmoticon && <span className={`illustration ${tw.illustration}`}>{emoticon}</span> }
            <span className={`heading-text ${tw.headingText}`}>{heading}</span>
        </div>
        <div className={`${tw.descWrapper}`}>
            {desc.map( (line, i) => <span className={`desc-line ${tw.descLine}`} key={i}>{line}</span>)}
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
