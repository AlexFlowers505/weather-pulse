export const getMostAppearedIcon = (icons: string[] | null | undefined): string | null => {
    if (!icons || icons.length === 0) return null

    // there are two types of icons with the same weather info: night icons and day icons, so we ignore this aspect while getting an average icon info
    // TODO: we return day n night icons now, so modifier matters, update the fn so that it can return day and night icons

    const dayIconModifier = 'd'
    const onlyWeatherInfoIcons = icons.map( icon => icon?.slice(0, -1))
    return onlyWeatherInfoIcons.sort((a, b) =>
        onlyWeatherInfoIcons.filter(v => v === a).length - onlyWeatherInfoIcons.filter(v => v === b).length
    ).pop()?.concat(dayIconModifier) || null
}

