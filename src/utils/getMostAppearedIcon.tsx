export const getMostAppearedIcon = (icons: string[]) => {
    return icons.sort((a, b) =>
        icons.filter(v => v === a).length - icons.filter(v => v === b).length
    ).pop()
}