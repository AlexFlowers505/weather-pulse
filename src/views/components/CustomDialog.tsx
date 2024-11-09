import React, { useState, useEffect } from "react"
import { messageWrapperStyle as tw } from "../../styles/components/MessageWrapper.style"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import InfoMessage from "./InfoMessage"


export default function CustomDialog(): React.JSX.Element | null {
    const isDialogOpen = useSelector((state: RootState) => state.dialog.isOpen)
    const [isOpen, setIsOpen] = useState<boolean>(isDialogOpen)
    const dialogContent = useSelector((state: RootState) => state.dialog.content)
    const [content, setContent] = useState<any>(dialogContent)

    useEffect(() => {
        setIsOpen(isDialogOpen)
        setContent(dialogContent)
    }, [isDialogOpen])


    return (
        console.log(isOpen),
        isOpen ? (
        <div className={`outer-message-wrapper ${tw.outerWrapper}`}>
            <div className={`message-wrapper ${tw.wrapper}`}>
                <InfoMessage message={content} />
            </div>
        </div>
        ) : null
    )
}
