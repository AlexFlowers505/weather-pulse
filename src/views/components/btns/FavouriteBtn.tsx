import React from 'react'
import Btn from '../Btn'
import { btnContentType } from '../../../constants/btnContentType'
import svgSymbolsIDs from '../../../constants/svgSymbolsIDs'
import { BtnBasedComponentType, setStateType } from '../../../types/overalls/overalls'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store/store'
import { addLocation, removeLocation } from '../../../redux/slices/favouriteLocationsSlice'

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

type FavouriteBtnType = BtnBasedComponentType & {
  isFavourite: boolean, 
  lat: number, 
  lon: number, 
  id: number
  area: string
  region: string
  country: string
  isSpecific: boolean
}

export default function FavouriteBtn({ btnSize, btnStyle, extraBtnClass, extraSVGClass, isFavourite, id, isSpecific}: FavouriteBtnType): React.JSX.Element {
  const tooltipContent = isFavourite ? tooltipTexts.removeFromFavourite : tooltipTexts.addToFavourite
  const icon = isFavourite ? content.favourite : content.notFavourite
  const dispatch = useDispatch<AppDispatch>()

const handleFavouriteClick = () => {
  if (isFavourite) {
      dispatch(removeLocation({ id, isSpecific }))
    } else {
        dispatch(addLocation({ id, isSpecific }))
    }
}

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
      onClick={handleFavouriteClick}
    />
  )
}