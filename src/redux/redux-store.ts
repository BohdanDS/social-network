import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsTypes} from "./profile-reducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogs-reducer";
import sidebarReducer, {SideBarActionsTypes} from "./sidebar-reducer";
import usersReducer, {UsersActionTypes} from "./users-reducer";
import {InitAppActionType, initAppReducer} from "./app-reducer";
import authReducer, {AuthActionsType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    initApp: initAppReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type AppActionsTypes =
    ProfileActionsTypes
    | DialogsActionsTypes
    | SideBarActionsTypes
    | UsersActionTypes
    | AuthActionsType
    | InitAppActionType

export type AppThunk<ReturnType = void | Promise<void>> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsTypes>

export default store;

//@ts-ignore
window.store = store
