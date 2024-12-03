import { BtnBasedComponentType } from "../overalls/overalls"

export type LocateMeBtnType = Omit<BtnBasedComponentType, 'onClick'> & {
    onClick?: () => void
}