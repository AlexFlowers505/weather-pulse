import React, { useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import Btn from './Btn'
import { btnContentType } from '../../constants/btnContentType'
import btnStyles from '../../styles/components/btn.style'
import svgSymbolsIDs from '../../constants/svgSymbolsIDs'
import { GeolocationDeniedInfoBlockStyle as tw } from '../../styles/components/GeolocationDeniedInfoBlock.style'
import { geolocationAccessDeniedInstruction as data } from '../../data/GeolocationAccessDeniedInstruction'
import ContentRichInfoBlock from './ContentRichInfoBlock'
import DismissBtn from './btns/DismissBtn'
import locationAccessStates from '../../constants/locationAccessStates'

const useToggle = (initialState: boolean = false): [boolean, ()=> void] => {
  const [state, setState] = useState<boolean>(initialState)
  const toggle = () => setState(prev => !prev)
  return [state, toggle]
}


const animateHeightConfig = {
  defaultHeight: 130,
  finalHeight: 'auto' as const,
  duration: 500
}

const toggleBtnTooltipContents = {
  toggleDown: 'Показать больше',
  toggleUp: 'Свернуть',
}

const dismissBtnCustomClasses= `
      !p-1
      md:!p-2

      absolute
      top-2
      right-2
  
      hover:scale-125
      hover:-rotate-180
      hover:text-primary
      
      focus:-rotate-180
      focus:scale-125
      focus:text-primary
      
      active:rotate-90
      active:scale-110
      active:text-activeStateLight
`

export default function GeolocationDeniedInfoBlock(): React.JSX.Element {
  const [unraveled, toggleUnraveled] = useToggle(false)
  const [height, setHeight] = useState<number | 'auto'>(animateHeightConfig.defaultHeight)

  useEffect(() => {
    if (unraveled) {
      setHeight(animateHeightConfig.finalHeight)
    } else {
      setHeight(animateHeightConfig.defaultHeight)
    }
  }, [unraveled])
  

  const toggleBtnClass = `${tw.unravelBtn} ${!unraveled && tw.unravelBtnReversed}`
  const animateHeightClass = `animate-height-component ${tw.animateHeightComponent} ${!!unraveled && tw.animateHeightComponentUnraveled}`
  const toggleBtnTooltip = unraveled ? toggleBtnTooltipContents.toggleUp : toggleBtnTooltipContents.toggleDown

  return (
    <div className={`content-wrapper ${tw.contentWrapper}`}>
      {/* <DismissBtn 
        extraBtnClass={dismissBtnCustomClasses}
        hasTooltip={true}
        tooltipContent={'Закрыть'}
        btnSize={btnStyles.size.md}
        btnStyle={btnStyles.style.contentOnly}
        onClick={() => setStatus(locationAccessStates.PROMPT)}
      /> */}
      <h6 className={`heading ${tw.heading}`}>{data.heading}</h6>
      <AnimateHeight 
        duration={animateHeightConfig.duration} 
        height={height}
        className={animateHeightClass}
      >
        <ul className={`content-list ${tw.contentList}`}>
          {data.listItems.map((item, i) => <ContentRichInfoBlock item={item} key={i} />)}
        </ul>
      </AnimateHeight>
      <div className={`btn-wrapper ${tw.btnWrapper}`}>
        <Btn
          contentType={btnContentType.icon}
          content={svgSymbolsIDs.iconArrowInCircle}
          btnStyle={btnStyles.style.contentOnly}
          btnSize={btnStyles.size.sm}
          extraBtnClass={toggleBtnClass}
          hasTooltip={true}
          tooltipContent={toggleBtnTooltip}
          extraSVGClass={tw.unravelBtnIcon}
          onClick={toggleUnraveled}
        />
      </div>
    </div>
  )
}