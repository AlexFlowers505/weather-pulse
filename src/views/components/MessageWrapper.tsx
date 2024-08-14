import React from "react"
import { messageWrapperStyle as tw } from "../../styles/components/MessageWrapper.style"

type messageWrapperPropsType = {
    children: React.ReactNode
}

export default function MessageWrapper({children}: messageWrapperPropsType): React.JSX.Element {
    return (
        <div className={`message-wrapper ${tw.wrapper}`}>
            {children}
        </div>
    )
}
