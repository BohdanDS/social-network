import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsTypes} from "./profile-reducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogs-reducer";
import sidebarReducer, {SideBarActionsTypes} from "./sidebar-reducer";
import usersReducer, {UsersActionTypes} from "./users-reducer";
import authReducer, {AuthActionsType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type AppActionsTypes = ProfileActionsTypes | DialogsActionsTypes | SideBarActionsTypes | UsersActionTypes | AuthActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsTypes>

export default store;

//@ts-ignore
window.store = store
