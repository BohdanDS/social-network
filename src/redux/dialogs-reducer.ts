export type DialogItemType = {
    name: string
    id: number
}
export type MessageType = {
    message: string
    id: number
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
        {id: 1, name: 'Mentos'},
        {id: 2, name: 'Dimon'},
        {id: 3, name: 'Farelnik'},
        {id: 4, name: 'Kirill'},
        {id: 5, name: 'Varvar'},
    ],
    messages: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: 'PES!'},
        {id: 4, message: "GG!"},
        {id: 5, message: 'TEST'},
    ],
    newMessage: ''
}

const dialogsReducer = (state: DialogType = initialState, action: DialogsActionsTypes): DialogType => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage: MessageType = {id: 5, message: state.newMessage};
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