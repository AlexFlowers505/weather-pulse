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
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'

export default function GeolocationBlock(): React.JSX.Element | null {
    const { position, error, getCurrentPosition, loading } = useGeolocation()

    const status = useSelector((state: RootState) => state.locationAccess.value as states)

    if (loading) return <p>Loading...</p>

    switch (status) {
        case states.UNSUPPORTED:
            return <p>Geolocation is not supported by this browser.</p>
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
                    <InfoMessage message={geolocationMessages.accessDenied} />
                </MessageWrapper>
            )
        case states.ERROR:
            if (!!error && error.code !== codes.__USER_DENIED_ACCESS) {
                return (
                    <>
                        <p>Error getting user location: {error.message}</p>
                    </>
                )
            }
        default: {
            console.log(status)
        }
    }
    return null
}