import { useState, useEffect } from 'react'
import Btn from '../Btn'
import btnContentTypes from '../../../constants/btnContentTypes.ts'
import svgSymbols from '../../../constants/svgSymbols'

const btnData = {
  content: {
    favourite: svgSymbols.iconFavourite,
    notFavourite: svgSymbols.iconAddToFavourite,
  },
  contentType: btnContentTypes.icon,
  extraSVGstyle: {
    transform: 'scale(1.2)',
  },
  tooltipTexts: {
    addToFavourite: 'Добавить в избранное',
    removeFromFavourite: 'Убрать из избранного',
  },
}

const { content, contentType, extraSVGstyle, tooltipTexts } = btnData

export default function FavouriteBtn({ btnSize, btnStyle, extraBtnClass, extraSVGClass }) {
  const [isFavourite, setIsFavourite] = useState(false)
  const handleFavouriteBtnClick = () => setIsFavourite(prevState => !prevState)
  const tooltipContent = isFavourite ? tooltipTexts.removeFromFavourite : tooltipTexts.addToFavourite
  const icon = isFavourite ? content.favourite : content.notFavourite

  return (
    <Btn
      content={icon}
      contentType={contentType}
      btnSize={btnSize}
      btnStyle={btnStyle}
      extraSVGstyle={extraSVGstyle}
      extraBtnClass={extraBtnClass}
      extraSVGClass={extraSVGClass}
      onClick={handleFavouriteBtnClick}
      hasTooltip={true}
      tooltipContent={tooltipContent}
      tooltipOffset={[0, -10]}
    />
  )
}