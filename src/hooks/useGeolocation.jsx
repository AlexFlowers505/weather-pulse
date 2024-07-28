import { useState, useEffect } from 'react'
import states from '../constants/locationAccessStates'

export function useGeolocation() {
    const [status, setStatus] = useState(states.IDLE)
    const [position, setPosition] = useState(null)
    const [error, setError] = useState(null)

    useEffect( () => {
        if ("geolocation" in navigator && "permissions" in navigator) {
            navigator.permissions
                .query({ name: 'geolocation' })
                .then(result => {
                    switch (result.state) {
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
                    }
                    result.onchange = () => {
                        switch (result.state) {
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
                        }
                    }
                })
        } else setStatus(states.UNSUPPORTED)
    }, [])

    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(
            pos => {
                setPosition(pos)
                setStatus(states.GRANTED)
            },
            err => {
                setError(err)
                setStatus(states.ERROR)
            }
        )
    }

    return { status, position, error, getCurrentPosition }
}