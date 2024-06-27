import React from 'react'
import IconBtn from './IconBtn'
import temperatureUnits from '../../constants/temperatureUnits'

const locateMeBtnData = {
  content: temperatureUnits.celsius.icon,
  extraSVGstyle: {
    transform: 'scale(1.5) translateX(-2px)',
  }
}
const {content, extraSVGstyle} = locateMeBtnData

export default function ChangeUnitsBtn({btnSize, btnStyle}) {
  return (
    <IconBtn content={content} extraSVGstyle={extraSVGstyle} btnSize={btnSize} btnStyle={btnStyle} />
  )
}
