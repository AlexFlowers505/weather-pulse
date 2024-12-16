import { TwStylesObject } from "../../types/overalls/overalls" 

export const ContentRichInfoBlockStyle: TwStylesObject = {
    listItemSymbol: `
        text-borderColor
        text-base
        font-light
    `,
    contentItem: `
        flex
        flex-col
        justify-start
        items-start
        gap-1
        w-full
    `,
    contentItemHeader: `
        flex
        flex-row
        justify-start
        items-start
        gap-3
    `,
    contentItemIcon: `
        w-7
        h-7
        text-text
    `,
    contentItemHeading: `
        text-borderColor
        text-lg
        font-semibold
        text-left
        w-full
        
        md:text-xl
        md:text-center
    `,
    contentItemDetails: `
        inline-flex
        flex-row
        justify-start
        items-start
        flex-wrap
        gap-0
    `,
    contentItemDetailsWrapper: `
        inline-flex
        flex-row
        justify-start
        items-start
        flex-wrap
        gap-x-2
        w-full
        pl-2
    `,
    contentItemDetail: `
        text-borderColor
        text-base
        font-medium
    `,
    contentItemDetailBold: `
        font-semibold
    `,
    itemBtn: `
        !py-2 
        !px-4
        ml-2 
        mt-2 
        !rounded-xl
        text-text
    `,
}