import s from "./Dialogs.module.css"
import DialogItem from "./DiaologItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    addMessageActionCreator,
    changeMessageActionCreator,
    DialogItemPropsType,
    MessagePropsType
} from "../../Redux/state";
import React from "react";
import {type} from "os";

type DialogPropsType = {
    state: {
        messages: Array<MessagePropsType>,
        dialogs: Array<DialogItemPropsType>
    }
    newMessageText:string
    addNewMessage:()=>void
    changeTextMessage: (message:string) =>void
    dispatch:(action: ActionsTypes) =>void
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

    const addMessageText = () => {
        // if (newMessageElement.current)
        // props.addNewMessage()
        // props.changeTextMessage('')
        props.dispatch(addMessageActionCreator())


    }

    const changeNewMessageText = () => {
      if(newMessageElement.current){
          // props.changeTextMessage(newMessageElement.current.value)
          props.dispatch(changeMessageActionCreator(newMessageElement.current.value))
      }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElement}
            </div>
            <div className= {s.messages}>
                {messageElement}
                <textarea value={props.newMessageText} ref={newMessageElement} onChange={changeNewMessageText}></textarea>
                <div>
                    <button onClick={addMessageText}>Sent message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs