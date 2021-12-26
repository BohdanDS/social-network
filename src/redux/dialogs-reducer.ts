import {DialogPropsType, MessageType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export type DialogsActionsTypes =
  ReturnType<typeof addMessageCreator>
  | ReturnType<typeof updateNewMessageTextCreator>

let initialState = {

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

const dialogsReducer = (state: DialogPropsType = initialState, action: DialogsActionsTypes) => {

  switch (action.type) {

    case ADD_MESSAGE:
      let newMessage: MessageType = {
        id: 5,
        message: state.newMessage
      };
      state.messages.push(newMessage);
      state.newMessage = '';
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessage = action.newMessage;
      return state;

    default:
      return state;
  }

}
export const addMessageCreator = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessageTextCreator = (text: string) => ({
  type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text
} as const)

export default dialogsReducer;