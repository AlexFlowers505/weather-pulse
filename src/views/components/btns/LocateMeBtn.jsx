import Btn from '../Btn.tsx'
import svgSymbolsIDs from '../../../constants/svgSymbolsIDs.ts'
import { btnContentType } from '../../../constants/btnContentType.ts'

const locateMeBtnData = {
  content: svgSymbolsIDs.iconLocation,
  contentType: btnContentType.icon
}
const {content, contentType} = locateMeBtnData

export default function LocateMeBtn({btnSize, btnStyle, onClick}) {
  return (
    <Btn 
      content={content} 
      contentType={contentType} 
      btnSize={btnSize} 
      btnStyle={btnStyle} 
      onClick={onClick}  
    />
  )
}
