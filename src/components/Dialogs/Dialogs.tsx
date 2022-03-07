import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import TextArea from "../common/FormControls/TextArea";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = ({dialogsItems, onAddMessage, messages}: DialogsPropsType) => {


    let dialogsElements = dialogsItems
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElements = messages
        .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const addNewMessage = (value: FormDataType) => {
        value.newMessageBody && onAddMessage(value.newMessageBody)
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
                        <AddMessageFromReduxForm onSubmit={addNewMessage}/>
                    </div>

                </div>
            </div>
        </>
    )
}
const maxLength30 = maxLengthCreator(50)

const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea} name='newMessageBody' placeholder='Enter message' validate={[required, maxLength30]}/>
            <div></div>
            <button type={"submit"}>Submit</button>
        </form>
    )
}
type FormDataType = {
    newMessageBody: string
}

const AddMessageFromReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;