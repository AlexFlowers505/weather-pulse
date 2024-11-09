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

    useEffect(() => {
        if (status === states.DENIED) {
            dispatch(toggleDialog({isOpen: true, content: messages.accessDenied}))
        }
    }, [status])

    useEffect(() => {
        if (!isDialogOpen) {
            dispatch(switchLocationAccess(states.PROMPT))
        }
    }, [isDialogOpen])

    if (!portable) {
        let btnContent
        let btnExtraStyle
        switch (status) {
            case states.PROMPT:
                btnContent = !loading ? `Определить автоматически` : `Получаем доступ к местоположению...`
                btnExtraStyle = loading ? tw.locationBtnLoading : ''
                return (<Btn 
                        contentType={btnContentType.text} 
                        content={btnContent}
                        btnSize={btnStyles.size.md}
                        btnStyle={btnStyles.style.outlined}
                        extraBtnClass={btnExtraStyle}
                        onClick={getCurrentPosition}
                />)
            case states.GRANTED:
                    btnContent = `Загружаем прогноз погоды...`
                    btnExtraStyle = tw.locationBtnLoading
    
                    return (
                        <Btn 
                            contentType={btnContentType.text} 
                            content={btnContent}
                            btnSize={btnStyles.size.md}
                            btnStyle={btnStyles.style.outlined}
                            extraBtnClass={btnExtraStyle}
                            onClick={getCurrentPosition}
                        />
                    )
            case states.DENIED:
                return (
                    <MessageWrapper>
                        <InfoMessage message={messages.accessDenied} />
                    </MessageWrapper>
                )
            case states.UNSUPPORTED:
                return (
                    <MessageWrapper>
                        <InfoMessage message={messages.locationAccessNotSupported} />
                    </MessageWrapper>
                )
            case states.ERROR:
                if (!!error && error.code !== codes.__USER_DENIED_ACCESS) {
                    return (
                    <MessageWrapper>
                        <InfoMessage message={messages.errorOccured} />
                    </MessageWrapper>
                    )
                }
        }
    } else {
        let btnContent
        let btnExtraStyle
        let isTooltipOpen
        switch (status) {
            case states.PROMPT:
                btnContent = !loading ? `Определить местоположение автоматически` : `Получаем доступ к местоположению...`
                isTooltipOpen = !loading ? undefined : true
                btnExtraStyle = loading ? tw.locationBtnLoading : ''
                return (
                    <LocateMeBtn 
                        onClick={getCurrentPosition}
                        btnSize={btnStyles.size.md}
                        extraBtnClass={btnExtraStyle}
                        hasTooltip={true}
                        tooltipContent={btnContent}
                        isTooltipOpen = {isTooltipOpen}
                    />
                )
                
                case states.GRANTED:
                    btnContent = `Загружаем прогноз погоды...`
                    btnExtraStyle = tw.locationBtnLoading
                    isTooltipOpen = true
                    return (
                        <LocateMeBtn 
                            onClick={getCurrentPosition}
                            btnSize={btnStyles.size.md}
                            extraBtnClass={btnExtraStyle}
                            hasTooltip={true}
                            tooltipContent={btnContent}
                            isTooltipOpen = {isTooltipOpen}
                        />
                    )
                    
                    case states.DENIED:
                        return (
                            <LocateMeBtn 
                                onClick={getCurrentPosition}
                                btnSize={btnStyles.size.md}
                                extraBtnClass={btnExtraStyle}
                                hasTooltip={true}
                                tooltipContent={btnContent}
                                isTooltipOpen = {isTooltipOpen}
                            />
                        )
                        case states.UNSUPPORTED:
                            return (
                                <MessageWrapper>
                                    <InfoMessage message={messages.locationAccessNotSupported} />
                                </MessageWrapper>
                )
                case states.ERROR:
                    if (!!error && error.code !== codes.__USER_DENIED_ACCESS) {
                    return (
                        <MessageWrapper>
                        <InfoMessage message={messages.errorOccured} />
                    </MessageWrapper>
                    )
                }
                default:
                    return (
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
    }
    return null

}