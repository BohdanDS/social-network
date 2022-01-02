export {}
type SidebarType = {
  friends: Array<FriendType>
}
 type FriendType = {
  id: number
  name: string
}
type PostProps = {
  id: number,
  message: string,
  likesCount: number
}
type PostsType = {
  posts: Array<PostProps>
  newPostText: string
}
type DialogItemType = {
  name: string
  id: number
}
type MessageType = {
  message: string
  id: number
}
type DialogPropsType = {
  dialogs: Array<DialogItemType>
  messages: Array<MessageType>
  newMessage: string
}
// export type StateType = {
//   profilePage: PostsType
//   dialogsPage: DialogPropsType
//   sidebar: SidebarType
// }
// export type ActionsTypes =
//   ProfileActionsTypes
//   | DialogsActionsTypes
//   | SideBarActionsTypes
//
// export type StoreType = {
//   _state: StateType
//   _callSubscriber: (state: StateType) => void
//   getState: () => StateType
//   subscribe: (observer: (state: StateType) => void) => void
//   dispatch: (action: ActionsTypes) => void
// }
//
// let store: StoreType = {
//   _state: {
//     profilePage: {
//       posts: [
//         {id: 1, message: "First Post", likesCount: 12},
//         {id: 2, message: "Hello", likesCount: 3},
//       ],
//       newPostText: ''
//     },
//     dialogsPage: {
//       dialogs: [
//         {id: 1, name: 'Mentos'},
//         {id: 2, name: 'Dimon'},
//         {id: 3, name: 'Farelnik'},
//         {id: 4, name: 'Kirill'},
//         {id: 5, name: 'Varvar'},
//       ],
//       messages: [
//         {id: 1, message: "Hello!"},
//         {id: 2, message: "How are you?"},
//         {id: 3, message: 'PES!'},
//         {id: 4, message: "GG!"},
//         {id: 5, message: 'TEST'},
//       ],
//       newMessage: ''
//     },
//     sidebar: {
//       friends: [
//         {id: 1, name: 'Mentos'},
//         {id: 2, name: 'Dimon'},
//         {id: 3, name: 'Farelnik'},
//         {id: 4, name: 'Kirill'},
//         {id: 5, name: 'Varvar'},
//       ]
//     }
//   },
//   _callSubscriber(state: StateType) {
//     console.log('State has changed')
//   },
//   getState() {
//     return this._state;
//   },
//   subscribe(observer: (state: StateType) => void) {
//     this._callSubscriber = observer; // наблюдатель, pattern
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//     this._callSubscriber(this._state);
//   }
// }
// export default store;
