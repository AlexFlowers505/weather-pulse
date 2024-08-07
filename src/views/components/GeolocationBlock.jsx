import Btn from '../components/Btn'
import {default as btnTypes} from '../../constants/btnContentTypes.ts'
import btnStyles from '../../styles/components/btn.style'
import { useGeolocation } from '../../hooks/useGeolocation'
import {default as states} from '../../constants/locationAccessStates'
import {default as codes} from '../../constants/locationAccessErrorCodes'
import InfoMessage from '../components/InfoMessage'
import { geolocationMessages } from '../../data/infoMessagesData'
import MessageWrapper from './MessageWrapper'

const handleGeolocationStatus = (status, position, error, getCurrentPosition, loading, setStatus) => {
    if (loading) return <p>Loading...</p>

    switch (status) {
        case states.UNSUPPORTED: return (
            <>
                <p>Geolocation is not supported by this browser.</p>
            </>
        )
        case states.PROMPT: return (
            <Btn 
                contentType={btnTypes.text} 
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
                <p>Latitude: {position.coords.latitude}</p>
                <p>Longitude: {position.coords.longitude}</p>
            </>
        )
        case states.ERROR:
            if (error.code !== codes.__USER_DENIED_ACCESS) {
                return (
                    <>
                        <p>Error getting user location: {error.message}</p>
                    </>
                )
            } else return null
    }
}

export default function GeolocationBlock() {
    const { status, position, error, getCurrentPosition, loading, setStatus } = useGeolocation()

    return (
        <>
            {handleGeolocationStatus(status, position, error, getCurrentPosition, loading, setStatus)}
        </>
    )
}