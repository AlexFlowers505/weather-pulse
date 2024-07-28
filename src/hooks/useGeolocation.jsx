import { useState, useEffect } from 'react'
import states from '../constants/locationAccessStates'

export function useGeolocation() {
    const [status, setStatus] = useState(states.IDLE)
    const [position, setPosition] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if ("geolocation" in navigator && "permissions" in navigator) {
            navigator.permissions
                .query({ name: 'geolocation' })
                .then(result => {
                    handlePermissionChange(result.state)
                    result.onchange = () => handlePermissionChange(result.state)
                })
        } else {
            setStatus(states.UNSUPPORTED)
        }
    }, [])

    const handlePermissionChange = (state) => {
        switch (state) {
            case states.GRANTED:
                setStatus(states.GRANTED)
                getCurrentPosition()
                break
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