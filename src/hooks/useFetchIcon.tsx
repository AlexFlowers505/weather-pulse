import { useEffect, useState } from "react"
import { fetchIcon } from "../api/openWeatherMap/fetchIcon"

export const useFetchIcon = (trigger: any, icon: string): string => {
    const [iconUrl, setIconUrl] = useState('')

    useEffect(() => {
        const loadIcon = async () => {
            try {
                const url = await fetchIcon(icon)
                setIconUrl(url)
            } catch (error) {
                console.error('Error fetching icon:', error)
            }
        }

        loadIcon()
    }, [trigger])

    return iconUrl
}

