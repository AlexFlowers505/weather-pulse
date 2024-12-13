import React, { useEffect, useState } from 'react'
import Btn from './Btn'
import { btnContentType } from '../../constants/btnContentType'
import btnStyles from '../../styles/components/btn.style'
import { useGeolocation } from '../../hooks/useGeolocation'
import { default as states } from '../../constants/locationAccessStates'
import { default as codes } from '../../constants/locationAccessErrorCodes'
import { geolocationMessages } from '../../data/infoMessagesData'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store/store'
import { geolocationBlockStyle as tw } from '../../styles/components/GeolocationBlock.style'
import { useNavigate } from 'react-router-dom'
import LocateMeBtn from './btns/LocateMeBtn'
import { toggleDialog } from '../../redux/slices/dialogSlice'
import { switchLocationAccess } from '../../redux/slices/locationAccessSlice'
import { fetchWeather } from '../../api/openWeatherMap/fetchWeather'
import { geolocationBlockConfig as config } from '../../config/components/geolocationBlock.config'
import { removeCurrentAreaData, setCurrentAreaData } from '../../redux/slices/currentAreaSlice'

type GeolocationBlockPropsType = {
    portable?: boolean
}
export default function GeolocationBlock({ portable = false } : GeolocationBlockPropsType): React.JSX.Element | null {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { position, error, getCurrentPosition, loading } = useGeolocation()
    const status = useSelector((state: RootState) => state.locationAccess.value as states)
    const messages = geolocationMessages()
    const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
    const units = useSelector((state: RootState) => state.temperatureUnits.__type)

    useEffect(() => {
        if (status === states.GRANTED && position) {
            const lat = position.coords.latitude
            const lon = position.coords.longitude

            fetchWeather({ lat, lon, isForecast: false, units })
            .then( res => {
                if ('id' in res) {
                    dispatch(switchLocationAccess(states.PROMPT))
                    dispatch(setCurrentAreaData({ id: res.id, isSpecific: true }))
                    navigate(`/forecast?id=${res.id}&spec=1`)
                } else {
                    console.error('Error fetching location data')
                }
            })
        }
        console.log(status)
    }, [status, position, navigate])


    const [btnContent, setBtnContent] = useState('')
    const [btnExtraStyle, setBtnExtraStyle] = useState('')
    const [isTooltipOpen, setIsTooltipOpen] = useState(false)
    useEffect(() => {
        switch (status) {
            case states.PROMPT:
                setBtnExtraStyle(loading ? tw.locationBtnLoading : tw.locationBtnDefault)
                if (!portable) {
                    setBtnContent(!loading ? config.btnContent.defaultShortText : config.btnContent.gettingAccess)
                } else {
                    setBtnContent(!loading ? config.btnContent.defaultFullText : config.btnContent.gettingAccess)
                    setIsTooltipOpen(!loading ? false : true)    
                }
                break
            case states.DENIED:
                dispatch(toggleDialog({isOpen: true, content: messages.accessDenied}))
                break
            case states.GRANTED:
                    setBtnContent(config.btnContent.fetchingData)
                    setBtnExtraStyle(tw.locationBtnLoading)
                if (portable) {
                    setIsTooltipOpen(true)
                }
                break
            case states.UNSUPPORTED:
                dispatch(toggleDialog({isOpen: true, content: messages.locationAccessNotSupported}))
                break
            case states.ERROR:
                if (!!error && error.code !== codes.__USER_DENIED_ACCESS) {
                    dispatch(toggleDialog({isOpen: true, content: messages.errorOccured}))
                }
                break
        }
    }, [status])

    useEffect(() => {
        if (!isDialogOpen) {
            dispatch(switchLocationAccess(states.PROMPT))
        }
    }, [isDialogOpen])

    return !portable ? (
        <Btn 
            contentType={btnContentType.text} 
            content={btnContent}
            btnSize={btnStyles.size.md}
            btnStyle={btnStyles.style.outlined}
            extraBtnClass={btnExtraStyle}
            onClick={getCurrentPosition}
        />
    ) : (
        <LocateMeBtn 
            onClick={getCurrentPosition}
            btnSize={btnStyles.size.md}
            extraBtnClass={tw.locateMeBtn}
            hasTooltip={true}
            tooltipContent={btnContent}
            isTooltipOpen = {isTooltipOpen}
        />
    )
}