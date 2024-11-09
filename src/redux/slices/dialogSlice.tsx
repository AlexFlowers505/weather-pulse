import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { alignTypes } from '../../constants/textLayouts'

interface DialogState {
	isOpen: boolean
    content: any
}

export const initialState: DialogState = {
	isOpen: false,
    content: {
        hasEmoticon: false,
        hasDismissBtn: false,
        descriptionLayout: alignTypes.center,
        heading: ``,
        hasDesc: false,
        hasBtn: false,
        hasCustomContent: false,
    },
}

const dialogSlice = createSlice({
	name: 'dialog',
	initialState,
	reducers: {
        toggleDialog: (state, action?: PayloadAction<any>) => {
            state.isOpen = action?.payload.isOpen
            state.content = action?.payload.content ?? initialState.content
        }
	},
})

export const { toggleDialog } = dialogSlice.actions
export default dialogSlice.reducer

