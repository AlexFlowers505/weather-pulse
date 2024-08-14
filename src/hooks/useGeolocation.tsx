import { useState, useEffect } from 'react'
import states from '../constants/locationAccessStates'

type statusType = states[keyof states]
export type geolocationPositionType = {
    coords: {
        latitude: number
        longitude: number
        accuracy?: number
        altitude?: number | null
        altitudeAccuracy?: number | null
    }
    timestamp: number
} | null

type getPositionErrorType = {
    code: number
    message: string
} | null

export function useGeolocation() {
    const [status, setStatus] = useState<statusType>(states.IDLE)
    const [position, setPosition] = useState<geolocationPositionType>(null)
    const [error, setError] = useState<getPositionErrorType>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if ("geolocation" in navigator && "permissions" in navigator) {
            navigator.permissions
                .query({ name: 'geolocation' })
                .then(result => {
                    console.log(result)
                    handlePermissionChange(result.state as statusType)
                    result.onchange = () => handlePermissionChange(result.state as statusType)
                })
        } else {
            setStatus(states.UNSUPPORTED)
        }
    }, [])

    const handlePermissionChange = (state: statusType) => {
        switch (state) {
            case states.GRANTED:
                setStatus(states.GRANTED)
                getCurrentPosition()
                break;
            case states.PROMPT:
                setStatus(states.PROMPT)
                break
            case states.DENIED:
                setStatus(states.DENIED)
                break
            default:
                setStatus(states.ERROR)
                break
        }
    }

    const getCurrentPosition = () => {
        setLoading(true)
        navigator.geolocation.getCurrentPosition(
            pos => {
                setPosition(pos)
                console.log(pos)
                setStatus(states.GRANTED)
                setLoading(false)
            },
            err => {
                setError(err)
                setStatus(states.ERROR)
                setLoading(false)
            }
        )
    }

    return { status, position, error, getCurrentPosition, loading }
}