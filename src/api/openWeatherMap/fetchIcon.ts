import { IconsUrl } from "../../config/api/openWeatherMap/iconUrl.config"

export async function fetchIcon(iconName: string): Promise<string> {

    const url: string = `${IconsUrl.entry}${IconsUrl.iconPath}${iconName}${IconsUrl.modifier}${IconsUrl.extention}` 

    try {
        const response = await fetch(url)
        if (!response.ok) {
            console.error(`Failed to fetch icon: ${response.status} - ${response.statusText}`)
            throw new Error('Failed to fetch weather icon')
        }
        console.log('Icon URL:', url)
        return url
    } catch (error) {
        console.error('Error fetching weather icon:', error)
        throw error
    }
}
// 'http://openweathermap.org/img/wn/01n@2x.png'
// 'https://openweathermap.org/img/wn/@4x.png'