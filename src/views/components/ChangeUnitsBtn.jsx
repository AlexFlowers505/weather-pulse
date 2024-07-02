import React, { useState } from 'react'
import Btn from './Btn'
import temperatureUnits from '../../constants/temperatureUnits'
import btnContentTypes from '../../constants/btnContentTypes'

const locateMeBtnData = {
  content: temperatureUnits.celsius.icon,
  contentType: btnContentTypes.icon,
  extraSVGstyle: {
    transform: 'scale(1.5) translateX(-2px)',
  }
}
const {content, extraSVGstyle, contentType} = locateMeBtnData

export default function ChangeUnitsBtn({btnSize, btnStyle}) {
  const [degreesUnits, setDegreesUnits] = useState(temperatureUnits.celsius.name)
  return (
    <Btn 
      content={content} 
      contentType={contentType} 
      extraSVGstyle={extraSVGstyle} 
      btnSize={btnSize} 
      btnStyle={btnStyle} 
      onClick={() => console.log('hey')}
    />
  )
}
