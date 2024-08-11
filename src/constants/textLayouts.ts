export enum alignTypes {
    left,
    center,
    right
}

export type textLayoutsType = {
    align: {
        left: alignTypes
        center: alignTypes
        right: alignTypes
    }
}

const textLayouts: textLayoutsType = {
    align: {
        left: alignTypes.left,
        center: alignTypes.center,
        right: alignTypes.right,
    }
} as const

export default textLayouts