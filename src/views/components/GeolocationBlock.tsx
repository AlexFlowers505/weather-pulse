import React, { useEffect, useState } from 'react'
import Btn from './Btn'
import { btnContentType } from '../../constants/btnContentType'
import btnStyles from '../../styles/components/btn.style'
import { useGeolocation } from '../../hooks/useGeolocation'
import { default as states } from '../../constants/locationAccessStates'
import { default as codes } from '../../constants/locationAccessErrorCodes'
import InfoMessage from './InfoMessage'
import { geolocationMessages } from '../../data/infoMessagesData'
import MessageWrapper from './MessageWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store/store'
import { geolocationBlockStyle as tw } from '../../styles/components/GeolocationBlock.style'
import { useNavigate } from 'react-router-dom'
import LocateMeBtn from './btns/LocateMeBtn'
import { toggleDialog } from '../../redux/slices/dialogSlice'
import { switchLocationAccess } from '../../redux/slices/locationAccessSlice'

type GeolocationBlockPropsType = {
    portable?: boolean
}
export default function GeolocationBlock({ portable = false } : GeolocationBlockPropsType): React.JSX.Element | null {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { position, error, getCurrentPosition, loading } = useGeolocation()
    const [fetchLoading, setFetchLoading] = useState(false)
    const status = useSelector((state: RootState) => state.locationAccess.value as states)
    const messages = geolocationMessages()
    const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)


    useEffect(() => {
        if (status === states.GRANTED && position) {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            setFetchLoading(true)
            
            setTimeout(() => {
                setFetchLoading(false)
                navigate(`/forecast/${lat}_${lon}`)
            }, 1000)
        }
        console.log(status)
    }, [status, position, navigate])


    const [btnContent, setBtnContent] = useState('')
    const [btnExtraStyle, setBtnExtraStyle] = useState('')
    const [isTooltipOpen, setIsTooltipOpen] = useState(false)
    useEffect(() => {
        switch (status) {
            case states.PROMPT:
                setBtnExtraStyle(loading ? tw.locationBtnLoading : '')
                if (!portable) {
                    setBtnContent(!loading ? `Определить автоматически` : `Получаем доступ к местоположению...`)
                } else {
                    setBtnContent(!loading ? `Определить местоположение автоматически` : `Получаем доступ к местоположению...`)
                    setIsTooltipOpen(!loading ? false : true)    
                }
                break
            case states.DENIED:
                dispatch(toggleDialog({isOpen: true, content: messages.accessDenied}))
                break
            case states.GRANTED:
                    setBtnContent(`Загружаем прогноз погоды...`)
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
            extraBtnClass={btnExtraStyle}
            hasTooltip={true}
            tooltipContent={btnContent}
            isTooltipOpen = {isTooltipOpen}
        />
    )
}