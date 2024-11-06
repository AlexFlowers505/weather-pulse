import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const forecastItemsStyle: tailwindStyleClassType = {
    horizontalLayout: `
        flex
        flex-row
        justify-between
        items-center
        overflow-x-scroll
    `,
    verticalLayout: `
        flex
        flex-col
        justify-between
        items-start
    `,
}