import React, { useState, useEffect } from "react"
import { messageWrapperStyle as tw } from "../../styles/components/MessageWrapper.style"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store/store"
import InfoMessage from "./InfoMessage"
import { initialState, toggleDialog } from "../../redux/slices/dialogSlice"


export default function CustomDialog(): React.JSX.Element | null {
    const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
    const [isOpen, setIsOpen] = useState<boolean>(isDialogOpen)
    const dialogContent = useSelector((state: RootState) => state.dialog.content)
    const [content, setContent] = useState<any>(dialogContent)

    const dispatch = useDispatch<AppDispatch>()

    const handleCloseDialog = (evt: React.MouseEvent) => {
        if (evt.target === evt.currentTarget) {
            dispatch(toggleDialog({ isOpen: false, content: initialState.content }))
        }
    }

    useEffect(() => {
        setIsOpen(isDialogOpen)
        setContent(dialogContent)
    }, [isDialogOpen])


    return (
        console.log(isOpen),
        isOpen ? (
        <div className={`outer-message-wrapper ${tw.outerWrapper}`} onClick={ (evt: React.MouseEvent) => handleCloseDialog(evt) }>
            <div className={`message-wrapper ${tw.wrapper}`}>
                <InfoMessage message={content} />
            </div>
        </div>
        ) : null
    )
}
