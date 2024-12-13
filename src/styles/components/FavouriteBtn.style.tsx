import { tailwindStyleClassType } from "../../types/overalls/overalls"

export const favouriteBtnStyle: tailwindStyleClassType = {
    notFavourite: `
        hover:!text-favourite
        focus:!text-favourite
    `,
    isFavourite: `
        !text-favourite
    `
}