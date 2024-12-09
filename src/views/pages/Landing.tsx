import React, { useEffect } from 'react'
import LandingContentBlock from '../sections/LandingContentBlock'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store/store'
import { switchLocationAccess } from '../../redux/slices/locationAccessSlice'
import locationAccessStates from '../../constants/locationAccessStates'

export default function Landing(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(switchLocationAccess(locationAccessStates.PROMPT))
  }, [])
  return (
    <LandingContentBlock />
  )
}
