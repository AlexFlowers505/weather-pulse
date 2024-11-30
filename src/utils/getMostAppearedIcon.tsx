export const getMostAppearedIcon = (icons: string[] | null | undefined): string | null => {
    if (!icons || icons.length === 0) return null

    const onlyWeatherInfoIcons = icons.map( icon => icon)
    const mostAppearedIcon = onlyWeatherInfoIcons.sort((a, b) =>
        onlyWeatherInfoIcons.filter(v => v === a).length - onlyWeatherInfoIcons.filter(v => v === b).length
    ).pop() || null
    return mostAppearedIcon
}

