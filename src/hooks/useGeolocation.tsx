import { useState, useEffect } from 'react'
import states from '../constants/locationAccessStates'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../redux/store/store'
import { switchLocationAccess } from '../redux/slices/locationAccess/locationAccessSlice'

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
    const dispatch = useDispatch<AppDispatch>()

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
            dispatch(switchLocationAccess(states.UNSUPPORTED))
        }
    }, [])

    const handlePermissionChange = (status: statusType) => {
        switch (status) {
            case states.GRANTED:
                dispatch(switchLocationAccess(states.GRANTED))
                getCurrentPosition()
                break
            case states.PROMPT:
                dispatch(switchLocationAccess(states.PROMPT))
                break
            case states.DENIED:
                dispatch(switchLocationAccess(states.DENIED))
                break
            default:
                dispatch(switchLocationAccess(states.ERROR))
                break
        }
    }

    const getCurrentPosition = () => {
        setLoading(true)
        navigator.geolocation.getCurrentPosition(
            pos => {
                setPosition(pos)
                dispatch(switchLocationAccess(states.GRANTED))
                setLoading(false)
            },
            err => {
                if (err.code === err.PERMISSION_DENIED) {
                    dispatch(switchLocationAccess(states.DENIED))
                } else {
                    setError(err)
                    dispatch(switchLocationAccess(states.ERROR))
                }
                setLoading(false)
            }
        )
    }

    return { position, error, getCurrentPosition, loading }
}