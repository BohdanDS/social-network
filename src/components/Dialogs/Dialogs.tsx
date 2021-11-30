import s from "./Dialogs.module.css"
import DialogItem from "./DiaologItem/DialogItem";
import Message from "./Message/Message";
import {DialogItemPropsType, MessagePropsType} from "../../Redux/state";
import React from "react";

type DialogPropsType = {
    state: {
        messages: Array<MessagePropsType>,
        dialogs: Array<DialogItemPropsType>
    }
}

const Dialogs = (props:DialogPropsType) => {

    let dialogsElement = props.state.dialogs.map((dialog)=> {
        return (
            <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar}/>
        )
    })
    let messageElement = props.state.messages.map((message) => {
        return (
            <Message id={message.id} messageText={message.messageText}/>
        )
    })

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const alertMessage = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElement}
            </div>
            <div className= {s.messages}>
                {messageElement}
                <textarea ref={newMessageElement}></textarea>
                <div>
                    <button onClick={alertMessage}>Sent message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs