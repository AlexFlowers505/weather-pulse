import { messageWrapperStyle as tw } from "../../styles/components/MessageWrapper.style"

export default function MessageWrapper({children}) {
    return (
        <div className={`message-wrapper ${tw.wrapper}`}>
            {children}
        </div>
    )
}
