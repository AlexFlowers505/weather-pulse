import Btn from "./Btn.tsx"
import btnStyles from "../../styles/components/btn.style.tsx"
import { btnContentType } from "../../constants/btnContentType.ts"
import { infoMessageStyle as tw } from "../../styles/components/InfoMessage.style"
import DismissBtn from "../components/btns/DismissBtn"
import textLayouts from "../../constants/textLayouts.ts"

export default function InfoMessage({
    inputRef=null, 
    setFetchState=null, 
    setRequest=null, 
    setRepeatFetch=null, 
    request=null, 
    message}) {
        
    const { 
        hasEmoticon, 
        emoticon='', 
        heading='', 
        hasDesc=true,
        desc=[], 
        hasCustomContent=false,
        customContent='',
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
                    onClick={handleDismissBtnClick}  
                />
            }
            { hasEmoticon && <span className={`illustration ${tw.illustration}`}>{emoticon}</span> }
            <span className={`heading-text ${tw.headingText}`}>{heading}</span>
        </div>
        { hasDesc && (
            <div className={`${tw.descWrapper} ${textLayout}`}>
                {desc.map( (line, i) => <span className={`desc-line ${tw.descLine}`} key={i}>{line}</span>)}
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
