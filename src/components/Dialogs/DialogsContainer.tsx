import {compose, Dispatch} from 'redux';
import {addMessageCreator, DialogItemType, MessageType, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";

type MapStateToPropsType = {
    dialogsItems: Array<DialogItemType>
    messages: Array<MessageType>
    newMessage: string
}

type MapDispatchToPropsType = {
    onChangeMessage: (text: string) => void
    onAddMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsItems: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
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

compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)


export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);