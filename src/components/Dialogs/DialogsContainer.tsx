import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

export type StateDialogsType = {
    // state: DialogPropsType
    // dispatch: (action: ActionsTypes) => void
};

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const addMessage = () => {
                    if (store.getState().dialogsPage.newMessage) {
                        store.dispatch(addMessageCreator())
                    }

                }
                const onChangeNewMessageText = (text: string) => {
                    store.dispatch(updateNewMessageTextCreator(text))
                }

                return (<Dialogs state={store.getState().dialogsPage} onAddMessage={addMessage} onChangeMessage={onChangeNewMessageText}/>)
            }}
            </StoreContext.Consumer>
    )
}
export default DialogsContainer;