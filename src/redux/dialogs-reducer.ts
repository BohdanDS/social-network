import {v1} from "uuid";

export type DialogItemType = {
    name: string
    id: string
}
export type MessageType = {
    message: string
    id: string
}
export type DialogType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessage: string
}

const ADD_MESSAGE = "ADD-MESSAGE";

export type DialogsActionsTypes =
    ReturnType<typeof addMessageCreator>

let initialState: DialogType = {

    dialogs: [
        {id: v1(), name: 'Mentos'},
        {id: v1(), name: 'Dimon'},
        {id: v1(), name: 'Farelnik'},
        {id: v1(), name: 'Kirill'},
        {id: v1(), name: 'Varvar'},
    ],
    messages: [
        {id: v1(), message: "Hello!"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: 'PES!'},
        {id: v1(), message: "GG!"},
        {id: v1(), message: 'TEST'},
    ],
    newMessage: ''
}

const dialogsReducer = (state: DialogType = initialState, action: DialogsActionsTypes): DialogType => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage: MessageType = {id: v1(), message: action.message}
            return {...state, messages: [...state.messages, newMessage], newMessage: ''}
        default:
            return state;
    }

}
export const addMessageCreator = (message: string) => {
    return {
        type: "ADD-MESSAGE",
        message
    } as const
}

export default dialogsReducer;