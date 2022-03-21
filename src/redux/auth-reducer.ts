import {Auth, authorizeUser} from "../API/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import login from "../components/Login/Login";

export type initialStateType = {
    id: null | number
    email: string | null
    password: string | null
    isAuth: boolean
    isFetching: boolean
}
let initialState: initialStateType = {
    id: null,
    email: null,
    password: null,
    isAuth: false,
    isFetching: false
}
export type AuthActionsType = authUserType

const authReducer = (state: initialStateType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case "SET_USER_DATE": {
            return {
                ...state, ...action.payload,
            }
        }
        default:
            return state
    }
}

export type authUserType = ReturnType<typeof authUser>
export const authUser = (id: number | null, email: string | null, password: string | null, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATE',
        payload: {
            id,
            email,
            password,
            isAuth
        }
    } as const
}
//THUNK
export const authorizeCurrentUser = (): AppThunk => (dispatch): Promise<void> => {
    return authorizeUser().then(response => {
            if (response.data.resultCode === 0) {
                let schema = response.data.data
                dispatch(authUser(schema.id, schema.email, schema.login, true))
            }
        }
    )
}

export const loginUser = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    Auth.loginByCredentials(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(authUser(response.data.userId, email, password, true))
            } else {
                dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
            }
        })
}
export const logOut = (): AppThunk => (dispatch) => {
    Auth.logOut()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(authUser(null, null, null, false))
            }
        })
}

export default authReducer