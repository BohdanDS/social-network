import {compose, Dispatch} from 'redux';
import {addMessageCreator, DialogItemType, MessageType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";

type MapStateToPropsType = {
    dialogsItems: Array<DialogItemType>
    messages: Array<MessageType>
}

type MapDispatchToPropsType = {
    onAddMessage: (message:string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsItems: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onAddMessage: (message:string) => {
            dispatch(addMessageCreator(message))
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