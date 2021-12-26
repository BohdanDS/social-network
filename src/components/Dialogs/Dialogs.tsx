import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPropsType} from "../../redux/store";

export type StateDialogsType = {
    state: DialogPropsType
    // dispatch: (action: ActionsTypes) => void
    onAddMessage: () => void
    onChangeMessage: (text: string) => void
};

const Dialogs = ({state, onAddMessage, onChangeMessage}: StateDialogsType) => {

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = state.messages
        .map(m => <Message message={m.message} id={m.id}/>)

    const addMessage = () => {
        if (state.newMessage) {
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
                value={state.newMessage}
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