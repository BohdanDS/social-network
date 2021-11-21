import s from "./Dialogs.module.css"
import DialogItem from "./DiaologItem/DialogItem";
import {DialogItemPropsType, MessagePropsType} from "../../index";
import Message from "./Message/Message";

type DialogPropsType = {
    usersArray : Array<DialogItemPropsType>
    messageArray: Array<MessagePropsType>
}

const Dialogs = (props:DialogPropsType) => {

    let dialogsElement = props.usersArray.map((dialog)=> {
        return (
            <DialogItem id={dialog.id} dialogTitle={dialog.name}/>
        )
    })
    let messageElement = props.messageArray.map((message) => {
        return (
            <Message id={message.id} messageText={message.messageText}/>
        )
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElement}
            </div>
            <div className= {s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs