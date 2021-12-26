import {SidebarType} from "./store";

export type SideBarActionsTypes = any;

let initialState = {
  friends: [
    {id: 1, name: 'Mentos'},
    {id: 2, name: 'Dimon'},
    {id: 3, name: 'Farelnik'},
    {id: 4, name: 'Kirill'},
    {id: 5, name: 'Varvar'},
  ]
}

const sidebarReducer = (state: SidebarType = initialState, action: SideBarActionsTypes) => {
  return state;
}

export default sidebarReducer;