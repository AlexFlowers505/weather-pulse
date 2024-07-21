import Btn from '../Btn'
import svgSymbols from '../../../constants/svgSymbols'
import btnContentTypes from '../../../constants/btnContentTypes'

const btnData = {
  content: svgSymbols.iconAddToFavourite,
  contentType: btnContentTypes.icon,
  extraSVGstyle: {
    transform: 'scale(1.2)',
  }
}

const {content, contentType, extraSVGstyle} = btnData

export default function FavouriteBtn({btnSize, btnStyle, onClick}) {
  return (
    <Btn 
      content={content} 
      contentType={contentType} 
      btnSize={btnSize} 
      btnStyle={btnStyle} 
      extraSVGstyle={extraSVGstyle} 
      onClick={onClick}  
    />
  )
}

