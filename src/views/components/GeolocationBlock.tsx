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
export default function GeolocationBlock(): React.JSX.Element | null {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { position, error, getCurrentPosition, loading } = useGeolocation()
    const [fetchLoading, setFetchLoading] = useState(false)

    
    const status = useSelector((state: RootState) => state.locationAccess.value as states)
    
    useEffect(() => {
        if (status === states.GRANTED && position) {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            setFetchLoading(true)
            
            // Navigate to forecast page with location coordinates
            setTimeout(() => {
                setFetchLoading(false)
                navigate(`/forecast/${lat}_${lon}`)
            }, 1000)
        }
    }, [status, position, navigate])

    const messages = geolocationMessages(dispatch)

    let btnContent
    let btnExtraStyle

    switch (status) {
        case states.UNSUPPORTED:
            return (
                <MessageWrapper>
                    <InfoMessage message={messages.locationAccessNotSupported} />
                </MessageWrapper>
            )
        case states.PROMPT:
            btnContent = loading ? `Получаем доступ к местоположению...` : `Определить автоматически`
            btnExtraStyle = loading ? tw.locationBtnLoading : ''
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
            //     return (
            // <>
            //     <p>Your location is:</p>
            //     <p>Latitude: {position?.coords.latitude}</p>
            //     <p>Longitude: {position?.coords.longitude}</p>
            // </>
        // )
        case states.DENIED:
            return (
                <MessageWrapper>
                    <InfoMessage message={messages.accessDenied} />
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
    return null
}