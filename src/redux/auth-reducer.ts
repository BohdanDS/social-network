export type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
}
let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}
type ActionsType = authUserType

const authReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_USER_DATE": {
            return {
                ...state, ...action.payload, isAuth: true
            }
        }
        default:
            return state
    }
}

export type authUserType = ReturnType<typeof authUser>
export const authUser = (id: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATE',
        payload: {
            id,
            email,
            login
        }
    } as const
}

export default authReducer