import { TwStylesObject } from "../../types/overalls/overalls"

export const favouriteBtnStyle: TwStylesObject = {
    notFavourite: `
        hover:!text-favourite
        focus:!text-favourite
    `,
    isFavourite: `
        !text-favourite
    `
}