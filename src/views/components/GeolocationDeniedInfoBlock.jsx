import { useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import Btn from './Btn'
import btnContentTypes from '../../constants/btnContentTypes'
import btnStyles from '../../styles/components/btnStyles'
import svgSymbols from '../../constants/svgSymbols'
import { GeolocationDeniedInfoBlockStyle as tw } from '../../styles/components/GeolocationDeniedInfoBlock.style'
import { geolocationAccessDeniedInstruction as data } from '../../data/GeolocationAccessDeniedInstruction'
import ContentRichInfoBlock from './ContentRichInfoBlock'

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState)
  const toggle = () => setState(prev => !prev)
  return [state, toggle]
}

const animateHeightConfig = {
  defaultHeight: 130,
  finalHeight: 'auto',
  duration: 500
}

const toggleBtnTooltipContents = {
  toggleDown: 'Показать больше',
  toggleUp: 'Свернуть',
}

export default function GeolocationDeniedInfoBlock() {
  const [unraveled, toggleUnraveled] = useToggle(false)
  const [height, setHeight] = useState(animateHeightConfig.defaultHeight)

  useEffect(() => {
    setHeight(unraveled ? animateHeightConfig.finalHeight : animateHeightConfig.defaultHeight)
  }, [unraveled])

  const toggleBtnClass = `${tw.unravelBtn} ${!unraveled && tw.unravelBtnReversed}`
  const animateHeightClass = `animate-height-component ${tw.animateHeightComponent} ${!!unraveled && tw.animateHeightComponentUnraveled}`
  const toggleBtnTooltip = unraveled ? toggleBtnTooltipContents.toggleUp : toggleBtnTooltipContents.toggleDown

  return (
    <div className={`content-wrapper ${tw.contentWrapper}`}>
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
          contentType={btnContentTypes.icon}
          content={svgSymbols.iconArrowInCircle}
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