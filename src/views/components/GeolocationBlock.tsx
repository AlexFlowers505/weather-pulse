import React from 'react'
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

export default function GeolocationBlock(): React.JSX.Element | null {
    const dispatch = useDispatch<AppDispatch>()
    const { position, error, getCurrentPosition, loading } = useGeolocation()

    const status = useSelector((state: RootState) => state.locationAccess.value as states)

    if (loading) return <p>Loading...</p>

    const messages = geolocationMessages(dispatch)

    switch (status) {
        case states.UNSUPPORTED:
            return (
                <MessageWrapper>
                    <InfoMessage message={messages.locationAccessNotSupported} />
                </MessageWrapper>
            )
        case states.PROMPT:
            return (
                <Btn 
                    contentType={btnContentType.text} 
                    content={`Определить автоматически`}
                    btnSize={btnStyles.size.md}
                    btnStyle={btnStyles.style.outlined}
                    onClick={getCurrentPosition}
                />
            )
        case states.GRANTED:
            return (
            <>
                <p>Your location is:</p>
                <p>Latitude: {position?.coords.latitude}</p>
                <p>Longitude: {position?.coords.longitude}</p>
            </>
        )
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