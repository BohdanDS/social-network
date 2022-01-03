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
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export type DialogsActionsTypes =
    ReturnType<typeof addMessageCreator>
    | ReturnType<typeof updateNewMessageTextCreator>

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
            let newMessage: MessageType = {id: v1(), message: state.newMessage};
            return {...state, messages: [...state.messages, newMessage], newMessage: ''}

        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessage: action.payload.newMessage};

        default:
            return state;
    }

}
export const addMessageCreator = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}


export const updateNewMessageTextCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        payload: {
            newMessage: text
        }
    } as const

}

export default dialogsReducer;