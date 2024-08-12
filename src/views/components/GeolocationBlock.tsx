import React from 'react'
import Btn from './Btn.tsx'
import { btnContentType } from '../../constants/btnContentType.ts'
import btnStyles from '../../styles/components/btn.style.tsx'
import { useGeolocation } from '../../hooks/useGeolocation.tsx'
import {default as states} from '../../constants/locationAccessStates.ts'
import {default as codes} from '../../constants/locationAccessErrorCodes.ts'
import InfoMessage from './InfoMessage.jsx'
import { geolocationMessages } from '../../data/infoMessagesData.tsx'
import MessageWrapper from './MessageWrapper.jsx'

export default function GeolocationBlock(): React.JSX.Element | undefined {
    const { status, position, error, getCurrentPosition, loading } = useGeolocation()

    if (loading) return <p>Loading...</p>

    switch (status) {
        case states.UNSUPPORTED: return (<p>Geolocation is not supported by this browser.</p>)
        case states.PROMPT: return (
            <Btn 
                contentType={btnContentType.text} 
                content={`Определить автоматически`}
                btnSize={btnStyles.size.md}
                btnStyle={btnStyles.style.outlined}
                onClick={getCurrentPosition}
            />
        )
        case states.GRANTED: return (
            <MessageWrapper>
                <InfoMessage message={geolocationMessages.accessDenied} />
            </MessageWrapper>
        )
        case states.DENIED: return (
            <>
                <p>Your location is:</p>
                <p>Latitude: {position?.coords.latitude}</p>
                <p>Longitude: {position?.coords.longitude}</p>
            </>
        )
        case states.ERROR:
            if (!!error && error.code !== codes.__USER_DENIED_ACCESS) {
                return (
                    <>
                        <p>Error getting user location: {error.message}</p>
                    </>
                )
            } else console.log(status)
    }
    return
}