import React, {Dispatch} from 'redux';
import {addMessageCreator, DialogItemType, MessageType, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogsItems: Array<DialogItemType>
    messages: Array<MessageType>
    newMessage: string
}

type MapDispatchToPropsType = {
    onChangeMessage: (text:string)=> void
    onAddMessage: ()=>void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        dialogsItems: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeMessage: (text: string) => {
            dispatch(updateNewMessageTextCreator(text))
        },
        onAddMessage: () => {
            dispatch(addMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;