import React, { useEffect } from 'react'
import HelloSection from '../sections/HelloSection'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store/store'
import { removeCurrentAreaData } from '../../redux/slices/currentAreaSlice'
import { switchLocationAccess } from '../../redux/slices/locationAccessSlice'
import locationAccessStates from '../../constants/locationAccessStates'

export default function WelcomePage(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(switchLocationAccess(locationAccessStates.PROMPT))
    dispatch(removeCurrentAreaData())
  }, [])
  return (
    <HelloSection />
  )
}
