import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs = ({dialogsItems, newMessage, onAddMessage, onChangeMessage, messages}: DialogsPropsType) => {


    let dialogsElements = dialogsItems
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElements = messages
        .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const addMessage = () => {
        if (newMessage) {
            onAddMessage()
        }

    }
    const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        onChangeMessage(text)
    }

    return (<>
            <h2 className={s.title}>Messages</h2>
            <div className={s.dialogs}>
                <div className={s.dialogs__items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.send_message}>
            <textarea
                onChange={onChangeNewMessageText}
                value={newMessage}
                placeholder={'Write your message'}
            />
                        <button onClick={addMessage}>Send message</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dialogs;