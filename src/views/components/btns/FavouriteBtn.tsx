import React from 'react'
import Btn from '../Btn'
import { btnContentType } from '../../../constants/btnContentType'
import svgSymbolsIDs from '../../../constants/svgSymbolsIDs'
import { BtnBasedComponentType } from '../../../types/overalls/overalls'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store/store'
import { addLocation, removeLocation } from '../../../redux/slices/favouriteLocationsSlice'
import { favouriteBtnStyle as tw } from '../../../styles/components/FavouriteBtn.style'

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
  id: number
  area: string
  region: string
  country: string
  isSpecific: boolean
  specificLocation: string
  lat: number
  lon: number
}

export default function FavouriteBtn({ btnSize, btnStyle, extraBtnClass, extraSVGClass, isFavourite, id, isSpecific, area, region, country, specificLocation }: FavouriteBtnType): React.JSX.Element {
  const tooltipContent = isFavourite ? tooltipTexts.removeFromFavourite : tooltipTexts.addToFavourite
  const icon = isFavourite ? content.favourite : content.notFavourite
  const dispatch = useDispatch<AppDispatch>()

const handleFavouriteClick = () => {
  if (isFavourite) {
      dispatch(removeLocation({ id, isSpecific, area, specificLocation, region, country }))
    } else {
        dispatch(addLocation({ id, isSpecific, area, specificLocation, region, country }))
    }
}

  return (
    <Btn
      content={icon}
      contentType={contentType}
      btnSize={btnSize}
      btnStyle={btnStyle}
      extraSVGstyle={extraSVGstyle}
      extraBtnClass={`${extraBtnClass} ${isFavourite ? tw.isFavourite : tw.notFavourite}`}
      // extraBtnClass={extraBtnClass}
      extraSVGClass={extraSVGClass}
      hasTooltip={true}
      tooltipContent={tooltipContent}
      tooltipOffset={[0, -10]}
      onClick={handleFavouriteClick}
    />
  )
}