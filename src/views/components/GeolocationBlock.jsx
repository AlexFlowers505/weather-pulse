import Btn from '../components/Btn'
import {default as btnTypes} from '../../constants/btnContentTypes'
import btnStyles from '../../styles/components/btnStyles'
import { useGeolocation } from '../../hooks/useGeolocation'
import {default as states} from '../../constants/locationAccessStates'
import {default as codes} from '../../constants/locationAccessErrorCodes'

const handleGeolocationStatus = (status, position, error, getCurrentPosition, loading) => {
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
            <div>
                <p>Your location is:</p>
                <p>Latitude: {position.coords.latitude}</p>
                <p>Longitude: {position.coords.longitude}</p>
            </div>
        )
        case states.DENIED: return (
            <>
                <p>Location access denied. Please enable it in your browser settings and reload the page.</p>
                <p>Instructions:</p>
                <ul>
                    <li><b>Chrome:</b> Go to Settings → Privacy and Security → Site Settings → Location</li>
                    <li><b>Firefox:</b> Go to Preferences → Privacy & Security → Permissions → Location</li>
                    <li><b>Edge:</b> Go to Settings → Site Permissions → Location</li>
                    <li><b>Safari:</b> Go to Preferences → Websites → Location</li>
                </ul>
            </>
        )
        case states.ERROR:
            if (error.code !== codes.__USER_DENIED_ACCESS) {
                return (
                    <>
                        <p>Error getting user location: {error.message}</p>
                    </>
                )
            } else {
                return (
                    <>
                        <p>Location access denied. Please enable it in your browser settings and reload the page.</p>
                        <p>Instructions:</p>
                        <ul>
                            <li><b>Chrome:</b> Go to Settings → Privacy and Security → Site Settings → Location</li>
                            <li><b>Firefox:</b> Go to Preferences → Privacy & Security → Permissions → Location</li>
                            <li><b>Edge:</b> Go to Settings → Site Permissions → Location</li>
                            <li><b>Safari:</b> Go to Preferences → Websites → Location</li>
                        </ul>
                    </>
                )
            }
    }
}


export default function GeolocationBlock() {
    const { status, position, error, getCurrentPosition, loading, permissionAwait } = useGeolocation()

    return (
        <>
            {handleGeolocationStatus(status, position, error, getCurrentPosition, loading, permissionAwait)}
        </>
    )
}