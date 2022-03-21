import {authorizeCurrentUser} from "./auth-reducer";
import {AppThunk} from "./redux-store";

const initialState = {
    initialized: false
}
type InitialStateType = {
    initialized: boolean
}
export type InitAppActionType = SetInitializedType

export const initAppReducer = (state: InitialStateType = initialState, action: InitAppActionType): InitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED": {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}

//Action creator
type SetInitializedType = ReturnType<typeof setInitialized>
export const setInitialized = () => {
    return {
        type: 'SET-INITIALIZED'
    } as const
}

//Thunk
export const initializeApp = (): AppThunk => (dispatch ) => {
    dispatch(authorizeCurrentUser())
        //@ts-ignore
        .then(dispatch(setInitialized()))
}