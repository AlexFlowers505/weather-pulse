import React, { useState } from 'react'
import Btn from '../Btn'
import { btnContentType } from '../../../constants/btnContentType'
import svgSymbolsIDs from '../../../constants/svgSymbolsIDs'
import { BtnBasedComponentType } from '../../../types/overalls/utils'

const btnData = {
  content: {
    favourite: svgSymbolsIDs.iconFavourite,
    notFavourite: svgSymbolsIDs.iconAddToFavourite,
  },
  contentType: btnContentType.icon,
  extraSVGstyle: {
    transform: 'scale(1.2)',
  },
  tooltipTexts: {
    addToFavourite: 'Добавить в избранное',
    removeFromFavourite: 'Убрать из избранного',
  },
}

const { content, contentType, extraSVGstyle, tooltipTexts } = btnData

export default function FavouriteBtn({ btnSize, btnStyle, extraBtnClass, extraSVGClass }: BtnBasedComponentType): React.JSX.Element {
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