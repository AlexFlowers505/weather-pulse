import React from 'react'
import Btn from '../Btn'
import { btnContentType } from '../../../constants/btnContentType'
import svgSymbolsIDs from '../../../constants/svgSymbolsIDs'
import { BtnBasedComponentType } from '../../../types/overalls/overalls'

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

type FavouriteBtnType = BtnBasedComponentType&{isFavourite: boolean}

export default function FavouriteBtn({ btnSize, btnStyle, extraBtnClass, extraSVGClass, isFavourite, onClick }: FavouriteBtnType): React.JSX.Element {
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
      hasTooltip={true}
      tooltipContent={tooltipContent}
      tooltipOffset={[0, -10]}
      onClick={onClick}
    />
  )
}